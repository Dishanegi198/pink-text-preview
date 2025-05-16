
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { SignatureGenerator } from '@/components/SignatureGenerator';
import { cn } from '@/lib/utils';

const Signature = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Barbie Font Signature Generator - Create a Handwritten Signature</title>
        <meta name="description" content="Design a unique, handwritten-style Barbie font signature for your creative projects. Download your signature for digital or printable use. Perfect for branding and creative users." />
        <meta name="keywords" content="barbie signature font, handwritten signature generator, barbie font signature, custom signature maker" />
        
        {/* WebApplication Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Barbie Font Signature Generator",
            "url": "https://barbiefontgenerator.com/signature",
            "description": "Design a unique, handwritten-style Barbie font signature for your creative projects. Download your signature for digital or printable use.",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "screenshot": "/og-image.png",
            "featureList": "Custom signature input, Multiple handwritten-style fonts, Color customization, Size adjustment, PNG download with transparent background",
            "softwareVersion": "1.0"
          })}
        </script>
        
        {/* SoftwareApplication Schema (additional context) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Barbie Signature Generator",
            "operatingSystem": "Web",
            "applicationCategory": "DesignApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "142"
            }
          })}
        </script>
        
        {/* HowTo Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Create a Custom Barbie-Style Signature",
            "description": "Create your own unique signature with Barbie-inspired fonts for branding, documents, or creative projects.",
            "tool": {
              "@type": "HowToTool",
              "name": "Barbie Font Signature Generator"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Enter your name or signature text",
                "text": "Type your name or preferred signature text in the input field.",
                "position": 1
              },
              {
                "@type": "HowToStep",
                "name": "Select a handwritten font style",
                "text": "Choose from our collection of Barbie-inspired handwritten font styles.",
                "position": 2
              },
              {
                "@type": "HowToStep",
                "name": "Choose a color",
                "text": "Select a color that matches your personal brand or preferences.",
                "position": 3
              },
              {
                "@type": "HowToStep",
                "name": "Adjust signature size",
                "text": "Use the size slider to create the perfect signature size.",
                "position": 4
              },
              {
                "@type": "HowToStep",
                "name": "Download your signature",
                "text": "Click the download button to save your signature as a PNG with transparent background.",
                "position": 5
              }
            ]
          })}
        </script>
        
        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can I use my Barbie font signature for legal documents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While our signature generator creates beautiful signatures, we recommend checking with the specific requirements of legal documents in your jurisdiction. Some documents may require traditional handwritten signatures rather than digital ones."
                }
              },
              {
                "@type": "Question",
                "name": "What format is my signature downloaded in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your signature is downloaded as a PNG image with a transparent background, making it easy to place over any document or design without a visible box around it."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use my signature for branding materials?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Our Barbie font signatures are perfect for adding a personal touch to your brand assets, including websites, social media, business cards, and product packaging."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a character limit for my signature?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, to ensure optimal visual quality, there is a 30-character limit for signatures. Most signatures work best when kept relatively short and simple."
                }
              }
            ]
          })}
        </script>
        
        {/* Tool Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Barbie Font Signature Generator Tool",
            "creator": {
              "@type": "Organization",
              "name": "Lovable"
            },
            "abstract": "Free online tool to create stylish, handwritten-style signatures with Barbie fonts for digital documents, branding, and creative projects.",
            "keywords": "barbie signature font, handwritten signature generator, barbie font signature, custom signature maker",
            "audience": {
              "@type": "Audience",
              "audienceType": "Designers, brand owners, content creators, Barbie fans"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen w-full">
        {/* Background gradient with pattern */}
        <div className="fixed inset-0 bg-gradient-to-br from-barbie-blush via-white to-barbie-peach z-[-1]">
          <div className="absolute inset-0 opacity-5 pattern-dots-xl z-0"></div>
        </div>

        {/* Main content */}
        <main className={cn(
          "py-8 px-4 max-w-7xl mx-auto transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}>
          <SignatureGenerator />

          {/* SEO Content */}
          <section className="max-w-4xl mx-auto px-4 py-8 text-muted-foreground text-sm">
            <div className="prose prose-sm max-w-none">
              <h2 className="text-2xl font-bold text-primary mb-4">Create Professional Signatures with Our Barbie Signature Generator</h2>
              <p>
                Add a personal touch to your digital content with our <strong>Barbie Signature Generator</strong>. Whether you're designing for social media, branding materials, or personal projects, our signature generator helps you create stylish handwritten-looking signatures that stand out.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Perfect for Branding and Personal Use</h3>
              <p>
                Our <strong>Barbie font signature generator</strong> is the perfect tool for creators, small business owners, and anyone looking to add a personal touch to their digital presence. The handwritten-style Barbie fonts add charm and personality to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Digital documents and contracts</li>
                <li>Email signatures</li>
                <li>Social media content</li>
                <li>Branding materials</li>
                <li>Blog posts and articles</li>
                <li>Personal correspondence</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Why Use a Barbie-Style Signature?</h3>
              <p>
                Barbie has long been associated with creativity, style, and personal expression. Using our <strong>Barbie font signature</strong> adds a touch of that iconic aesthetic to your communications. The handwritten-style fonts convey authenticity and personality that generic typed text simply can't match.
              </p>
              <p>
                A custom signature created with our generator:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Makes your communication feel more personal</li>
                <li>Helps establish brand identity</li>
                <li>Creates a memorable visual element</li>
                <li>Adds a professional yet approachable tone</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">How to Use Your New Signature</h3>
              <ol className="list-decimal pl-5 space-y-2 mt-3">
                <li>Create your signature using our generator</li>
                <li>Download the image as a PNG with transparent background</li>
                <li>Insert it into your digital documents, emails, or website</li>
                <li>Resize as needed while maintaining quality</li>
                <li>Save different versions for various purposes</li>
              </ol>
              
              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Tips for Creating the Perfect Signature</h3>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Keep it simple:</strong> The most effective signatures are clean and easily readable</li>
                <li><strong>Choose complementary colors:</strong> Select a color that works well with your brand palette</li>
                <li><strong>Size appropriately:</strong> Create a signature that works well at different scales</li>
                <li><strong>Consider context:</strong> Create different signature styles for different purposes</li>
              </ul>
              
              <p className="mt-6">
                Ready to create your perfect signature? Try our <strong>Barbie Signature Generator</strong> today! If you're looking for more font options for other projects, check out our main <Link to="/" className="text-primary hover:text-primary/80 underline font-medium">barbie font generator</Link> for additional styles and features.
              </p>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default Signature;
