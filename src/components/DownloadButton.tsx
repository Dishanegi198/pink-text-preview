
import { useState } from 'react';
import { downloadAsImage } from '@/utils/downloadUtils';
import { cn } from '@/lib/utils';

interface DownloadButtonProps {
  elementId: string;
  fileName?: string;
  className?: string;
}

export const DownloadButton = ({ 
  elementId, 
  fileName = 'barbie-text',
  className
}: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadAsImage(elementId, fileName);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isDownloading}
      className={cn(
        "relative overflow-hidden rounded-lg bg-primary text-white font-medium px-6 py-3",
        "hover:opacity-90 active:opacity-80 transition-all duration-300",
        "disabled:opacity-70 disabled:cursor-not-allowed",
        "group",
        className
      )}
    >
      <span className={cn(
        "flex items-center justify-center gap-2 transition-transform duration-300",
        isDownloading ? "opacity-0" : "opacity-100"
      )}>
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download PNG
      </span>
      
      {isDownloading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-barbie-hotPink transition-transform duration-300" />
    </button>
  );
};
