import { XMLParser } from "fast-xml-parser";

export type TNewsItem = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
};

export const parseGoogleNewsRss = async (
  rssData: string
): Promise<Array<TNewsItem>> => {
  // Parse XML string to DOM
  const parser = new XMLParser();
  const xmlDoc = parser.parse(rssData);

  // Get all item elements
  const items: Array<TNewsItem> = xmlDoc.rss.channel.item;

  return items;
};
