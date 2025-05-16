"use client"

import { useState } from "react"
import { Search, Leaf, Home, BookOpen, Heart, Menu, Moon, Sun } from "lucide-react"
import type { Category } from "@/types"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SidebarProps {
  categories: Category[]
  selectedCategory: string | null
  onSelectCategory: (categoryId: string) => void
  theme?: string
  onToggleTheme?: () => void
}

export function Sidebar({ categories, selectedCategory, onSelectCategory, theme, onToggleTheme }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <>
      <div className="md:hidden absolute top-4 left-4 z-20">
        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      <div
        className={cn(
          "bg-white dark:bg-gray-800 w-72 flex-shrink-0 border-r border-gray-100 dark:border-gray-700 flex flex-col h-full transition-all duration-300 ease-in-out z-10",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-4 flex items-center gap-2 border-b border-gray-100 dark:border-gray-700">
          <Leaf className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
          <div>
            <h1 className="font-semibold text-lg dark:text-white">Dua & Ruqyah</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Hisnul Muslim</p>
          </div>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by Dua Categories"
              className="pl-9 bg-gray-50 dark:bg-gray-700 border-gray-100 dark:border-gray-600 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-2">
              <button
                className={cn(
                  "flex items-center w-full p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",
                  selectedCategory === category.id && "bg-emerald-50 dark:bg-emerald-900/20",
                )}
                onClick={() => onSelectCategory(category.id)}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mr-3 flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm dark:text-white">{category.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {category.subcategories} Subcats · {category.duaCount} Duas
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 dark:border-gray-700 p-2 flex justify-around">
          <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400">
            <Home className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400">
            <BookOpen className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500 dark:text-gray-400" onClick={onToggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </>
  )
}
