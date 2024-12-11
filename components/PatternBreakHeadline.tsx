import { useEffect } from 'react';

const PatternBreakHeadline = () => {
  useEffect(() => {
    const gradientAnimation = `
      /* Your gradient animation CSS here */
    `;

    const style = document.createElement('style');
    style.textContent = gradientAnimation;
    document.head.appendChild(style);

    return () => {
      // Cleanup: Remove the style element on unmount
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <h1>Your headline here</h1>
  );
};

export default PatternBreakHeadline;

