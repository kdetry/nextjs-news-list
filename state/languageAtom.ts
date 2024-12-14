import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

type TLanguageInfo = {
    name: string;
    hl: string;
    gl: string;
    ceid: string;
}

type TLanguageOptions = Record<string, TLanguageInfo>

export const AppLanguages: TLanguageOptions = {
    ENGB: {
        name: "English (UK)",
        hl: "en-GB",
        gl: "GB",
        ceid: "GB:en"
    },
    ENUS: {
        name: "English (US)",
        hl: "en-US",
        gl: "US",
        ceid: "US:en"
    },
    TR: {
        name: "Turkish",
        hl: "tr-TR",
        gl: "TR",
        ceid: "TR:tr"
    }
}

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
