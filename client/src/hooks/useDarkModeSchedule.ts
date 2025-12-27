import { useEffect } from 'react';

/**
 * Hook to automatically apply dark mode between 7:00 PM and 7:00 AM local time.
 * Persists user preference in localStorage if manually toggled.
 */
export function useDarkModeSchedule() {
  useEffect(() => {
    const checkAndApplyDarkMode = () => {
      const now = new Date();
      const currentHour = now.getHours();
      
      // Dark mode is active between 19:00 (7 PM) and 07:00 (7 AM)
      const isDarkModeTime = currentHour >= 19 || currentHour < 7;
      
      // Check if user has manually set a preference
      const userPreference = localStorage.getItem('darkModePreference');
      
      let shouldBeDark = isDarkModeTime;
      if (userPreference !== null) {
        shouldBeDark = userPreference === 'true';
      }
      
      const htmlElement = document.documentElement;
      if (shouldBeDark) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    };
    
    // Check on mount
    checkAndApplyDarkMode();
    
    // Check every minute to handle time transitions
    const interval = setInterval(checkAndApplyDarkMode, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const isDark = htmlElement.classList.contains('dark');
    
    if (isDark) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('darkModePreference', 'false');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('darkModePreference', 'true');
    }
  };
  
  return { toggleDarkMode };
}
