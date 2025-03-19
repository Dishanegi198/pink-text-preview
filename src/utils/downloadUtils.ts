
import html2canvas from 'html2canvas';
import { toast } from 'sonner';

export const downloadAsImage = async (elementId: string, fileName = 'barbie-text') => {
  try {
    const element = document.getElementById(elementId);
    
    if (!element) {
      toast.error('Could not find the element to download');
      return;
    }

    // Show loading toast
    toast.loading('Creating your image...');

    // Create a clone with white background if needed
    const clone = element.cloneNode(true) as HTMLElement;
    clone.style.backgroundColor = 'transparent';
    clone.style.padding = '40px';
    clone.style.borderRadius = '0';
    clone.style.boxShadow = 'none';
    
    // Temporarily append to document
    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    document.body.appendChild(clone);

    // Use html2canvas with better quality
    const canvas = await html2canvas(clone, {
      backgroundColor: null,
      scale: 3, // Higher scale for better quality
      logging: false,
      useCORS: true,
    });

    // Remove the clone
    document.body.removeChild(clone);

    // Convert to PNG and download
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${fileName}.png`;
    link.click();

    // Dismiss loading toast and show success
    toast.dismiss();
    toast.success('Image downloaded successfully!');
  } catch (error) {
    console.error('Error downloading image:', error);
    toast.dismiss();
    toast.error('Failed to download image. Please try again.');
  }
};
