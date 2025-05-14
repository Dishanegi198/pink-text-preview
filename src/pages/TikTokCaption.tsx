
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { FontSelector } from '@/components/FontSelector';
import { ColorPicker } from '@/components/ColorPicker';
import { SizeSelector } from '@/components/SizeSelector';
import { DownloadButton } from '@/components/DownloadButton';
import { cn } from '@/lib/utils';
import { defaultFont, defaultColor } from '@/lib/fonts';

const TikTokCaption = () => {
  const [caption, setCaption] = useState('');
  const [font, setFont] = useState(defaultFont);
  const [color, setColor] = useState(defaultColor.value);
  const [size, setSize] = useState(32);
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
        <title>Barbie TikTok Caption Font Generator - Create Stylish Captions</title>
        <meta name="description" content="Generate eye-catching Barbie-themed fonts for your TikTok captions. Customize your text with our easy-to-use generator and make your posts stand out!" />
        <meta name="keywords" content="barbie tiktok font, tiktok caption generator, barbie font for tiktok, stylish tiktok captions" />
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
          <div className="w-full max-w-4xl mx-auto px-4 py-8">
            <div className="text-center mb-10 animate-fade-up">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                TikTok Captions
              </span>
              <h1 className="text-4xl font-bold mb-2 font-pacifico">
                Barbie TikTok Caption Generator
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Create eye-catching TikTok captions with Barbie-inspired fonts. Perfect for your viral videos!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
                {/* Caption Preview */}
                <div 
                  id="preview-container"
                  className={cn(
                    "w-full min-h-[300px] rounded-lg border p-6 flex items-center justify-center",
                    "bg-white/30 backdrop-blur-sm transition-all duration-300",
                    "opacity-100"
                  )}
                >
                  <div
                    id="text-preview"
                    className={cn(
                      "transition-all duration-300 max-w-full break-words text-center",
                      font.class
                    )}
                    style={{ 
                      color, 
                      fontSize: `${size}px`,
                      lineHeight: 1.2,
                      textShadow: color === '#FFFFFF' ? '0 0 2px rgba(0,0,0,0.3)' : 'none'
                    }}
                  >
                    {caption || "Your TikTok caption will appear here..."}
                  </div>
                </div>

                {/* Caption Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <textarea
                    placeholder="Enter your TikTok caption here..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className={cn(
                      "w-full pl-10 pr-4 py-3 rounded-lg border bg-white/50 backdrop-blur-sm",
                      "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                      "transition-all duration-200 min-h-[100px] resize-none"
                    )}
                    maxLength={150}
                    rows={4}
                  />
                  <div className="absolute right-3 bottom-3 text-xs text-muted-foreground">
                    {caption.length}/150
                  </div>
                </div>

                <div className="flex justify-center">
                  <DownloadButton 
                    elementId="text-preview" 
                    fileName={caption ? caption.substring(0, 20).replace(/\s+/g, '-').toLowerCase() : 'barbie-tiktok-caption'}
                    className="w-full max-w-xs mx-auto"
                  />
                </div>
              </div>

              <div className="glass rounded-lg border p-6 space-y-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                <FontSelector
                  selectedFont={font}
                  onChange={setFont}
                />
                
                <ColorPicker
                  selectedColor={color}
                  onChange={setColor}
                />
                
                <SizeSelector
                  size={size}
                  onChange={setSize}
                  min={18}
                  max={72}
                />

                <div className="space-y-2 pt-4 border-t">
                  <h3 className="text-sm font-medium">TikTok Caption Tips</h3>
                  <ul className="text-xs space-y-2 text-muted-foreground">
                    <li className="flex gap-2 items-start">
                      <span className="text-primary">•</span>
                      <span>Keep captions short and catchy</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-primary">•</span>
                      <span>Use relevant hashtags</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-primary">•</span>
                      <span>Add emojis for visual appeal</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-primary">•</span>
                      <span>Ask questions to boost engagement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* SEO Content */}
            <section className="max-w-4xl mx-auto px-4 py-8 text-muted-foreground text-sm">
              <div className="prose prose-sm max-w-none">
                <h2 className="text-2xl font-bold text-primary mb-4">Create Viral TikTok Captions with Our Barbie Font Generator</h2>
                <p>
                  Stand out on TikTok with eye-catching Barbie-styled captions that grab attention and increase engagement. Our <strong>Barbie TikTok Caption Font Generator</strong> helps you create visually appealing text that perfectly complements your videos and helps you go viral.
                </p>
                <p>
                  With the explosive popularity of TikTok and the iconic Barbie aesthetic, combining these trends gives your content a unique edge. Whether you're creating content for fashion, lifestyle, comedy, or product promotion, our caption generator adds that extra flair to help your videos stand out in crowded feeds.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Why TikTok Captions Matter</h3>
                <p>
                  TikTok captions aren't just an afterthought—they're a crucial part of your content strategy. They provide context for your videos, include searchable hashtags, and help viewers understand your content even when watching with the sound off. With our <strong>Barbie font for TikTok captions</strong>, you can create text that's as visually appealing as your video content.
                </p>
                
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Features of Our TikTok Caption Generator</h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li><strong>Multiple Barbie-inspired fonts</strong> to match your video's aesthetic</li>
                  <li><strong>Custom color selection</strong> including the perfect Barbie pinks</li>
                  <li><strong>Adjustable text size</strong> for perfect visibility</li>
                  <li><strong>Instant downloads</strong> as transparent PNG images</li>
                  <li><strong>Mobile-friendly design</strong> for creating captions on the go</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">How to Use Barbie Fonts in Your TikTok Videos</h3>
                <ol className="list-decimal pl-5 space-y-2 mt-3">
                  <li>Create your caption using our generator</li>
                  <li>Download the caption as a PNG image</li>
                  <li>Import the image into your favorite video editing app</li>
                  <li>Layer it over your TikTok video at your preferred timestamp</li>
                  <li>Adjust position, timing, and add any animations</li>
                  <li>Upload to TikTok and watch your engagement grow!</li>
                </ol>
                
                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Tips for Creating Viral TikTok Captions</h3>
                <p>
                  Make the most of our <strong>Barbie TikTok font generator</strong> with these proven strategies:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li><strong>Keep it brief:</strong> TikTok is fast-paced; your captions should be too</li>
                  <li><strong>Include relevant hashtags:</strong> Help your content reach interested viewers</li>
                  <li><strong>Ask questions:</strong> Encourage comments and engagement</li>
                  <li><strong>Use call-to-actions:</strong> Tell viewers what to do next</li>
                  <li><strong>Add emojis:</strong> Visual punctuation that adds personality</li>
                </ul>
                
                <p className="mt-6">
                  Start creating attention-grabbing TikTok captions today with our free <strong>Barbie TikTok Caption Generator</strong>! For even more styles and options, check out our main <Link to="/" className="text-primary hover:text-primary/80 underline font-medium">barbie font generator</Link> with additional customization features.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default TikTokCaption;
