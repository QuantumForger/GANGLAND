import dynamic from 'next/dynamic';

const PatternBreakHeadlineClient = dynamic(() => import('./PatternBreakHeadlineClient'), { ssr: false });

const PatternBreakHeadline = () => <PatternBreakHeadlineClient />;

export default PatternBreakHeadline;
