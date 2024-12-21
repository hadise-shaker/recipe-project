export interface Recipe {
  id: number
  title: string
  image: string
  summary: string
  instructions: string
  readyInMinutes: number
  servings: number
}

export interface Category {
  id: number
  name: string
  image: string
  value: string
  background: string
}
