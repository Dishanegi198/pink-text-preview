
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/blogData";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  return (
    <Layout>
      <Helmet>
        <title>{post.title} | Barbie Font Generator</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="min-h-screen w-full">
        {/* Background gradient with pattern */}
        <div className="fixed inset-0 bg-gradient-to-br from-barbie-blush via-white to-barbie-peach z-[-1]">
          <div className="absolute inset-0 opacity-5 pattern-dots-xl z-0"></div>
        </div>

        {/* Main content */}
        <main className="py-8 px-4 max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm mb-8">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="mx-2 text-muted-foreground">›</span>
            <Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
            <span className="mx-2 text-muted-foreground">›</span>
            <span className="text-primary">{post.title}</span>
          </div>
          
          <article className="prose prose-pink max-w-none">
            <span className="text-xs text-primary/70 font-medium uppercase tracking-wider mb-4 block">
              {post.category} • {post.date}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
