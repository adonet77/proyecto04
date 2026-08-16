import { useContext, useMemo } from 'react'
import CartContext from '../context/CartContext'

/**
 * Hook wrapper para acceder al carrito y acciones.
 */
export default function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')

  const { state, dispatch } = ctx

  const addItem = (product, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity } })
  }

  const removeItem = id => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QTY', payload: { id, quantity } })
  const clear = () => dispatch({ type: 'CLEAR' })

  const subtotal = useMemo(() => state.items.reduce((s, i) => s + i.price * i.quantity, 0), [state.items])

  return { items: state.items, addItem, removeItem, updateQuantity, clear, subtotal }
}
