
import { useEffect, useState } from 'react';
import { FontGenerator } from '@/components/FontGenerator';
import { cn } from '@/lib/utils';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Background gradient with pattern */}
      <div className="fixed inset-0 bg-gradient-to-br from-barbie-blush via-white to-barbie-peach z-[-1]">
        <div className="absolute inset-0 opacity-5 pattern-dots-xl z-0"></div>
      </div>

      {/* Header */}
      <header className={cn(
        "w-full py-4 px-6 backdrop-blur-sm bg-white/30 border-b transition-all duration-500",
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-pacifico text-primary text-2xl">Barbie</span>
            <div className="h-5 w-px bg-primary/20 mx-2"></div>
            <span className="text-sm text-muted-foreground">Font Generator</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className={cn(
        "py-8 px-4 max-w-7xl mx-auto transition-opacity duration-500",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <FontGenerator />
      </main>

      {/* Footer */}
      <footer className={cn(
        "mt-auto py-6 px-4 text-center text-sm text-muted-foreground transition-opacity duration-500",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <p>Create beautiful Barbie-style text with our font generator.</p>
      </footer>

      {/* SEO Content Section */}
      <section className={cn(
        "max-w-4xl mx-auto px-4 py-12 text-muted-foreground text-sm transition-opacity duration-500",
        isLoaded ? "opacity-100" : "opacity-0"
      )}>
        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold text-primary mb-4">About Our Free Barbie Font Generator</h2>
          <p>
            Welcome to the ultimate <strong>Barbie font generator free</strong> tool that lets you create stunning Barbie-inspired text for all your creative projects. Whether you're planning a Barbie-themed party, creating social media graphics, designing invitations, crafting personalized merchandise, or just having fun expressing your love for all things Barbie, our <strong>free Barbie font generator</strong> is the perfect solution. Our tool captures the essence of the iconic Barbie brand with its playful, stylish, and instantly recognizable typography.
          </p>
          <p>
            In a world where personal branding and unique content creation are more important than ever, having access to specialized typography tools like our <strong>Barbie font generator</strong> gives you a creative edge. The nostalgic appeal of Barbie combined with modern design capabilities makes this tool perfect for both longtime fans and those newly inspired by recent Barbie cultural phenomena.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Why Choose Our Barbie Font Generator Online?</h3>
          <p>
            Our <strong>Barbie font generator online</strong> tool stands out with its easy-to-use interface and high-quality results. Unlike other generators, we offer multiple font styles including the popular <strong>Barbie font generator cursive</strong> option that mimics the iconic Barbie lettering. The best part? You can instantly <strong>Barbie font generator copy and paste</strong> your creation anywhere you need it!
          </p>
          <p>
            What sets our generator apart is the attention to detail in capturing authentic Barbie typography. We've carefully studied the evolution of Barbie branding over the decades to offer font options that range from classic vintage Barbie to modern movie-inspired styles. Additionally, our color palette has been meticulously selected to include the perfect pinks, purples, and complementary hues that have become synonymous with the Barbie aesthetic.
          </p>
          <p>
            Since our tool is completely web-based, there's no need to download or install any software. This makes it accessible from any device with an internet connection - whether you're on your computer, tablet, or smartphone. Our responsive design ensures a seamless experience regardless of screen size, giving you the freedom to create Barbie-style text whenever and wherever inspiration strikes.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Inspired by the Iconic Barbie Movie</h3>
          <p>
            Fans of the blockbuster film will love our <strong>Barbie movie font generator</strong> features that capture the essence of the movie's typography. Our tool includes fonts inspired by the <strong>Barbie movie font generator</strong> aesthetic, allowing you to recreate that magical pink world in your own designs.
          </p>
          <p>
            The 2023 Barbie movie directed by Greta Gerwig brought a fresh wave of Barbie enthusiasm to audiences worldwide. The film's distinctive visual style, including its custom typography, created a new benchmark for Barbie aesthetics. Our font generator incorporates elements from this cinematic milestone, giving you access to typography that evokes the modern, self-aware Barbie brand that captivated millions of viewers.
          </p>
          <p>
            Whether you're creating fan art, themed party invitations, or social media posts about the movie, our <strong>Barbie movie font generator</strong> helps you capture that perfect blend of nostalgia and contemporary style. The movie's impact on popular culture has been immense, and now you can tap into that visual language with just a few clicks.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">How to Use Our Barbie Font Generator</h3>
          <ol className="list-decimal pl-5 space-y-2 mt-3">
            <li>Enter your custom text in the input field - you can type anything from a single word to a short phrase</li>
            <li>Choose from our selection of Barbie-inspired fonts, including classic, modern, and movie-specific styles</li>
            <li>Select your preferred color from our palette of perfect Barbie pinks and complementary hues</li>
            <li>Adjust the font size to match your needs, whether you're creating a heading or smaller text</li>
            <li>Preview your creation in real-time to see exactly how your text will look</li>
            <li>Download your finished design as a PNG image with transparent background for easy use in any project</li>
            <li>Share your creation directly to social media or save it for later use in digital or print projects</li>
          </ol>
          
          <p className="mt-6">
            Start creating gorgeous Barbie-style text today with our completely <strong>free Barbie font generator</strong>. No sign-up required, no watermarks, just beautiful typography at your fingertips!
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Creative Uses for Your Barbie Font Creations</h3>
          <p>
            The possibilities for using your custom Barbie text are virtually endless! Here are some popular ways our users apply their creations:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-3">
            <li><strong>Social Media Content:</strong> Create eye-catching headers, quotes, or captions for Instagram, TikTok, and other platforms</li>
            <li><strong>Party Decorations:</strong> Design custom banners, signs, place cards, and labels for Barbie-themed celebrations</li>
            <li><strong>DIY Crafts:</strong> Add Barbie-style text to homemade t-shirts, tote bags, mugs, and other personalized items</li>
            <li><strong>Digital Invitations:</strong> Create personalized invites for birthdays, movie nights, or other Barbie-themed gatherings</li>
            <li><strong>Content Creation:</strong> Enhance thumbnails for YouTube videos, podcast covers, or blog headers</li>
            <li><strong>Educational Materials:</strong> Make learning more engaging for young Barbie fans with custom worksheets or flashcards</li>
            <li><strong>Scrapbooking:</strong> Add digital Barbie text to photos and memory books</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-primary mt-8 mb-4">Frequently Asked Questions</h3>
          
          <div className="space-y-6 mt-4">
            <div>
              <h4 className="font-medium text-primary">Is this Barbie font generator really free?</h4>
              <p className="mt-1">
                Yes! Our <strong>Barbie font generator free</strong> tool is completely free to use with no hidden charges. You can create and download as many designs as you want without paying a penny.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">Can I use the text I create for commercial purposes?</h4>
              <p className="mt-1">
                While our generator tool is free to use, please note that the Barbie brand and its typography are trademarked. We recommend using your creations for personal projects only, such as parties, fan art, and personal social media. For commercial use, you should consult with a legal professional regarding trademark considerations.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">How do I copy and paste the Barbie font to other platforms?</h4>
              <p className="mt-1">
                Our <strong>Barbie font generator copy and paste</strong> feature works differently than you might expect. Rather than generating special unicode characters, we create an image of your text in the Barbie style. You can download this image and upload it to any platform that accepts image files. This ensures the highest quality and most authentic Barbie look for your text.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">Which font is closest to the original Barbie logo?</h4>
              <p className="mt-1">
                Our "Classic Barbie" font option is designed to most closely resemble the iconic Barbie logo font. For a more flowing style similar to recent branding, try our <strong>Barbie font generator cursive</strong> option, which mimics the handwritten style seen in some Barbie products.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">What's the difference between the regular Barbie font and the movie font?</h4>
              <p className="mt-1">
                The <strong>Barbie movie font generator</strong> option features typography inspired by the 2023 film, which has a slightly more modern and stylized appearance compared to the classic Barbie logo font. The movie typography includes unique characteristics that reflect the film's contemporary take on the iconic brand.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">Can I create Barbie text in languages other than English?</h4>
              <p className="mt-1">
                Yes! Our <strong>Barbie font generator online</strong> supports a wide range of characters, including those from many non-English languages. Simply type your text in your preferred language, and our tool will render it in your chosen Barbie style.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">Is there a limit to how much text I can create?</h4>
              <p className="mt-1">
                For optimal visual quality and design purposes, we recommend keeping your text to 50 characters or less. Longer phrases may become difficult to read when styled in decorative fonts. If you need a longer message, consider creating multiple text images.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">How often do you add new Barbie font styles?</h4>
              <p className="mt-1">
                We regularly update our <strong>free Barbie font generator</strong> with new styles, especially when new Barbie products, movies, or trends emerge. Check back periodically to discover newly added font options!
              </p>
            </div>
          </div>
          
          <p className="mt-8">
            Our <strong>Barbie font generator online</strong> tool is continually being improved to provide you with the best possible experience. We welcome your feedback and suggestions as we work to make this the ultimate resource for Barbie typography enthusiasts. Start creating your custom Barbie-style text today and add that perfect touch of pink magic to all your projects!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
