'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export default function VideoEmbed({
  src,
  poster,
  title = 'Video',
  className = '',
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative aspect-video rounded-lg overflow-hidden ${className}`}>
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="w-full h-full relative group cursor-pointer"
          aria-label={`Play ${title}`}
        >
          {poster && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${poster})` }}
            />
          )}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
            </div>
          </div>
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-medium">{title}</p>
            </div>
          )}
        </button>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          className="w-full h-full object-cover"
          poster={poster}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
