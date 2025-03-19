
import { useState, useEffect } from 'react';
import { TextPreview } from './TextPreview';
import { FontSelector } from './FontSelector';
import { ColorPicker } from './ColorPicker';
import { SizeSelector } from './SizeSelector';
import { DownloadButton } from './DownloadButton';
import { defaultFont, defaultColor } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const FontGenerator = () => {
  const [text, setText] = useState('');
  const [font, setFont] = useState(defaultFont);
  const [color, setColor] = useState(defaultColor.value);
  const [size, setSize] = useState(40);
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
          Font Generator
        </span>
        <h1 className="text-4xl font-bold mb-2 font-pacifico">
          Barbie Text Generator
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Create beautiful, Barbie-inspired text for your projects. Customize your text below and download it as an image.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <TextPreview
            text={text}
            font={font}
            color={color}
            size={size}
          />

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Enter your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={cn(
                "w-full pl-10 pr-4 py-3 rounded-lg border bg-white/50 backdrop-blur-sm",
                "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
                "transition-all duration-200"
              )}
              maxLength={50}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
              {text.length}/50
            </div>
          </div>

          <div className="flex justify-center">
            <DownloadButton 
              elementId="text-preview" 
              fileName={text ? text.substring(0, 20).replace(/\s+/g, '-').toLowerCase() : 'barbie-text'}
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
          />
        </div>
      </div>
    </div>
  );
};
