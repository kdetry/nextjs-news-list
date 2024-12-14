"use client";

import addFormAtom from "@/state/addformAtom";
import { useSetAtom } from "jotai";

export default function AddColumnButton() {
    const setAddForm = useSetAtom(addFormAtom);

    return <button onClick={() => setAddForm(true)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-sm transition-colors duration-200 text-left">Add Column</button>;
}