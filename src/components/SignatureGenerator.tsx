
import { useState, useEffect } from 'react';
import { TextPreview } from './TextPreview';
import { FontSelector } from './FontSelector';
import { ColorPicker } from './ColorPicker';
import { SizeSelector } from './SizeSelector';
import { DownloadButton } from './DownloadButton';
import { defaultFont, defaultColor } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const SignatureGenerator = () => {
  const [signature, setSignature] = useState('');
  const [font, setFont] = useState(defaultFont);
  const [color, setColor] = useState(defaultColor.value);
  const [size, setSize] = useState(48);
  const [isReady, setIsReady] = useState(false);

  // Animation on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "w-full max-w-4xl mx-auto px-4 py-8 transition-opacity duration-500",
      isReady ? "opacity-100" : "opacity-0"
    )}>
      <div className="text-center mb-10 animate-fade-up">
        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
          Signature Generator
        </span>
        <h1 className="text-4xl font-bold mb-2 font-pacifico">
          Barbie Signature Generator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Create beautiful, handwritten-style Barbie signatures for your digital content, branding, or printable materials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <TextPreview
            text={signature}
            font={font}
            color={color}
            size={size}
          />

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Type your signature here..."
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-lg border bg-white/50 backdrop-blur-sm",
                "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                "transition-all duration-200"
              )}
              maxLength={30}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
              {signature.length}/30
            </div>
          </div>

          <div className="flex justify-center">
            <DownloadButton 
              elementId="text-preview" 
              fileName={signature ? signature.substring(0, 20).replace(/\s+/g, '-').toLowerCase() : 'barbie-signature'}
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
            min={20}
            max={80}
          />

          <div className="space-y-2 pt-4 border-t">
            <h3 className="text-sm font-medium">Signature Tips</h3>
            <ul className="text-xs space-y-2 text-muted-foreground">
              <li className="flex gap-2 items-start">
                <span className="text-primary">•</span>
                <span>Keep it simple and legible</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-primary">•</span>
                <span>Try different fonts for unique styles</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-primary">•</span>
                <span>Add a small flourish or heart for flair</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-primary">•</span>
                <span>Consider using your first name only</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
