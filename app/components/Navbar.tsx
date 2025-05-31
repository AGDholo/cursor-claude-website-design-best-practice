import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[var(--time-std)] ${
      isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 shadow-sm' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-500">
            CursorAI
          </span>
        </div>
        
        {/* 导航链接 */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors duration-[var(--time-fast)]">
            特性
          </a>
          <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors duration-[var(--time-fast)]">
            定价
          </a>
          <a href="#docs" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors duration-[var(--time-fast)]">
            文档
          </a>
          <a href="#community" className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors duration-[var(--time-fast)]">
            社区
          </a>
        </div>
        
        {/* 行动按钮 */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors duration-[var(--time-fast)]">
            登录
          </button>
          <button className="btn-brand">
            开始使用
          </button>
        </div>
      </div>
    </nav>
  );
} 