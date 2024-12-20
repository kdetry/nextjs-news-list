"use client";

import addFormAtom from "@/state/addformAtom";
import { addColumnAtom } from "@/state/savedColumns";
import { useIsMounted } from "@/util/hooks/IsMounted";
import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";

export type TColumnInfo = {
    title: string;
    query: string;
}

export default function ColumnAddForm() {
    const emptyColumn: TColumnInfo = {
        title: "",
        query: ""
    };
    const [column, setColumn] = useState<TColumnInfo>(emptyColumn);
    const [isModalOpen, setIsModalOpen] = useAtom(addFormAtom);
    const addColumn = useSetAtom(addColumnAtom);

    const mounted = useIsMounted();

    const handleSave = () => {
        setIsModalOpen(false);
        setColumn(emptyColumn);
        addColumn(column);
    }

    if (!mounted || !isModalOpen) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                onClick={() => setIsModalOpen(false)}>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-white p-4 rounded-lg w-full max-w-md flex flex-col gap-2">
                <input
                    type="text"
                    className="border-2 border-gray-300 rounded-md p-2 dark:border-white"
                    value={column?.title || ""}
                    placeholder="Title"
                    onChange={(e) =>
                        setColumn({ ...column, title: e.target.value || "" })} />
                <input
                    type="text"
                    className="border-2 border-gray-300 rounded-md p-2 dark:border-white"
                    value={column?.query || ""}
                    placeholder="Query"
                    onChange={(e) =>
                        setColumn({ ...column, query: e.target.value || "" })} />
                <button className="bg-blue-500 text-white p-2 rounded-md dark:bg-blue-600" onClick={handleSave}>Save</button>
            </div>
        </>
    )
}