// tailwind.config.js
module.exports = {
  darkMode: 'class', // Optionnel, si tu veux gérer le mode sombre via une classe
  content: [
    './app/Components/Header.tsx', // Assure-toi d'ajouter le chemin de tes fichiers
    './pages/**/*.{js,ts,jsx,tsx}', // Idem pour les pages
    './components/**/*.{js,ts,jsx,tsx}', // Et tes composants
  ],
  theme: {
    extend: {
      background:{
        "gradient-radial":"radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors:{
        lama: "#F35C7"
      },
      screens: {
        'xs': '425px', 
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    // Ajoute des plugins si nécessaire
  ],
};
