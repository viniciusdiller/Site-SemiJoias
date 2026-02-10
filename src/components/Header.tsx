import React from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <img 
              src="/assets/images/logo.jpg" 
              alt="Renata Diller Logo" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-secondary">Renata Diller</h1>
              <p className="text-sm text-primary font-semibold tracking-wider">SEMIJOIAS</p>
            </div>
          </div>
          
          <button 
            onClick={onCartClick}
            className="flex items-center gap-2 bg-primary hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors relative"
          >
            <span className="text-xl">🛍️</span>
            <span className="hidden sm:inline">Carrinho</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;