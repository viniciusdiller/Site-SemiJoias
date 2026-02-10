import React from 'react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
          
          <h3 className="text-2xl font-bold text-secondary mb-6 clear-both">Seu Carrinho</h3>
          
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Seu carrinho está vazio</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/100x100?text=Sem+Imagem';
                      }}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-secondary">{item.name}</h4>
                      <p className="text-primary font-bold">
                        R$ {item.price.toFixed(2).replace('.', ',')} x {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-secondary">
                        R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                      </p>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-semibold mt-1"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t-2 pt-4 mb-6">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-secondary">Total:</span>
                  <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
              
              <button 
                onClick={onCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors text-lg flex items-center justify-center gap-2"
              >
                <span className="text-xl">💬</span>
                Finalizar Pedido via WhatsApp
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;