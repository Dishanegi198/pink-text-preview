
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/blogData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  return (
    <Layout>
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        {/* Schema markup */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${post.title}",
              "description": "${post.metaDescription || post.excerpt}",
              "image": "${post.featuredImage}",
              "author": {
                "@type": "Person",
                "name": "Barbie Font Generator Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Barbie Font Generator",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://barbiefontgenerator.online/og-image.png"
                }
              },
              "datePublished": "${post.publishedDate || post.date}",
              "dateModified": "${post.modifiedDate || post.date}",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://barbiefontgenerator.online/blog/${post.slug}"
              }
            }
          `}
        </script>
        
        {/* BreadcrumbList schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://barbiefontgenerator.online/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://barbiefontgenerator.online/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "${post.title}",
                  "item": "https://barbiefontgenerator.online/blog/${post.slug}"
                }
              ]
            }
          `}
        </script>
        
        {/* FAQ schema */}
        {post.faqs && (
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": ${JSON.stringify(post.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                })))}
              }
            `}
          </script>
        )}
      </Helmet>
      
      <div className="min-h-screen w-full">
        {/* Background gradient with pattern */}
        <div className="fixed inset-0 bg-gradient-to-br from-barbie-blush via-white to-barbie-peach z-[-1]">
          <div className="absolute inset-0 opacity-5 pattern-dots-xl z-0"></div>
        </div>

        {/* Main content */}
        <main className="py-8 px-4 max-w-3xl mx-auto">
          {/* Breadcrumbs using shadcn breadcrumb component */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <article className="prose prose-pink max-w-none">
            <span className="text-xs text-primary/70 font-medium uppercase tracking-wider mb-4 block">
              {post.category} • {post.date}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{post.title}</h1>
            
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-8">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="rounded-lg w-full h-auto shadow-md"
                />
              </div>
            )}
            
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* FAQs Section */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 border-t pt-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {post.faqs.map((faq, index) => (
                    <div key={index} className="bg-white/50 p-6 rounded-lg shadow-sm">
                      <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
          
          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-xl font-bold mb-4">More Articles</h2>
            <div className="grid grid-cols-1 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.slug !== slug)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link 
                    key={relatedPost.slug} 
                    to={`/blog/${relatedPost.slug}`}
                    className="block hover:bg-primary/5 rounded-lg p-4 transition-colors"
                  >
                    <h3 className="font-medium text-foreground">{relatedPost.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{relatedPost.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default BlogPost;
