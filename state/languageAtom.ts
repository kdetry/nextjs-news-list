import { AppLanguages } from "@/util/appconstants";
import { atomWithStorage, createJSONStorage } from "jotai/utils";



const languageStorage = createJSONStorage<keyof typeof AppLanguages>(() => ({
    getItem: (key: string): keyof typeof AppLanguages => {
        if (typeof document === 'undefined') return "TR";
        const value = document.cookie.split('; ').find(row => row.startsWith(`${key}=`));
        return value ? JSON.parse(value.split('=')[1]) : "TR";
    },
    setItem: (key: string, value: keyof typeof AppLanguages) => {
        if (typeof document === 'undefined') return;
        document.cookie = `${key}=${value}; path=/; max-age=31536000`;
    },
    removeItem: (key: string) => {
        if (typeof document === 'undefined') return;
        document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    },
}));

export const languageAtom = atomWithStorage<keyof typeof AppLanguages>("language", "TR", languageStorage);
