// app/api/live/route.js
import axios from "axios";

export async function GET(request) {
  try {
    // Call the News API with a query related to health and therapy
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "real estate development nigeria",
        language: "en",
        sortBy: "publishedAt",
        pageSize: 4, // Limit the number of articles
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching live data:", error);
    return new Response(JSON.stringify({ error: "Error fetching live data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
