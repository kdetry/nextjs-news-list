import { useEffect, useState } from "react";
import { fetchAndJson } from "../helpers/fetchAndJson";
import { getNewsApiUrl } from "../helpers/getNewsApiUrl";
import { Maybe } from "../typehelpers/maybe";
import { TNewsItem } from "../helpers/parseGoogleNewsRss";
import { TColumnInfo } from "@/components/ColumnAddForm";
import { languageAtom } from "@/state/languageAtom";
import { useAtomValue } from "jotai";
import { savedColumnsAtom } from "@/state/savedColumns";
import { AppLanguages } from "../appconstants";

type TColumnDataFulfilled = TColumnInfo & {
    data: Maybe<Array<TNewsItem>>;
    status: "fulfilled";
    language: keyof typeof AppLanguages;
}

type TColumnDataRejected = TColumnInfo & {
    data: null;
    status: "rejected";
    language: keyof typeof AppLanguages;
}

type TColumnDataPending = TColumnInfo & {
    data: null;
    status: "pending";
    language: keyof typeof AppLanguages;
}

export type TColumnData = TColumnDataFulfilled | TColumnDataRejected | TColumnDataPending;

export const useUserColumns = () => {

    const [columns, setColumns] = useState<Array<Maybe<TColumnData>>>([]);
    const savedColumns = useAtomValue(savedColumnsAtom);
    const language = useAtomValue(languageAtom);

    useEffect(() => {
        if (!savedColumns) return;

        const parsedColumns = savedColumns.map((column: TColumnInfo) => ({
            ...column,
            data: null,
            status: 'pending' as const,
            language: language
        }));

        setColumns(parsedColumns);
    }, [language, savedColumns]);

    useEffect(() => {
        if (columns.length === 0 || columns.every(column => column?.status !== 'pending')) return;
    
        Promise.allSettled(
            columns
                .filter(column => column?.query && column?.status === 'pending')
                .map(async (column) => {
                    if (!column) return null;
                    const data: { data: Maybe<Array<TNewsItem>> } = await fetchAndJson(
                        getNewsApiUrl({ topic: column.query, language }));
                    const status = data && data.data && data.data.length > 0 ? "fulfilled" : "rejected";

                    return {
                        ...column,
                        data: data.data,
                        status: status,
                        language: language
                    }
                })).then((results) => {
                    const fulfilledResults = results
                        .filter(result => result.status === "fulfilled")
                        .map((result) => result.value as TColumnData);

                    console.log("fulfilledResults-->", fulfilledResults);
                    setColumns(fulfilledResults);
                });
    }, [columns, language]);

    return columns
}
