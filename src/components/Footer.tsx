import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white mt-16 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">
          &copy; 2025 Renata Diller Semijoias. Todos os direitos reservados.
        </p>
        <p className="text-gray-300 mb-4">
          Elegância e qualidade em cada peça como você merece.
        </p>
        <a 
          href="https://api.whatsapp.com/send/?phone=5522999584945"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
        >
          <span className="text-xl">💬</span>
          Entre em contato pelo WhatsApp
        </a>
      </div>
    </footer>
  );
};

export default Footer;