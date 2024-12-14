import { rssFetcher } from "@/util/helpers/rssFetcher";

export const dynamic = "force-static";
export const revalidate = 60;

export async function GET() {
  const data = await rssFetcher({ topic: null, language: "ENGB" });

  return Response.json({
    message: "Hello from the news API!",
    data,
  });
}
