// Export makes it possible to import elsewhere
export interface User {
  username: string
  password: string
  product: Product
}

export interface Product {
  id: number
  price: number
  sale: boolean
}

export interface Task {}
