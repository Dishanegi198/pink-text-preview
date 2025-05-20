
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/blogData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <main className="py-8 px-4 max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Blog</h1>
            <p className="text-muted-foreground">
              Explore our blog for tips, tricks, and inspiration for using Barbie fonts and typography.
            </p>
          </div>

          {/* Blog post cards in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
                <Link to={`/blog/${post.slug}`} className="block h-full flex flex-col">
                  {post.featuredImage && (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  )}
                  <CardHeader className="flex-1">
                    <div className="text-xs text-primary/70 font-medium uppercase tracking-wider mb-2">
                      {post.category} • {post.date}
                    </div>
                    <CardTitle className="text-lg md:text-xl hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-0">
                    <span className="text-primary text-sm font-medium">Read more →</span>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
