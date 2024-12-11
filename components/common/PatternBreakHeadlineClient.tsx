'use client'; // Add this line to make it a Client Component

import { useEffect } from 'react';

const PatternBreakHeadlineClient = () => {
  useEffect(() => {
    const gradientAnimation = `
      /* Add your gradient animation CSS here */
    `;

    const style = document.createElement('style');
    style.textContent = gradientAnimation;
    document.head.appendChild(style);

    return () => {
      // Cleanup: Remove the style element on unmount
      document.head.removeChild(style);
    };
  }, []);

  return <h1>Your Headline Here</h1>;
};

export default PatternBreakHeadlineClient;
