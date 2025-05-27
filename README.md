# suit0r.github.io

## Content Management (Strapi CMS)

Content for dynamic pages, such as those accessed via URLs like `/pages/some-page-slug`, is managed through an external Strapi Content Management System (CMS).

### Accessing the CMS

*   The Strapi admin panel is typically accessible at `http://localhost:1337/admin` during local development.
*   For a deployed version, this URL will be different and should be provided by the administrator who deployed the Strapi backend.

### Creating a New Page

1.  Navigate to **Content Manager** -> **Page** (or your specific content type for pages).
2.  Click **Create new entry**.
3.  Fill in the `title` (e.g., "About Our New Service").
4.  Fill in the `slug` (e.g., "about-our-new-service"). This is the URL part, so use lowercase letters, numbers, and hyphens.
5.  Write the main content in the `content` field using Markdown.
6.  Click **Save** and then **Publish**.

### Editing an Existing Page

1.  Navigate to **Content Manager** -> **Page**.
2.  Find the page you want to edit and click on it.
3.  Make your changes and click **Save**, then **Publish**.

### Important Notes

*   The frontend application fetches content from the Strapi API. Ensure the Strapi backend is running (for local development) or deployed and accessible.
*   The API endpoint for pages in the frontend is configured to fetch published pages. If you create a page and save it as a draft, it will not appear on the live site until published.