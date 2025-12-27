import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkModeSchedule } from '@/hooks/useDarkModeSchedule';
import { Link } from 'wouter';

interface HeaderProps {
  onTextSizeChange?: (size: 'normal' | 'large' | 'extra-large') => void;
}

export default function Header({ onTextSizeChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const { toggleDarkMode } = useDarkModeSchedule();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  
  const handleDarkModeToggle = () => {
    toggleDarkMode();
    setIsDarkMode(!isDarkMode);
  };
  
  const handleTextSizeChange = (size: 'normal' | 'large' | 'extra-large') => {
    setTextSize(size);
    const root = document.documentElement;
    root.classList.remove('text-normal', 'text-large', 'text-extra-large');
    root.classList.add(`text-${size}`);
    localStorage.setItem('textSizePreference', size);
    onTextSizeChange?.(size);
  };
  
  const buttonClass = (isActive: boolean) => {
    return isActive
      ? 'text-primary'
      : 'text-muted-foreground hover:text-foreground';
  };
  
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <Link href="/" className="flex-1">
            <h1 className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              Epistemic Credibility
            </h1>
          </Link>
          
          {/* Utility Bar - Right Side */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Text Size Toggle */}
            <div className="hidden sm:flex items-center gap-1 border-r border-border pr-3">
              <button
                onClick={() => handleTextSizeChange('normal')}
                className={`px-2 py-1 text-sm font-semibold transition-colors ${buttonClass(textSize === 'normal')}`}
                title="Normal text size"
              >
                A
              </button>
              <button
                onClick={() => handleTextSizeChange('large')}
                className={`px-2 py-1 text-lg font-semibold transition-colors ${buttonClass(textSize === 'large')}`}
                title="Large text size"
              >
                A
              </button>
              <button
                onClick={() => handleTextSizeChange('extra-large')}
                className={`px-2 py-1 text-xl font-semibold transition-colors ${buttonClass(textSize === 'extra-large')}`}
                title="Extra large text size"
              >
                A
              </button>
            </div>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={handleDarkModeToggle}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-secondary" />
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 hover:bg-muted rounded-md transition-colors"
              title="Toggle menu"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="sm:hidden mt-4 pt-4 border-t border-border">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block py-2 text-primary hover:opacity-80 transition-opacity">
                  Abstract & Introduction
                </Link>
              </li>
              <li>
                <Link href="/transcript/01/overview" className="block py-2 hover:text-primary transition-colors">
                  Conversation 1 Overview
                </Link>
              </li>
              <li>
                <Link href="/transcript/02/overview" className="block py-2 hover:text-primary transition-colors">
                  Conversation 2 Overview
                </Link>
              </li>
              <li>
                <Link href="/transcript/03/overview" className="block py-2 hover:text-primary transition-colors">
                  Conversation 3 Overview
                </Link>
              </li>
              <li>
                <Link href="/transcript/04/overview" className="block py-2 hover:text-primary transition-colors">
                  Conversation 4 Overview
                </Link>
              </li>
              <li>
                <Link href="/transcript/05/overview" className="block py-2 hover:text-primary transition-colors">
                  Conversation 5 Overview
                </Link>
              </li>
              <li>
                <Link href="/bibliography" className="block py-2 hover:text-primary transition-colors">
                  Bibliography
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
