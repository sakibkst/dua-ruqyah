"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/sidebar"
import { DuaContent } from "@/components/dua-content"
import { SettingsPanel } from "@/components/settings-panel"
import type { Category, Dua } from "@/types"
import { fetchCategories, fetchDuas } from "@/lib/api"
import { useTheme } from "next-themes"

export function DuaApp() {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [duas, setDuas] = useState<Dua[]>([])
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [settings, setSettings] = useState({
    arabicFontSize: 28,
    translationFontSize: 28,
    arabicScript: "uthmani",
    fontFace: "uthmani",
  })
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories()
        setCategories(data)
        if (data.length > 0) {
          setSelectedCategory(data[0].id)
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      }
    }

    loadCategories()
  }, [])

  useEffect(() => {
    const loadDuas = async () => {
      if (selectedCategory) {
        try {
          const data = await fetchDuas(selectedCategory)
          setDuas(data)
        } catch (error) {
          console.error("Failed to fetch duas:", error)
        }
      }
    }

    loadDuas()
  }, [selectedCategory])

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }

  const updateSettings = (newSettings: Partial<typeof settings>) => {
    setSettings({ ...settings, ...newSettings })
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex h-screen bg-[#f5f9f6] dark:bg-gray-900 transition-colors duration-200">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="flex-1 overflow-auto">
        <DuaContent
          duas={duas}
          settings={settings}
          onToggleSettings={toggleSettings}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      </main>
      {isSettingsOpen && (
        <SettingsPanel
          settings={settings}
          onUpdateSettings={updateSettings}
          onClose={() => setIsSettingsOpen(false)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      )}
    </div>
  )
}
