import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  return (
    <div 
      className="card overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
      onClick={() => onProductClick(product)}
    >
      <div className="aspect-square bg-gray-200 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Imagem+Indispon%C3%ADvel';
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-secondary mb-2">{product.name}</h3>
        <p className="text-2xl font-bold text-primary">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;