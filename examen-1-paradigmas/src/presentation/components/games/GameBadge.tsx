import React from 'react';

interface Props {
  label: string;
  color?: string; 
}

export const GameBadge: React.FC<Props> = ({ 
  label, 
  color = "bg-gray-200" }) => {
  return (
    <span className={`inline-block px-2 py-1 rounded-full text-sm font-semibold text-white ${color}`}>
      {label}
    </span>
  );
};