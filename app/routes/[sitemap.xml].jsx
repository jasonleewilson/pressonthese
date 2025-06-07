export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://pressonthese.com/</loc>
        <lastmod>2025-06-07T03:36:39+00:00</lastmod>
        <priority>1.00</priority>
    </url>
    <url>
        <loc>https://pressonthese.com/about</loc>
        <lastmod>2025-06-07T03:36:39+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://pressonthese.com/gallery</loc>
        <lastmod>2025-06-07T03:36:39+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://pressonthese.com/faq</loc>
        <lastmod>2025-06-07T03:36:39+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    <url>
        <loc>https://pressonthese.com/contact</loc>
        <lastmod>2025-06-07T03:36:39+00:00</lastmod>
        <priority>0.80</priority>
    </url>
    </urlset>
    `;
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
