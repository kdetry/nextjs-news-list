import { TNewsItem } from "@/util/helpers/parseGoogleNewsRss";

export type TNewsItemProps = {
    item: TNewsItem;
}

export default function NewsItem({ item }: TNewsItemProps) {

    const getAgoInfo = (pubDate: string) => {
        const date = new Date(pubDate);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffMinutes = Math.ceil(diffTime / (1000 * 60));
        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffMinutes < 60) return `${diffMinutes} minutes ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        return `${diffDays} days ago`;
    }

    const agoInfo = getAgoInfo(item.pubDate);

    return (
        <div className="flex flex-col gap-2 border-b border-gray-300 dark:border-gray-700 p-2">
            <a href={item.link} target="_blank" className="text-sm line-clamp-2 dark:text-white">{item.title}</a>
            <div className="flex gap-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">{agoInfo}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 pl-2 pr-2 border-l border-gray-300 dark:border-gray-700">{item.source}</span>
            </div>
        </div>
    )
}