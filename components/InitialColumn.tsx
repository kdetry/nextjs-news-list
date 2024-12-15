import { languageAtom } from "@/state/languageAtom";
import ColumnDisplay, { TColumnDisplayProps } from "./ColumnDisplay";
import { useAtomValue } from "jotai";
import { useEffect, useRef, useState } from "react";
import { fetchAndJson } from "@/util/helpers/fetchAndJson";
import { getNewsApiUrl } from "@/util/helpers/getNewsApiUrl";
import { TNewsItem } from "@/util/helpers/parseGoogleNewsRss";
import { Maybe } from "@/util/typehelpers/maybe";

export type TInitialColumnProps = TColumnDisplayProps

export default function InitialColumn({column}: TInitialColumnProps) {

    const [data, setData] = useState<Maybe<TNewsItem[]>>([]);
    const language = useAtomValue(languageAtom);
    const languageRef = useRef(column.language);

    useEffect(() => {
        if (languageRef.current !== language) {
            fetchAndJson(getNewsApiUrl({ topic: null, language }))
            .then((data) => setData(data))
            .catch((error) => console.error(error));
        }
        languageRef.current = language;
    }, [language]);

    return <ColumnDisplay 
        column={{
            title: 'Son Haberler',
            query: 'default',
            data: data || column.data,
            status: 'fulfilled',
            language: language
        }}
    />
}
