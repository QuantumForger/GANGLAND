import { useEffect } from 'react';

const PatternBreakHeadlineClient = () => {
  useEffect(() => {
    const gradientAnimation = `
      /* Your gradient CSS animation code here */
    `;
    const style = document.createElement('style');
    style.textContent = gradientAnimation;
    document.head.appendChild(style);

    return () => {
      // Cleanup the style element on unmount
      document.head.removeChild(style);
    };
  }, []);

  return <h1>Your Headline Here</h1>;
};

export default PatternBreakHeadlineClient;
