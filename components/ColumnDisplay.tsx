import { TColumnData } from "@/util/hooks/UserColumnsHook";
import NewsItem from "./NewsItem";
import UserColumnsPlaceholder from "./UserColumnsPlaceholder";

export type TColumnDisplayProps = {
    column: TColumnData;
}

export default function ColumnDisplay({ column }: TColumnDisplayProps) {

    if (column.status === 'rejected') return null;

    if (column.status === 'pending') return <UserColumnsPlaceholder />;

    return (
        <div className="flex flex-1 flex-col gap-2 h-[45vh] overflow-y-scroll border-2 border-gray-300 rounded-lg p-2 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-center  border-b border-gray-300 dark:border-gray-700 pb-2">{column?.title}</h2>
            {column?.data && column?.data?.map((item, subIndex) => (
                <NewsItem item={item} key={`${item.title}${subIndex}`} />
            ))}
        </div>
    );
}
