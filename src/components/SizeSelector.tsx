
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  size: number;
  onChange: (size: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const SizeSelector = ({ 
  size, 
  onChange, 
  min = 14, 
  max = 100, 
  step = 1 
}: SizeSelectorProps) => {
  // Preset sizes
  const presets = [
    { label: 'S', value: 20 },
    { label: 'M', value: 40 },
    { label: 'L', value: 60 },
    { label: 'XL', value: 80 },
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">Text Size</label>
        <span className="text-xs bg-secondary px-2 py-1 rounded-full">
          {size}px
        </span>
      </div>
      
      <Slider
        value={[size]}
        min={min}
        max={max}
        step={step}
        onValueChange={(values) => onChange(values[0])}
        className="my-4"
      />

      <div className="flex gap-2 mt-2">
        {presets.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => onChange(preset.value)}
            className={cn(
              "flex-1 py-1 px-2 rounded-md border text-sm transition-colors duration-200",
              size === preset.value 
                ? "bg-primary text-white border-primary" 
                : "bg-white/50 hover:bg-white/80 border-border"
            )}
          >
            {preset.label}
          </button>
        ))}
      </div>
    </div>
  );
};
