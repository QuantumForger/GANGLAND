// File: components/common/PatternBreakHeadline.tsx
import dynamic from 'next/dynamic';

// Dynamically import the client-side component with SSR disabled
const PatternBreakHeadlineClient = dynamic(() => import('./PatternBreakHeadlineClient'), { ssr: false });

const PatternBreakHeadline = () => {
  return <PatternBreakHeadlineClient />;
};

export default PatternBreakHeadline;
