# 💍 Renata Diller Semijoias

Site moderno de e-commerce para semijoias desenvolvido com React, TypeScript e Tailwind CSS.

## ✨ Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool e dev server ultra-rápido

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/viniciusdiller/Site-SemiJoias.git
cd Site-SemiJoias
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📚 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter (ESLint)

## 📝 Estrutura do Projeto

```
src/
├── components/       # Componentes React
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CategoryNav.tsx
│   ├── ProductCard.tsx
│   ├── ProductModal.tsx
│   └── CartModal.tsx
├── data/             # Dados estáticos
│   ├── products.ts
│   └── categories.ts
├── types/            # Tipos TypeScript
│   └── index.ts
├── App.tsx           # Componente principal
├── main.tsx          # Ponto de entrada
└── index.css         # Estilos globais
```

## ⚙️ Funcionalidades

- ✅ Navegação por categorias (Anéis, Brincos, Colares, Pulseiras, Conjuntos)
- ✅ Visualização detalhada de produtos
- ✅ Carrinho de compras funcional
- ✅ Integração com WhatsApp para finalização de pedidos
- ✅ Design responsivo
- ✅ Tipagem completa com TypeScript
- ✅ Estilização moderna com Tailwind CSS

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- 📱 Mobile (smartphones)
- 💻 Tablet
- 🖥️ Desktop

## 🔧 Personalização

### Adicionar Produtos

Edite o arquivo `src/data/products.ts` para adicionar novos produtos:

```typescript
{
  id: 9,
  name: 'Nome do Produto',
  category: 'aneis', // aneis | brincos | colares | pulseiras | conjunto
  price: 99.90,
  image: '/assets/images/produto.jpg'
}
```

### Alterar Cores

Edite `tailwind.config.js` para personalizar as cores:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#d4af37',    // Cor dourada
      secondary: '#2c3e50',  // Cor escura
    },
  },
}
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 💬 Contato

Para dúvidas ou sugestões, entre em contato pelo WhatsApp: [+55 22 99958-4945](https://api.whatsapp.com/send/?phone=5522999584945)

## 📜 Licença

© 2025 Renata Diller Semijoias. Todos os direitos reservados.

---

Feito com ❤️ e React + TypeScript + Tailwind CSS