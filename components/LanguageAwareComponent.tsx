'use client';

import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { AppLanguages, languageAtom } from '@/state/languageAtom';
import { fetchAndJson } from '@/util/helpers/fetchAndJson';
import { getNewsApiUrl } from '@/util/helpers/getNewsApiUrl';
import ColumnDisplay from './ColumnDisplay';

interface LanguageAwareComponentProps {
    initialLanguage: keyof typeof AppLanguages;
    initialData: any; // Replace 'any' with your data type
}

export default function LanguageAwareComponent({ initialLanguage, initialData }: LanguageAwareComponentProps) {
    const [language] = useAtom(languageAtom);
    const [data, setData] = useState(initialData);

    useEffect(() => {
        // Skip the initial fetch if the language matches the SSR data
        if (language === initialLanguage) return;

        const fetchData = async () => {
            try {
                // Replace this with your actual fetch logic
                fetchAndJson(getNewsApiUrl({ topic: null, language }))
                    .then((result) => setData(result.data))
                    .catch((error) => console.error(error));
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [language, initialLanguage]);

    return (
        <ColumnDisplay
            column={{
                title: 'Son Haberler',
                query: 'default',
                data: data,
                status: 'fulfilled',
                language: language
            }}
        />
    );
} 