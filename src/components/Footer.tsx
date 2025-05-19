
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 md:py-8 bg-background border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-pacifico text-primary text-xl">Barbie</span>
              <span className="text-xs text-muted-foreground">Font Generator</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Create beautiful Barbie-style text with our free font generator online.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/tiktok-caption" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  TikTok Caption Generator
                </Link>
              </li>
              <li>
                <Link to="/signature" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Signature Generator
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-foreground mb-3">Features</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Multiple Font Styles</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Custom Colors</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Download as PNG</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            &copy; All Rights Reserved. Barbie Font Generator
          </p>
          <p className="text-xs text-muted-foreground flex items-center">
            Made with <Heart size={12} className="text-primary mx-1" /> by Barbie Font Generator
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
