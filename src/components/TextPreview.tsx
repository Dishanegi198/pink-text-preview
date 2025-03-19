
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FontOption } from '@/lib/fonts';

interface TextPreviewProps {
  text: string;
  font: FontOption;
  color: string;
  size: number;
}

export const TextPreview = ({ text, font, color, size }: TextPreviewProps) => {
  const [isReady, setIsReady] = useState(false);
  
  // Animation delay for better UX
  useEffect(() => {
    setIsReady(false);
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, [text, font, color, size]);

  const displayText = text.trim() || 'Preview your text here';
  
  return (
    <div 
      id="preview-container"
      className={cn(
        "w-full min-h-[300px] rounded-lg border p-6 flex items-center justify-center",
        "bg-white/30 backdrop-blur-sm transition-all duration-300",
        isReady ? "opacity-100" : "opacity-0"
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
        {displayText}
      </div>
    </div>
  );
};
