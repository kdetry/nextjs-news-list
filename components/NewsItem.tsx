import { TNewsItem } from "@/util/helpers/parseGoogleNewsRss";

export type TNewsItemProps = {
    item: TNewsItem;
}

export default function NewsItem({ item }: TNewsItemProps) {
    return (
        <div className="flex flex-col gap-2">
            <a href={item.link} target="_blank" className="text-sm">{item.title}</a>
        </div>
    )
}