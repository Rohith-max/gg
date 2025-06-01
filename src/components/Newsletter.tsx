
import React, { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const footerObserverRef = useRef<IntersectionObserver | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Create observer to detect when footer is in view
    const footerElement = document.querySelector('footer');
    
    if (footerElement && newsletterRef.current) {
      footerObserverRef.current = new IntersectionObserver(
        (entries) => {
          // When footer enters viewport, hide newsletter
          if (entries[0].isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
      
      footerObserverRef.current.observe(footerElement);
    }
    
    return () => {
      if (footerObserverRef.current && footerElement) {
        footerObserverRef.current.unobserve(footerElement);
      }
    };
  }, []);

  const scrollToNewsletter = () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={newsletterRef}
      className={`newsletter-sticky fixed bottom-4 left-0 right-0 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="container mx-auto px-4">
        <div className="relative w-full md:max-w-xl mx-auto">
          <div className="relative overflow-hidden rounded-md cursor-pointer" onClick={scrollToNewsletter}>
            <div className="bg-black p-4 rounded-md">
              <div className="text-white font-bold text-lg text-center">
                Scroll For Newsletter Subscription
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
