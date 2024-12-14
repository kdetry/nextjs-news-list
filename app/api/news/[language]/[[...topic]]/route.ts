import { rssFetcher } from "@/util/helpers/rssFetcher";

type Params = {
  language: string;
  topic?: string[];
};

export const dynamic = "force-static";
export const revalidate = 600;

export async function GET(request: Request, { params }: { params: Promise<Params> }) {
  const { language, topic: topicArray } = await params;
  const topic = topicArray?.[0] || null;
  
  console.log("API language--->", language);
  const data = await rssFetcher({ topic, language });
  return Response.json({
    message: topic ? `Hello from the news API! ${topic}` : 'Hello from the news API!',
    data,
  });
} 