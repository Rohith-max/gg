import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
      });
      
      videoElement.addEventListener('error', (e) => {
        console.error('Error loading video:', e);
      });
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', () => {});
        videoElement.removeEventListener('error', () => {});
      }
    };
  }, [src]);

  return (
    <div className="w-full h-full relative">
      <video 
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      
      <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 bg-black/30">
        <div className="text-white text-3xl md:text-5xl lg:text-6xl font-bold max-w-md font-caesar">
          <span className="block">Wear The Power,</span>
          <span className="block">Own The Myth.</span>
        </div>
        <div className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-right max-w-md font-caesar">
          <span className="block">Ancient Roots</span>
          <span className="block">Modern</span>
          <span className="block">Expression</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
