
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
            Welcome to the ultimate <strong>Barbie font generator free</strong> tool that lets you create stunning Barbie-inspired text for all your creative projects. Whether you're planning a Barbie-themed party, creating social media graphics, or just having fun, our <strong>free Barbie font generator</strong> is the perfect solution.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Why Choose Our Barbie Font Generator Online?</h3>
          <p>
            Our <strong>Barbie font generator online</strong> tool stands out with its easy-to-use interface and high-quality results. Unlike other generators, we offer multiple font styles including the popular <strong>Barbie font generator cursive</strong> option that mimics the iconic Barbie lettering. The best part? You can instantly <strong>Barbie font generator copy and paste</strong> your creation anywhere you need it!
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">Inspired by the Iconic Barbie Movie</h3>
          <p>
            Fans of the blockbuster film will love our <strong>Barbie movie font generator</strong> features that capture the essence of the movie's typography. Our tool includes fonts inspired by the <strong>Barbie movie font generator</strong> aesthetic, allowing you to recreate that magical pink world in your own designs.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6 mb-3">How to Use Our Barbie Font Generator</h3>
          <ol className="list-decimal pl-5 space-y-2 mt-3">
            <li>Enter your custom text in the input field</li>
            <li>Choose from our selection of Barbie-inspired fonts</li>
            <li>Select your preferred color from our palette</li>
            <li>Adjust the font size to match your needs</li>
            <li>Preview your creation in real-time</li>
            <li>Download your finished design as a PNG image</li>
          </ol>
          
          <p className="mt-6">
            Start creating gorgeous Barbie-style text today with our completely <strong>free Barbie font generator</strong>. No sign-up required, no watermarks, just beautiful typography at your fingertips!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
