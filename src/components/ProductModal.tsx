import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  const changeQuantity = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <button 
            onClick={onClose}
            className="float-right text-3xl text-gray-500 hover:text-gray-700 leading-none"
          >
            &times;
          </button>
          
          <div className="clear-both">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/600x600?text=Imagem+Indispon%C3%ADvel';
                }}
              />
            </div>
            
            <h3 className="text-2xl font-bold text-secondary mb-4">{product.name}</h3>
            <p className="text-3xl font-bold text-primary mb-6">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-700 font-semibold">Quantidade:</span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => changeQuantity(-1)}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center border-2 border-gray-300 rounded-lg py-2 font-semibold"
                  min="1"
                />
                <button 
                  onClick={() => changeQuantity(1)}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="w-full btn-primary py-3 text-lg"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;