
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import des icônes de soleil et lune

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;
  
    const handleClick = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <button
        onClick={handleClick}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
      >
        {theme === 'light' ? (
          <FaMoon className="text-gray-800 dark:text-white" /> // Icône de lune pour le mode sombre
        ) : (
          <FaSun className="text-yellow-500" /> // Icône de soleil pour le mode clair
        )}
      </button>
    );
  };
  
  export default ThemeToggle;
  