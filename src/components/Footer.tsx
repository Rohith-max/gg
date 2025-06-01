
import React, { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const { toast } = useToast();
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  // Create and append the EmailOctopus script
  useEffect(() => {
    // Remove any existing script to avoid duplicates
    if (scriptRef.current) {
      scriptRef.current.remove();
    }

    // Create the new script element
    const script = document.createElement('script');
    script.src = 'https://eocampaign1.com/form/700e70e4-12b4-11f0-8fb3-0591309124e6.js';
    script.async = true;
    script.setAttribute('data-form', '700e70e4-12b4-11f0-8fb3-0591309124e6');
    scriptRef.current = script;
    
    // Find the newsletter container and append the script
    const newsletterContainer = document.getElementById('newsletter-container');
    if (newsletterContainer) {
      newsletterContainer.appendChild(script);
    }
    
    // Listen for form submission success
    const handleEmailOctopusSuccess = () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
    };

    // Add event listener for form submission success
    window.addEventListener('emailoctopus:success', handleEmailOctopusSuccess);
    
    // Cleanup function
    return () => {
      window.removeEventListener('emailoctopus:success', handleEmailOctopusSuccess);
      if (scriptRef.current && newsletterContainer && newsletterContainer.contains(scriptRef.current)) {
        newsletterContainer.removeChild(scriptRef.current);
      }
    };
  }, [toast]);

  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          
          {/* EmailOctopus Form Container */}
          <div id="newsletter-container" className="mb-6 flex justify-center">
            {/* EmailOctopus script will be injected here */}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800 text-sm text-gray-400">
            © {new Date().getFullYear()} GreekGod. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
