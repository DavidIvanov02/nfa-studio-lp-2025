"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState(3);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  if (!showContent) {
    return (
      <div className="film-countdown flex h-screen items-center justify-center font-sans antialiased overflow-hidden relative">
        {/* Film grain overlay */}
        <div className="film-grain"></div>
        
        {/* Vignette effect */}
        <div className="vignette"></div>
        
        {/* Countdown circle and number */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="countdown-circle absolute"></div>
          <div className="countdown-number text-[250px] sm:text-[350px] md:text-[450px] lg:text-[500px] font-bold leading-none tracking-tight tabular-nums">
            {countdown}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen items-center justify-center font-sans antialiased overflow-hidden">
      <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-6 py-6 text-center max-w-5xl mx-auto">
        <div className="flex items-center justify-center">
          <Image
            src="/symbol.svg"
            alt="Logo"
            width={600}
            height={600}
            priority
            className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[600px] h-auto"
          />
        </div>
        
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 max-w-3xl">
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-[-0.02em]">
              Coming Soon
            </h1>
            <div className="w-16 h-px mx-auto opacity-50"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl tracking-wide opacity-80">
            We&apos;re crafting something extraordinary. 
            <br className="hidden sm:block" />
            Stay tuned for what&apos;s next.
          </p>
          
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight tabular-nums opacity-60 mt-2">
            2025
          </div>
        </div>
      </main>
    </div>
  );
}
