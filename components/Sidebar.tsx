"use client"

import Link from "next/link";
import AddColumnButton from "./AddColumnButton";
import { LanguageButton } from "./LanguageButton";
import { useAtom } from "jotai";
import { savedColumnsAtom } from "@/state/savedColumns";

export default function Sidebar() {

    const [savedColumns, setSavedColumns] = useAtom(savedColumnsAtom);

    const deleteColumn = (query: string) => {
        const newColumns = savedColumns.filter((column) => column.query !== query);
        setSavedColumns(newColumns);
    }

    return (
        <aside className="w-52 flex-shrink-0 h-screen bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-300 dark:border-gray-700">
            <nav className="flex flex-col gap-4">
                <h1 className="text-xl font-bold dark:text-white">News Reader</h1>
                <div className="flex flex-col gap-2">
                    <LanguageButton />
                    <Link href="/" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</Link>
                    <AddColumnButton />
                    <Link href="/settings" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Settings</Link>
                </div>
                <hr className="dark:border-gray-700" />
                {savedColumns.length > 0 && (
                    <>
                        <h2 className="text-lg font-bold dark:text-white">Saved Columns</h2>
                        <ul>
                            {savedColumns.map((column) => (
                                <li key={column.query} className="relative block w-full border-b border-t border-gray-300 dark:border-gray-700 mb-2">
                                    <span className="dark:text-gray-300">Title: {column.title} | Query: {column.query}</span>
                                    <button 
                                        className="absolute -right-5 top-[calc(50%-10px)] my-0 w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 bg-red-500 text-white"
                                        onClick={() => {
                                            deleteColumn(column.query);
                                        }}
                                    >×</button>
                                    </li>
                                ))}
                            </ul>
                    </>
                )}
            </nav>
        </aside>
    );
}