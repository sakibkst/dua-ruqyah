"use client"

import { useState } from "react"
import { ChevronRight, Settings, Copy, Bookmark, Share, Play, MoreHorizontal, Home, Moon, Sun } from "lucide-react"
import type { Dua } from "@/types"
import { Button } from "@/components/ui/button"

interface DuaContentProps {
  duas: Dua[]
  settings: {
    arabicFontSize: number
    translationFontSize: number
    arabicScript: string
    fontFace: string
  }
  onToggleSettings: () => void
  theme?: string
  onToggleTheme?: () => void
}

export function DuaContent({ duas, settings, onToggleSettings, theme, onToggleTheme }: DuaContentProps) {
  const [selectedDua, setSelectedDua] = useState<string | null>(null)

  const toggleDua = (duaId: string) => {
    setSelectedDua(selectedDua === duaId ? null : duaId)
  }

  return (
    <div className="h-full flex flex-col">
      <header className="bg-white dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <Home className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          <ChevronRight className="h-4 w-4" />
          <span>Dua's Importance</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-400 dark:text-gray-500">The servant is dependent...</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-xs dark:text-gray-300">
            <span className="mr-1">En</span>
            <ChevronRight className="h-3 w-3" />
          </Button>
          <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs">
            Support Us
          </Button>
          <Button variant="ghost" size="icon" onClick={onToggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={onToggleSettings}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-4 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 mb-4">
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-t-lg">
            <h2 className="text-emerald-800 dark:text-emerald-400 font-medium">
              Section: The servant is dependent on his Lord
            </h2>
          </div>

          {duas.map((dua) => (
            <div key={dua.id} className="border-t border-gray-100 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/30 rounded-full p-2 flex-shrink-0">
                    <span className="text-emerald-600 dark:text-emerald-500 font-medium">{dua.number}</span>
                  </div>
                  <h3 className="text-emerald-800 dark:text-emerald-400 font-medium pt-1">{dua.title}</h3>
                </div>

                <div className="mb-6">
                  <p
                    className="text-right mb-4 font-arabic dark:text-white"
                    style={{ fontSize: `${settings.arabicFontSize}px` }}
                  >
                    {dua.arabic}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 italic mb-4">{dua.transliteration}</p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 dark:text-white">Translation</h4>
                    <p
                      className="text-gray-700 dark:text-gray-300"
                      style={{ fontSize: `${settings.translationFontSize}px` }}
                    >
                      {dua.translation}
                    </p>
                  </div>

                  {dua.reference && (
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Reference</h4>
                      <p className="text-sm dark:text-gray-300">{dua.reference}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <Copy className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <Bookmark className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <Share className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
