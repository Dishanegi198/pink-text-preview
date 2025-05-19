
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Barbie Font Generator</title>
        <meta name="description" content="Explore our blog for tips, tricks, and inspiration for using Barbie fonts and typography." />
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
            <article className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
              <Link to="/blog/best-barbie-fonts-for-instagram">
                <div className="p-6">
                  <span className="text-xs text-primary/70 font-medium uppercase tracking-wider mb-2 block">
                    Typography Tips • May 18, 2025
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                    10 Best Barbie Fonts for Instagram Bios & Aesthetics (Free & Stylish!)
                  </h2>
                  <p className="text-muted-foreground line-clamp-3">
                    Want your Instagram profile to scream Barbiecore in the most fabulous way possible? Choosing the right font can transform your boring bio into a pink paradise that gets all the likes.
                  </p>
                  <div className="mt-4 flex items-center">
                    <span className="text-primary text-sm font-medium">Read more →</span>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
