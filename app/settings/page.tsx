"use client"

import { useAtom } from "jotai"
import { themeAtom } from "@/state/themeAtom"
import ContainerWrapper from "@/components/ContainerWrapper"

export default function SettingsPage() {
    const [theme, setTheme] = useAtom(themeAtom)

    return (
        <ContainerWrapper>
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold mb-6">Settings</h1>
                
                <div className="max-w-md">
                    <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <div>
                            <h2 className="font-medium">Theme Mode</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Choose your preferred theme</p>
                        </div>
                        <select 
                            value={theme}
                            onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
                            className="px-3 py-2 border rounded-md bg-white dark:bg-gray-700 dark:border-gray-600"
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System</option>
                        </select>
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    )
}
