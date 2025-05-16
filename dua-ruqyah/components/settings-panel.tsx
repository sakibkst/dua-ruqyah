"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

interface SettingsPanelProps {
  settings: {
    arabicFontSize: number
    translationFontSize: number
    arabicScript: string
    fontFace: string
  }
  onUpdateSettings: (
    settings: Partial<{
      arabicFontSize: number
      translationFontSize: number
      arabicScript: string
      fontFace: string
    }>,
  ) => void
  onClose: () => void
  theme?: string
  onToggleTheme?: () => void
}

export function SettingsPanel({ settings, onUpdateSettings, onClose, theme, onToggleTheme }: SettingsPanelProps) {
  return (
    <div className="w-72 bg-white dark:bg-gray-800 border-l border-gray-100 dark:border-gray-700 h-full overflow-auto">
      <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
        <h2 className="font-medium dark:text-white">Font Settings</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium dark:text-white">Arabic Font Size</label>
            <span className="text-sm dark:text-gray-300">{settings.arabicFontSize}</span>
          </div>
          <Slider
            value={[settings.arabicFontSize]}
            min={16}
            max={40}
            step={1}
            onValueChange={(value) => onUpdateSettings({ arabicFontSize: value[0] })}
            className="my-4"
          />
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium dark:text-white">Translation Font Size</label>
            <span className="text-sm dark:text-gray-300">{settings.translationFontSize}</span>
          </div>
          <Slider
            value={[settings.translationFontSize]}
            min={16}
            max={40}
            step={1}
            onValueChange={(value) => onUpdateSettings({ translationFontSize: value[0] })}
            className="my-4"
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-medium block mb-2 dark:text-white">Arabic Script & Font Face</label>
          <Select value={settings.arabicScript} onValueChange={(value) => onUpdateSettings({ arabicScript: value })}>
            <SelectTrigger className="w-full dark:bg-gray-700 dark:text-white dark:border-gray-600">
              <SelectValue placeholder="Select script" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uthmani">Uthmani</SelectItem>
              <SelectItem value="indopak">IndoPak</SelectItem>
              <SelectItem value="imlaei">Imlaei</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium dark:text-white">Dark Mode</label>
            <Switch checked={theme === "dark"} onCheckedChange={onToggleTheme} />
          </div>
        </div>
      </div>

      <Separator className="dark:bg-gray-700" />

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium dark:text-white">View Settings</h2>
          <Button variant="ghost" size="sm" className="h-7 text-xs dark:text-gray-300">
            <X className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      <Separator className="dark:bg-gray-700" />

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-medium dark:text-white">Appearance Settings</h2>
          <Button variant="ghost" size="sm" className="h-7 text-xs dark:text-gray-300">
            <X className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>
      </div>
    </div>
  )
}
