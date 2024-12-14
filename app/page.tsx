import ColumnAddForm from "@/components/ColumnAddForm";
import ContainerWrapper from "@/components/ContainerWrapper";
import LanguageAwareComponent from "@/components/LanguageAwareComponent";
import UserColumns from "@/components/UserColumns";
import { AppLanguages } from "@/util/appconstants";
import { fetchAndJson } from "@/util/helpers/fetchAndJson";
import { getNewsApiUrl } from "@/util/helpers/getNewsApiUrl";
import { cookies } from "next/headers";

export default async function Home() {
    const cookieStore = await cookies()

    let language = cookieStore.get("language")?.value || "TR";
    const languageKeys = Object.keys(AppLanguages);
    if (!languageKeys.includes(language)) {
        language = "TR";
    }

    const { data } = await fetchAndJson(getNewsApiUrl({ topic: null, language }));

    return (
        <ContainerWrapper>
            <div className="flex flex-1 flex-col gap-4 p-4 h-screen overflow-scroll">
                <ColumnAddForm />
                <div className="flex flex-1 flex-row gap-4 flex-wrap w-full [&>*]:basis-[calc(25%-12px)] [&>*]:flex-grow-0">
                    <LanguageAwareComponent 
                        initialData={data}
                        initialLanguage={language}
                    />
                    <UserColumns />
                </div>
            </div>
        </ContainerWrapper>
    );
}
