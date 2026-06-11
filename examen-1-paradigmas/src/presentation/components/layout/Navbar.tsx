import { Gamepad2, Home, Link, Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';


export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 3. Nombre de la app "GameStore" en un span con texto en negrita [cite: 77] */}
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-indigo-200" />
          <span className="text-xl font-bold tracking-wider">GameStore</span>
        </div>

        {/* 4. Enlaces de navegación usando el componente Link para Escritorio [cite: 78] */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="flex items-center gap-1.5 hover:text-indigo-200 transition-colors">
            <Home className="w-4 h-4" />
            Inicio
          </Link>
          <Link to="/catalog" className="flex items-center gap-1.5 hover:text-indigo-200 transition-colors">
            <ShoppingBag className="w-4 h-4" />
            Catálogo
          </Link>
        </div>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none text-2xl flex items-center p-1"
            aria-label="Toggle Menu"
          >

            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 px-6 py-4 flex flex-col space-y-3 shadow-inner border-t border-indigo-500/30 animate-fade-in">
          <Link 
            to="/" 
            onClick={toggleMenu} 
            className="flex items-center gap-2 py-1 hover:text-indigo-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            Inicio
          </Link>
          <Link 
            to="/catalog" 
            onClick={toggleMenu} 
            className="flex items-center gap-2 py-1 hover:text-indigo-200 transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Catálogo
          </Link>
        </div>
      )}
    </nav>
  );
};