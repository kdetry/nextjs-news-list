import { rssFetcher } from "@/util/helpers/rssFetcher";

export async function GET() {
  const data = await rssFetcher({ topic: null, language: "ENGB" });

  return Response.json({
    message: "Hello from the news API!",
    data,
  });
}
