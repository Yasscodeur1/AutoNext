// tailwind.config.js
export const darkMode = 'class';
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}', // Cherche les classes Tailwind dans les pages
  './components/**/*.{js,ts,jsx,tsx}', // Cherche les classes Tailwind dans les composants
];
export const theme = {
  extend: {},
};
export const plugins = [
  require('@tailwindcss/forms'), // Exemple de plugin supplémentaire
];
