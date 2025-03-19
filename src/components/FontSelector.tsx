
import { useState } from 'react';
import { FontOption, fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface FontSelectorProps {
  selectedFont: FontOption;
  onChange: (font: FontOption) => void;
}

export const FontSelector = ({ selectedFont, onChange }: FontSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="space-y-2">
        <label className="text-sm font-medium">Font Style</label>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2 rounded-lg border",
            "bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary/30"
          )}
        >
          <span className={cn("text-base", selectedFont.class)}>
            {selectedFont.name}
          </span>
          <svg
            className={cn("h-5 w-5 transition-transform duration-200", isOpen ? "rotate-180" : "")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border bg-white shadow-lg animate-fade-in">
          <div className="py-1 max-h-60 overflow-auto">
            {fonts.map((font) => (
              <button
                key={font.id}
                type="button"
                onClick={() => {
                  onChange(font);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-2 text-left hover:bg-secondary transition-colors duration-150",
                  selectedFont.id === font.id ? "bg-accent text-primary" : "",
                  font.class
                )}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
