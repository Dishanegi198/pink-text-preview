
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full py-3 md:py-4 backdrop-blur-sm bg-white/80 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-pacifico text-primary text-2xl">Barbie</span>
          <div className="h-5 w-px bg-primary/20 mx-1"></div>
          <span className="text-sm text-muted-foreground hidden sm:inline-block">Font Generator</span>
        </Link>

        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu}
              className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-[57px] bg-white shadow-md border-t z-40 animate-fade-in" style={{ backgroundColor: 'white' }}>
                <nav className="container mx-auto px-4 py-6">
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Link 
                        to="/" 
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/tiktok-caption" 
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        TikTok Caption Generator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/signature" 
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Signature Generator
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/blog" 
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/about" 
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/contact" 
                        className="block py-2 text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/tiktok-caption" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  TikTok Caption
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/signature" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  Signature
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/blog" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact" className="px-4 py-2 text-sm text-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
