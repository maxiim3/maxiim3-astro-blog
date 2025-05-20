import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  const snippets = await getCollection("snippets"); // Fetch the new collection

  const allItems = [
    ...posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`, // Use slug for links
    })),
    ...snippets.map((snippet) => ({
      ...snippet.data,
      link: `/snippets/${snippet.slug}/`, // Adjust link structure
    })),
  ];

  // Optional: Sort all items by date if they have a common date field
  // allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: allItems,
  });
}
