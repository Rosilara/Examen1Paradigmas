
import { ShoppingBag, CheckCircle, Percent, Link } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-8 text-center">
        BIENVENIDO A GAME STORE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-10">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center flex flex-col items-center">
          <CheckCircle className="w-8 h-8 text-indigo-500 mb-2" />
          <p className="text-gray-500 font-medium mb-1">JUEGOS DISPONIBLES</p>
          <p className="text-5xl font-bold text-indigo-600">120</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center flex flex-col items-center">
          <Percent className="w-8 h-8 text-green-500 mb-2" />
          <p className="text-gray-500 font-medium mb-1">OFERTAS ACTIVAS</p>
          <p className="text-5xl font-bold text-green-500">15</p>
        </div>
      </div>

      <Link to="/catalog" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105">
        <ShoppingBag className="w-5 h-5" />
        VER CATÁLOGO
      </Link>
    </div>
  );
};