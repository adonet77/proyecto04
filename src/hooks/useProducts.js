import { useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../services/products'

/**
 * Hook para manejar carga, filtrado y paginación de productos (cliente-side).
 */
export default function useProducts({ initialPage = 1, pageSize = 9 } = {}) {
  const [all, setAll] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [filters, setFilters] = useState({ search: '', category: 'all', minPrice: 0, maxPrice: Infinity })
  const [page, setPage] = useState(initialPage)
  const [size, setSize] = useState(pageSize)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchProducts()
      .then(data => {
        if (!mounted) return
        setAll(data)
        setError(null)
      })
      .catch(err => mounted && setError(err))
      .finally(() => mounted && setLoading(false))
    return () => (mounted = false)
  }, [])

  // Aplicar filtros
  const filtered = useMemo(() => {
    const s = filters.search.trim().toLowerCase()
    return all.filter(p => {
      if (filters.category !== 'all' && p.category !== filters.category) return false
      if (s && !p.name.toLowerCase().includes(s) && !p.description.toLowerCase().includes(s)) return false
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false
      return true
    })
  }, [all, filters])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / size))

  // Productos en la página actual
  const pageItems = useMemo(() => {
    const start = (page - 1) * size
    return filtered.slice(start, start + size)
  }, [filtered, page, size])

  // Categorías disponibles
  const categories = useMemo(() => {
    const set = new Set(all.map(p => p.category))
    return ['all', ...Array.from(set)]
  }, [all])

  // Cambiar filtros resetea la página a 1
  const updateFilters = next => {
    setFilters(prev => ({ ...prev, ...next }))
    setPage(1)
  }

  return {
    loading,
    error,
    products: pageItems,
    total,
    page,
    size,
    totalPages,
    setPage,
    setSize,
    filters,
    updateFilters,
    categories,
    raw: all
  }
}
