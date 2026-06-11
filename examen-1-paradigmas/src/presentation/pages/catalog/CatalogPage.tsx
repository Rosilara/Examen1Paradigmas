import { useState } from 'react';
import { GameCard } from '../../components/games/GameCard';
import { Gamepad2, Trophy, Sword, ShoppingCart, Trash2, Eye, EyeOff } from 'lucide-react';

export const CatalogPage = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [totalSpent, setTotalSpent] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setTotalSpent(prev => prev + 59.99);
  };

  const handleEmptyCart = () => {
    setCartCount(0);
    setTotalSpent(0);
  };

  const handleToggleCart = () => {
    setShowCart(prev => !prev);
  };

  const sampleGames = [
    { 
      title: 'The Legend of Zelda', 
      genre: 'Aventura', 
      price: 59.99, 
      available: true, 
      icon: <Gamepad2 className="w-6 h-6 text-indigo-500" /> 
    },
    { 
      title: 'FIFA 25', 
      genre: 'Deportes', 
      price: 49.99, 
      available: false, 
      icon: <Trophy className="w-6 h-6 text-yellow-500" /> 
    },
    { 
      title: 'Elden Ring', 
      genre: 'RPG', 
      price: 39.99, 
      available: true, 
      icon: <Sword className="w-6 h-6 text-red-500" /> 
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-indigo-950 mb-6 flex items-center gap-2">
        <Gamepad2 className="w-8 h-8 text-indigo-600" />
        Catálogo de Juegos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {sampleGames.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            genre={game.genre}
            price={game.price}
            available={game.available}
            icon={game.icon}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <button onClick={handleAddToCart} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors shadow-sm">
          <ShoppingCart className="w-4 h-4" />
          Agregar al carrito (+$59.99)
        </button>
        <button onClick={handleEmptyCart} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors shadow-sm">
          <Trash2 className="w-4 h-4" />
          Vaciar carrito
        </button>
        <button onClick={handleToggleCart} className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors shadow-sm">
          {showCart ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showCart ? 'Ocultar resumen' : 'Ver resumen'}
        </button>
      </div>

      {showCart && (
        <div className="bg-white p-5 rounded-xl max-w-sm border border-gray-200 shadow-md">
          <div className="flex items-center gap-2 border-b border-gray-100 pb-2 mb-3">
            <ShoppingCart className="w-5 h-5 text-indigo-600" />
            <h3 className="font-bold text-gray-800 text-lg">Resumen del carrito</h3>
          </div>
          <div className="space-y-1.5 text-sm">
            <p className="text-gray-600 flex justify-between">
              <span>Juegos en carrito:</span>
              <span className="font-semibold text-gray-900">{cartCount}</span>
            </p>
            <p className="text-gray-600 flex justify-between border-t border-dashed border-gray-100 pt-1.5 mt-1.5">
              <span>Total a pagar:</span>
              <span className="font-bold text-indigo-600 text-base">${totalSpent.toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};