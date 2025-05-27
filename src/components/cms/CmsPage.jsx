import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';

const CmsPage = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:1337/api/pages?filters[slug][$eq]=${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setPageData(result.data[0].attributes);
        } else {
          setPageData(null); // No page found with that slug
          setError(new Error('Page not found.'));
        }
      } catch (e) {
        setError(e);
        console.error("Failed to fetch page data:", e);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (loading) {
    return <p>Loading page...</p>;
  }

  if (error) {
    return <p>Error loading page: {error.message}</p>;
  }

  if (!pageData) {
    return <p>Page not found.</p>;
  }

  // Render title and content (parsed from Markdown)
  return (
    <div>
      <h1>{pageData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(pageData.content || '') }} />
    </div>
  );
};

export default CmsPage;
