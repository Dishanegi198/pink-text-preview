
import { useState, useRef, useEffect } from 'react';
import { ColorOption, colors } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface ColorPickerProps {
  selectedColor: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ selectedColor, onChange }: ColorPickerProps) => {
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close the picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <div className="space-y-2">
        <label className="text-sm font-medium">Text Color</label>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2 rounded-lg border",
            "bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-primary/30"
          )}
        >
          <div className="flex items-center gap-2">
            <div 
              className="w-5 h-5 rounded-full border"
              style={{ backgroundColor: selectedColor }}
            />
            <span>{colors.find(c => c.value === selectedColor)?.name || 'Custom'}</span>
          </div>
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
          <div className="p-2">
            <div className="grid grid-cols-4 gap-2 mb-2">
              {colors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => {
                    onChange(color.value);
                    setShowCustomPicker(false);
                  }}
                  className={cn(
                    "w-full aspect-square rounded-full border flex items-center justify-center",
                    "transition-transform hover:scale-110 duration-200",
                    selectedColor === color.value ? "ring-2 ring-offset-2 ring-primary" : ""
                  )}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {selectedColor === color.value && (
                    <svg className="w-4 h-4 text-white drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
            
            <div className="pt-2 border-t">
              <button
                type="button"
                onClick={() => setShowCustomPicker(!showCustomPicker)}
                className="text-xs text-primary hover:underline w-full text-center"
              >
                {showCustomPicker ? 'Hide custom picker' : 'Custom color'}
              </button>
              
              {showCustomPicker && (
                <div className="mt-2 animate-fade-in">
                  <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-8 rounded cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
