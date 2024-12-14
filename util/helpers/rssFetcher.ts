import { AppLanguages } from "@/state/languageAtom";
import { GOOGLE_NEWS_RSS_URL } from "../appconstants";
import { Maybe } from "../typehelpers/maybe";
import { TNewsItem, parseGoogleNewsRss } from "./parseGoogleNewsRss";

export type TRssFetcherParams = {
  topic: Maybe<string>;
  language: keyof typeof AppLanguages;
};

export const rssFetcher = async ({
  topic,
  language,
}: TRssFetcherParams): Promise<Array<TNewsItem>> => {
  const languageData = AppLanguages[language];

  let queryString = `?hl=${languageData.hl}&gl=${languageData.gl}&ceid=${languageData.ceid}`;

  if (topic) {
    queryString = `${queryString}&q=${topic}`;
  }

  const response = await fetch(`${GOOGLE_NEWS_RSS_URL}${queryString}`);
  const responseText = await response.text();
  const data = await parseGoogleNewsRss(responseText);
  return data;
};
