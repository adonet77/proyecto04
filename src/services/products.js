/**
 * Servicio simple para cargar productos mock desde public/mock/products.json
 */
export async function fetchProducts() {
  const res = await fetch('/mock/products.json')
  if (!res.ok) throw new Error('No se pudo cargar productos')
  return res.json()
}

export function findProductById(products, id) {
  return products.find(p => p.id === id)
}
