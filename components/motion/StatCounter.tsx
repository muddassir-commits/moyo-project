"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface StatCounterProps {
  value: string;
}

export function StatCounter({ value }: StatCounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  if (shouldReduceMotion || value.includes("[X]")) {
    return <span>{value}</span>;
  }

  // Parse the string value (e.g., "10,000+", "4.8/5", "100%", "30 Min", "48 Hr")
  // For this simple version, if it's purely a number (like "100" from "100%"), we count it.
  const numMatch = value.match(/^([\d,.]+)(.*)$/);
  
  if (numMatch) {
    const numStr = numMatch[1].replace(/,/g, '');
    const suffix = numMatch[2];
    const num = parseFloat(numStr);
    
    if (!isNaN(num)) {
      const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
      
      return (
        <span ref={ref}>
          {inView ? (
            <CountUp 
              start={0} 
              end={num} 
              duration={2.5} 
              decimals={decimals}
              separator="," 
              useEasing={true}
            />
          ) : (
            "0"
          )}
          {suffix}
        </span>
      );
    }
  }

  return <span ref={ref}>{value}</span>;
}
