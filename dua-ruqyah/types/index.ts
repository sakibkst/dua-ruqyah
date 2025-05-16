export interface Category {
  id: string
  name: string
  subcategories: number
  duaCount: number
}

export interface Dua {
  id: string
  number: string
  title: string
  arabic: string
  transliteration: string
  translation: string
  reference?: string
}
