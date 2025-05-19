
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/blogData";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Barbie Font Generator</title>
        <meta name="description" content="Explore our blog for tips, tricks, and inspiration for using Barbie fonts and typography." />
        {/* Website Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Barbie Font Generator",
              "url": "https://barbiefontgenerator.online/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://barbiefontgenerator.online/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        
        {/* Blog Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Barbie Font Generator Blog",
              "description": "Explore tips, tricks, and inspiration for using Barbie fonts and typography",
              "url": "https://barbiefontgenerator.online/blog",
              "author": {
                "@type": "Organization",
                "name": "Barbie Font Generator"
              },
              "blogPost": ${JSON.stringify(blogPosts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.excerpt,
                "datePublished": post.publishedDate || post.date,
                "url": `https://barbiefontgenerator.online/blog/${post.slug}`
              })))}
            }
          `}
        </script>
      </Helmet>
      
      <div className="min-h-screen w-full">
        {/* Background gradient with pattern */}
        <div className="fixed inset-0 bg-gradient-to-br from-barbie-blush via-white to-barbie-peach z-[-1]">
          <div className="absolute inset-0 opacity-5 pattern-dots-xl z-0"></div>
        </div>

        {/* Main content */}
        <main className="py-8 px-4 max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Blog</h1>
            <p className="text-muted-foreground">
              Explore our blog for tips, tricks, and inspiration for using Barbie fonts and typography.
            </p>
          </div>

          {/* Blog post cards */}
          <div className="grid grid-cols-1 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                <Link to={`/blog/${post.slug}`}>
                  {post.featuredImage && (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs text-primary/70 font-medium uppercase tracking-wider mb-2 block">
                      {post.category} • {post.date}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center">
                      <span className="text-primary text-sm font-medium">Read more →</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
