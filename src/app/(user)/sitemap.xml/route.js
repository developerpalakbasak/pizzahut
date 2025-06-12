import { NextResponse } from "next/server";
import axios from "axios";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const dynamic = "force-dynamic"; // optional, for dynamic data

export async function GET() {
  // Fetch pizzas
  const fetchPizzas = async () => {
    try {
      const res = await axios.get(`${siteUrl}/api/pizza`);
      return res.data.allPizza;
    } catch (err) {
      console.error("Error fetching pizzas:", err.message);
      return [];
    }
  };

  const pizzas = await fetchPizzas();

  // Static pages
  const staticPages = [
    {
      url: siteUrl,
      lastModified: new Date().toISOString(),
      changeFreq: "daily",
      priority: 1.0,
    },
    // Add more static pages here
  ];

  // Dynamic pizza pages
  const pizzaPages = pizzas.map((pizza) => ({
    url: `${siteUrl}/pizza/${pizza._id}`,
    lastModified: new Date(pizza.date).toISOString(),
    changeFreq: "weekly",
    priority: 0.7,
  }));

  const allPages = [...staticPages, ...pizzaPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.changeFreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
