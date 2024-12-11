import React from 'react';
import { theme } from '@/lib/theme';

interface ProofSequenceProps {
  metric: string;
  timeline: string;
  result: string;
  className?: string;
}

const ProofSequence: React.FC<ProofSequenceProps> = ({ metric, timeline, result, className = '' }) => {
  // Fallback for theme.colors.successGreen in case it’s not defined
  const successGreen = theme?.colors?.successGreen || '#00FF00';

  return (
    <div
      className={`glassmorphism bg-elite-navy bg-opacity-50 p-6 rounded-lg shadow-lg ${className}`}
      style={{
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <p
        className="text-2xl font-bold mb-2 text-shadow"
        style={{ color: successGreen }}
      >
        {metric}
      </p>
      <p className="text-lg mb-2 text-shadow">{timeline}</p>
      <p className="text-xl font-semibold text-shadow">{result}</p>
    </div>
  );
};

export default ProofSequence;

