import { rssFetcher } from "@/util/helpers/rssFetcher";

type Params = {
  language: string;
  topic?: string[];
};

export async function GET(request: Request, { params }: { params: Promise<Params> }) {
  const { language, topic: topicArray } = await params;
  const topic = topicArray?.[0] || null;
  
  const data = await rssFetcher({ topic, language });
  return Response.json({
    message: topic ? `Hello from the news API! ${topic}` : 'Hello from the news API!',
    data,
  });
} 