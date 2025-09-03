

import React from "react";

export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-20 px-6 sm:px-10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title + Subtitle */}
        {(title || subtitle) && (
          <div className="text-center mb-14">
            {/* Subtitle */}
            {subtitle && (
              <p className="text-cyan-400 font-semibold tracking-wide uppercase drop-shadow-md">
                {subtitle}
              </p>
            )}

            {/* Title */}
            {title && (
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                {title}
              </h2>
            )}

            {/* Animated underline */}
            <div className="mt-3 w-20 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full mx-auto animate-pulse" />
          </div>
        )}

        {/* Children / Content */}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
