"use client";

import { useUserColumns } from "@/util/hooks/UserColumnsHook";
import ColumnDisplay from "./ColumnDisplay";

export default function UserColumns() {

    const columns = useUserColumns();

    return (
        <>
            {columns.filter(column => column !== null).map((column, index) => (
                <ColumnDisplay column={column} key={`${column?.query}${index}`} />
            ))}
        </>
    )
}