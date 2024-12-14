export default function UserColumnsPlaceholder() {
    return <div className="flex flex-1 flex-col gap-2 h-[45vh] overflow-y-scroll border-2 border-gray-300 rounded-lg p-4">
        {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2 animate-pulse">
                <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mt-2"></div>
                </div>
            </div>
        ))}
    </div>

}