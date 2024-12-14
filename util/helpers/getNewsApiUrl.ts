import { AppLanguages, NEWS_API_URL } from "../appconstants";
import { Maybe } from "../typehelpers/maybe";

export type TGetNewsApiUrlParams = {
    topic: Maybe<string>
    language: keyof typeof AppLanguages
}

export const getNewsApiUrl = ({ topic, language }: TGetNewsApiUrlParams) => {
    let topicString = topic ? `/${topic}` : '';
    return `${NEWS_API_URL}/${language}${topicString}`;
};
