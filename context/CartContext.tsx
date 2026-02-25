'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  unit: string
}

interface OrderHistory {
  id: string
  date: string
  items: CartItem[]
  total: number
}

interface CartContextType {
  cart: CartItem[]
  orderHistory: OrderHistory[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  saveOrderToHistory: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('petaniMudaCart')
      const savedHistory = localStorage.getItem('petaniMudaOrderHistory')
      
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart)
          console.log('Loaded cart from localStorage:', parsed)
          setCart(parsed)
        } catch (e) {
          console.error('Error parsing cart:', e)
        }
      }
      
      if (savedHistory) {
        try {
          const parsed = JSON.parse(savedHistory)
          setOrderHistory(parsed)
        } catch (e) {
          console.error('Error parsing history:', e)
        }
      }
      
      setIsLoaded(true)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      console.log('Saving cart to localStorage:', cart)
      localStorage.setItem('petaniMudaCart', JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  // Save order history to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem('petaniMudaOrderHistory', JSON.stringify(orderHistory))
    }
  }, [orderHistory, isLoaded])

  const addToCart = (item: CartItem) => {
    console.log('Adding to cart:', item)
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id)
      if (existingItem) {
        const updated = prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
        console.log('Updated cart (existing item):', updated)
        return updated
      }
      const updated = [...prevCart, item]
      console.log('Updated cart (new item):', updated)
      return updated
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const saveOrderToHistory = () => {
    if (cart.length === 0) return
    
    const newOrder: OrderHistory = {
      id: `ORDER-${Date.now()}`,
      date: new Date().toISOString(),
      items: [...cart],
      total: getTotalPrice()
    }
    
    setOrderHistory((prev) => [newOrder, ...prev])
    clearCart()
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orderHistory,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        saveOrderToHistory,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
