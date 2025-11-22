// PlaceholderImageCard.tsx
import React from "react";

type PlaceholderImageCardProps = {
  caption?: string;
};

export const PlaceholderImageCard: React.FC<PlaceholderImageCardProps> = ({
  caption = "Nơi lưu giữ kỷ niệm đẹp",
}) => {
  return (
    <div
      className="mx-auto md:mx-0 rounded-lg p-6 bg-pink-50 border border-pink-200 w-full max-w-sm transition-transform hover:scale-105 duration-300"
      role="img"
      aria-label={`Placeholder: ${caption}`}
    >
      <div className="flex items-center justify-center h-36">
        {/* Placeholder image icon SVG */}
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
      <p className="text-center text-sm text-pink-700 mt-3">{caption}</p>
    </div>
  );
};
