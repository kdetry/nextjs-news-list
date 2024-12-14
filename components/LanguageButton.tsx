"use client"

import { languageAtom } from "@/state/languageAtom";
import { useAtom } from "jotai";

export const LanguageButton = () => {
    const [language, setLanguage] = useAtom(languageAtom);

    return (
        <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as typeof language)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white"
        >
            <option value="TR">Turkish</option>
            <option value="ENGB">English (UK)</option>
            <option value="ENUS">English (US)</option>
        </select>
    );
}