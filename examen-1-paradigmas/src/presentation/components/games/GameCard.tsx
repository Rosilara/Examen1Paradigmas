import React from 'react';


interface Props {
  title: string;
  genre: string;
  price: number;
  available: boolean;
  icon?: React.ReactNode; 
}
export const GameCard: React.FC<Props> = ({
  title,
  genre,
  price,
  available,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between h-full">
      <div>
        {icon && <div className="text-2xl mb-2 text-gray-600">{icon}</div>}
        
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{genre}</p>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900">
          ${price.toFixed(2)}
        </span>
        
        {available ? (
          <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold bg-green-500 text-white">
            Disponible
          </span>
        ) : (
          <span className="inline-block px-2 py-1 rounded-full text-sm font-semibold bg-red-500 text-white">
            Agotado
          </span>
        )}
      </div>
    </div>
  );
};