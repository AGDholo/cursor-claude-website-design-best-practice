import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

// 定义导航项类型
interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 使用 Motion 的 useScroll 钩子获取滚动进度
  const { scrollY } = useScroll();
  
  // macOS Dock 风格的动画参数
  const centerGap = useTransform(scrollY, [0, 60], [160, 40]); // Logo和导航项之间的距离
  const sidePadding = useTransform(scrollY, [0, 60], [32, 20]); // 左右padding
  const navSpacing = useTransform(scrollY, [0, 60], [28, 16]); // 导航项之间的间距
  const logoTextOpacity = useTransform(scrollY, [0, 30], [1, 0]); // Logo文字透明度
  const logoTextWidth = useTransform(scrollY, [0, 30], [120, 0]); // Logo文字宽度
  const navHeight = useTransform(scrollY, [0, 60], [56, 48]); // 导航栏高度
  const navOpacity = useTransform(scrollY, [0, 60], [0.8, 0.9]);
  const navBlur = useTransform(scrollY, [0, 60], [20, 30]); // 背景模糊
  
  // 使用轻盈的 Spring 配置 - macOS 风格
  const smoothCenterGap = useSpring(centerGap, { 
    stiffness: 300, 
    damping: 35, 
    mass: 0.7,
    restDelta: 0.001 
  });
  const smoothSidePadding = useSpring(sidePadding, { 
    stiffness: 300, 
    damping: 35, 
    mass: 0.7,
    restDelta: 0.001 
  });
  const smoothNavSpacing = useSpring(navSpacing, { 
    stiffness: 300, 
    damping: 35, 
    mass: 0.7,
    restDelta: 0.001 
  });
  const smoothLogoTextOpacity = useSpring(logoTextOpacity, { 
    stiffness: 400, 
    damping: 40, 
    mass: 0.5 
  });
  const smoothLogoTextWidth = useSpring(logoTextWidth, { 
    stiffness: 300, 
    damping: 35, 
    mass: 0.7 
  });
  const smoothNavHeight = useSpring(navHeight, { 
    stiffness: 300, 
    damping: 35, 
    mass: 0.7 
  });
  const smoothOpacity = useSpring(navOpacity, { 
    stiffness: 250, 
    damping: 30, 
    mass: 0.5 
  });
  const smoothBlur = useSpring(navBlur, { 
    stiffness: 250, 
    damping: 30, 
    mass: 0.5 
  });

  // 导航项目
  const navItems: NavItem[] = [
    { name: 'GitHub', href: 'https://github.com/AGDholo', external: true },
    { name: '演示', href: 'https://transferai.app/', external: true },
  ];

  return (
    <>
      {/* 浮动导航栏容器 */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-4">
        <motion.nav 
          style={{ 
            paddingLeft: smoothSidePadding,
            paddingRight: smoothSidePadding,
            height: smoothNavHeight,
          }}
          className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl border border-neutral-200/30 dark:border-neutral-700/30 rounded-2xl shadow-2xl shadow-black/[0.08] dark:shadow-black/[0.3] backdrop-saturate-150"
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            mass: 0.8
          }}
        >
          {/* macOS 风格的内层光泽效果 */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent dark:from-white/10 pointer-events-none" />
          
          <div className="relative flex items-center h-full">
            {/* Logo */}
            <a 
              href="/"
              className="flex items-center space-x-3 flex-shrink-0 relative group"
            >
              <motion.div 
                className="w-9 h-9 rounded-lg shadow-sm bg-gradient-to-r from-brand-600 to-brand-500 flex items-center justify-center text-white font-bold"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                H
              </motion.div>
              <motion.div
                style={{ 
                  opacity: smoothLogoTextOpacity,
                  width: smoothLogoTextWidth,
                }}
                className="overflow-hidden"
              >
                <span className="text-lg font-semibold bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500 bg-clip-text text-transparent whitespace-nowrap">
                  HeroUI with AI
                </span>
              </motion.div>
            </a>

            {/* 动态间距区域 */}
            <motion.div 
              style={{ width: smoothCenterGap }}
              className="hidden lg:block flex-shrink-0"
            />

            {/* Desktop Navigation - 大屏幕 */}
            <motion.div 
              style={{ gap: smoothNavSpacing }}
              className="hidden lg:flex items-center flex-shrink-0"
            >
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 relative group whitespace-nowrap rounded-lg hover:bg-white/40 dark:hover:bg-neutral-800/40"
                  >
                    {item.name}
                    <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* 中等屏幕的导航 */}
            <div className="hidden md:flex lg:hidden items-center space-x-4 ml-6 flex-shrink-0">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 relative group whitespace-nowrap rounded-lg hover:bg-white/40 dark:hover:bg-neutral-800/40"
                  >
                    {item.name}
                    <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-600 dark:from-brand-400 dark:to-brand-500 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* 动态间距区域 - 按钮前 */}
            <motion.div 
              style={{ width: smoothNavSpacing }}
              className="hidden lg:block flex-shrink-0"
            />

            {/* 动态间距区域 - 主题切换和语言切换之间 */}
            <motion.div 
              style={{ width: smoothNavSpacing }}
              className="hidden lg:block flex-shrink-0"
            />

            {/* 动态间距区域 - 语言切换和按钮之间 */}
            <motion.div 
              style={{ width: smoothNavSpacing }}
              className="hidden lg:block flex-shrink-0"
            />

            {/* CTA 按钮 - macOS 风格 */}
            <motion.a 
              href="https://gist.github.com/AGDholo/656c0cbbceb68d44e6b18954196f3ae2"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 ml-6 lg:ml-0 rounded-xl bg-gradient-to-b from-brand-500 via-brand-500 to-brand-600 dark:from-brand-400 dark:via-brand-400 dark:to-brand-500 text-white text-sm font-medium shadow-lg shadow-brand-500/20 dark:shadow-brand-400/20 border border-white/20 dark:border-neutral-700/20 flex-shrink-0 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl" />
              <span className="relative">立即开始</span>
            </motion.a>

            {/* Mobile menu button - macOS 风格 */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 ml-auto flex-shrink-0 hover:bg-white/40 dark:hover:bg-neutral-800/40"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{isMobileMenuOpen ? "关闭菜单" : "打开菜单"}</span>
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {!isMobileMenuOpen ? (
                  <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* 移动端菜单 - 全屏模态 macOS 风格 */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? "0%" : "-100%"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          mass: 0.8
        }}
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-center items-center h-full space-y-8 px-6">
          <div className="text-center space-y-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 20
                }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-2xl font-medium text-neutral-900 dark:text-neutral-100 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 py-3"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile controls */}
          <motion.div 
            className="flex items-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ delay: 0.4 }}
          >
          </motion.div>

          <motion.a 
            href="https://gist.github.com/AGDholo/656c0cbbceb68d44e6b18954196f3ae2"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-b from-brand-500 via-brand-500 to-brand-600 dark:from-brand-400 dark:via-brand-400 dark:to-brand-500 text-white text-lg font-medium shadow-lg shadow-brand-500/20 dark:shadow-brand-400/20 border border-white/20 dark:border-neutral-700/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20
            }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl" />
            <span className="relative">立即开始</span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
} 