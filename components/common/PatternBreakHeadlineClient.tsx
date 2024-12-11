// components/common/PatternBreakHeadlineClient.tsx
import { useEffect } from 'react';

const PatternBreakHeadlineClient = () => {
  useEffect(() => {
    const gradientAnimation = `
      /* Your gradient animation CSS here */
    `;

    const style = document.createElement('style');
    style.textContent = gradientAnimation;
    document.head.appendChild(style);

    return () => {
      // Cleanup the style element on component unmount
      document.head.removeChild(style);
    };
  }, []);

  return <h1>Your headline here</h1>;
};

export default PatternBreakHeadlineClient;
