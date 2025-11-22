// MediaCard.tsx
import React from "react";
import { MediaItem } from "../data/timelineData";

type MediaCardProps = {
  media?: MediaItem;
};

export const MediaCard: React.FC<MediaCardProps> = ({ media }) => {
  if (!media) {
    // Fallback to placeholder if no media
    return (
      <div className="rounded-lg overflow-hidden shadow-md bg-pink-50 border border-pink-100">
        <div className="flex items-center justify-center h-36">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="opacity-60"
          >
            <rect
              x="2"
              y="3"
              width="20"
              height="14"
              rx="2"
              stroke="#ff6b94"
              strokeWidth="1.5"
            />
            <circle cx="7.5" cy="8.5" r="1.5" fill="#ff6b94" />
            <path
              d="M21 17l-6-6-4 4-3-3-4 6"
              stroke="#ff6b94"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <p className="text-center text-sm text-pink-600 py-3">
          Nơi lưu giữ kỷ niệm đẹp
        </p>
      </div>
    );
  }

  const mediaPath = `/src/data/media/${media.filename}`;

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white border border-pink-100 hover:shadow-xl transition-shadow duration-300">
      {media.type === "image" ? (
        <img
          src={mediaPath}
          alt={media.caption || "Timeline memory"}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      ) : (
        <video
          src={mediaPath}
          controls
          className="w-full h-auto"
          preload="metadata"
        >
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      )}
      {media.caption && (
        <p className="text-center text-sm text-pink-600 py-3 px-4 bg-pink-50">
          {media.caption}
        </p>
      )}
    </div>
  );
};

export default MediaCard;
