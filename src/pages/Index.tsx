
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
    </div>
  );
};

export default Index;
