export const GOOGLE_NEWS_RSS_URL = "https://news.google.com/rss";
export const NEWS_API_URL = `${process.env.NEXT_PUBLIC_PROJECT_URL}/api/news`;

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