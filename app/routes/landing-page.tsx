import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, stagger, useInView, AnimatePresence } from 'motion/react';

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 获取滚动信息，用于视差效果
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothParallaxY = useSpring(parallaxY, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.001
  });
  
  // 用于特性部分的引用
  const featuresRef = useRef(null);
  const isInViewFeatures = useInView(featuresRef, { once: true, amount: 0.2 });
  
  // 用于工作流程部分的引用
  const workflowRef = useRef(null);
  const isInViewWorkflow = useInView(workflowRef, { once: true, amount: 0.1 });
  
  // 用于示例代码部分的引用
  const codeExamplesRef = useRef(null);
  const isInViewCodeExamples = useInView(codeExamplesRef, { once: true, amount: 0.1 });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      
      {/* Hero 部分 */}
      <section className="pt-32 pb-20 px-4 overflow-hidden relative">
        {/* 背景视差元素 */}
        <motion.div 
          className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20"
          style={{ y: smoothParallaxY }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M173.3,178.3c-12.7,0-23-10.3-23-23s10.3-23,23-23s23,10.3,23,23S186,178.3,173.3,178.3z" 
                 fill="none" stroke="url(#grad1)" strokeWidth="2" />
            <path d="M276.7,268.3c-12.7,0-23-10.3-23-23s10.3-23,23-23s23,10.3,23,23S289.4,268.3,276.7,268.3z" 
                 fill="none" stroke="url(#grad2)" strokeWidth="2" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(var(--color-brand-400))" />
                <stop offset="100%" stopColor="rgb(var(--color-brand-600))" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(var(--color-brand-500))" />
                <stop offset="100%" stopColor="rgb(var(--color-brand-700))" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.h1 
                className="text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="block" 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    delay: 0.1 
                  }}
                >
                  Cursor AI 设计规则
                </motion.span>
                <motion.span 
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-500"
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30,
                    delay: 0.3 
                  }}
                >
                  配置指南
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  delay: 0.5 
                }}
              >
                使用 Tailwind CSS v4 + Context7 + Claude 4，配置专业的设计规则系统，实现高效一致的界面开发
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  delay: 0.7 
                }}
              >
                <motion.a 
                  href="https://gist.github.com/AGDholo/656c0cbbceb68d44e6b18954196f3ae2"
                  className="btn-brand inline-block text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  开始配置
                </motion.a>
                <motion.a 
                  href="https://transferai.app/"
                  className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-[var(--time-fast)] inline-block text-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  演示网站
                </motion.a>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <motion.div 
                className="relative"
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 25,
                  delay: 0.4 
                }}
              >
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 opacity-20 blur-3xl absolute -z-10"></div>
                <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl w-[420px] max-w-full">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-red-500 mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-yellow-500 mr-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9, type: "spring" }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 rounded-full bg-green-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0, type: "spring" }}
                      ></motion.div>
                    </div>
                    <div className="font-mono text-sm w-full">
                      <div className="text-brand-500">// 设计规则示例</div>
                      <div className="text-gray-700 dark:text-gray-300 w-full">
                        <motion.div 
                          className="overflow-hidden whitespace-nowrap"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 1.2,
                            ease: "easeInOut" 
                          }}
                        >
                          <span>@import "tailwindcss";</span>
                        </motion.div>
                        <motion.div 
                          className="overflow-hidden whitespace-nowrap"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 1.7,
                            ease: "easeInOut" 
                          }}
                        >
                          <span>@theme {`{`}</span>
                        </motion.div>
                        <motion.div 
                          className="ml-4 overflow-hidden whitespace-nowrap"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ 
                            duration: 2, 
                            delay: 2.2,
                            ease: "easeInOut" 
                          }}
                        >
                          <span>--color-brand-500: oklch(0.62 0.214 259.8);</span>
                        </motion.div>
                        <motion.div 
                          className="ml-4 overflow-hidden whitespace-nowrap"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ 
                            duration: 1.5, 
                            delay: 2.7,
                            ease: "easeInOut" 
                          }}
                        >
                          <span>--time-portal: 240ms;</span>
                        </motion.div>
                        <motion.div 
                          className="overflow-hidden whitespace-nowrap"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ 
                            duration: 1, 
                            delay: 3.2,
                            ease: "easeInOut" 
                          }}
                        >
                          <span>{`}`}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>基于 .cursor/rules 规则文件自动应用</p>
                    <p>Tailwind CSS v4 + Context7 + Claude 4</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 特性部分 */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30
            }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              配置指南特点
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              通过简单的步骤，快速配置 Cursor AI 设计规则，实现高效且一致的界面开发
            </p>
          </motion.div>
          
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="card-glass"
                initial={{ opacity: 0, y: 20 }}
                animate={isInViewFeatures ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  delay: index * 0.1 
                }}
                whileHover={{ y: -4, boxShadow: "var(--shadow-glass-strong)" }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 工作流程部分 */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30
            }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              配置流程
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              四个简单步骤，轻松设置 Cursor AI 设计规则系统
            </p>
          </motion.div>
          
          <div ref={workflowRef} className="relative max-w-4xl mx-auto">
            <motion.div 
              className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-200 dark:bg-brand-900 -translate-x-1/2 z-0"
              initial={{ height: "0%" }}
              animate={isInViewWorkflow ? { height: "100%" } : { height: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
            
            {workflow.map((step, index) => (
              <motion.div 
                key={index} 
                className={`relative z-10 flex items-center gap-8 mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInViewWorkflow ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  delay: 0.5 + index * 0.2 
                }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-brand-500/20 flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={isInViewWorkflow ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    delay: 0.7 + index * 0.2 
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                </motion.div>
                <motion.div 
                  className="card-glass flex-1"
                  whileHover={{ y: -4, boxShadow: "var(--shadow-glass-strong)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 示例代码部分 */}
      <section ref={codeExamplesRef} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30
            }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              设计规则文件示例
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              查看 .cursor/rules 文件夹中的规则文件示例，了解如何定义您的设计系统
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="card-glass overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={isInViewCodeExamples ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                delay: 0.2 
              }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-glass-strong)" }}
            >
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-white overflow-x-auto">
                <pre>
{`---
description: 设计系统标准
globs: 
alwaysApply: true
---
# 设计系统标准

## 设计理念

本项目融合 **Notion 的中性色优雅留白** + 
**Vercel/Geist 的极简黑白高对比** + 
**Microsoft Fluent 2 的 4px 网格与设计 Tokens**，
形成「专业生产力 × 极简未来感」的设计体系。

## 核心设计原则

### 配色系统
- **主色调**: 中性灰/黑白打底
- **强调色**: 电蓝 #4F8CFF 作为主要品牌色`}
                </pre>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">设计系统标准 (.cursor/rules/design-system-standards.mdc)</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  定义项目的设计理念、核心原则和组件标准，确保整个项目的设计一致性
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="card-glass overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isInViewCodeExamples ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                delay: 0.4 
              }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-glass-strong)" }}
            >
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-white overflow-x-auto">
                <pre>
{`---
description: 高密度UI设计模式
globs: 
alwaysApply: true
---
# 高密度UI设计模式

## 设计理念

基于用户反馈优化的高信息密度设计模式，专为
数据密集型应用场景设计，最大化屏幕空间利用率。

## 核心原则

### 1. 横向优先布局
- 优先使用横向滚动而非垂直滚动
- 数据表格和时间线采用横向布局
- 减少页面高度，提高一屏信息密度`}
                </pre>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">高密度UI模式 (.cursor/rules/high-density-ui-patterns.mdc)</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  专为数据密集型应用设计的高效布局规则，最大化屏幕空间利用率
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

const features = [
  {
    title: "设计规则文件",
    description: "使用 .cursor/rules 目录下的 .mdc 文件定义设计规则，确保整个项目的设计一致性",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Context7 集成",
    description: "配置 Context7 MCP，让 Claude 生成的代码始终基于最新版本的框架和库",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Tailwind CSS v4",
    description: "利用 Tailwind CSS v4 的 @theme 指令，直接在 CSS 中定义设计变量，实现一致的视觉语言",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "自动化组件设计",
    description: "配置好全局样式后，后续的组件设计将自动遵循这些规则，确保设计一致性",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "多种设计模式",
    description: "支持标准设计和高密度UI设计模式，根据应用场景灵活调整组件的紧凑度",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  {
    title: "跨项目复用",
    description: "一次配置，多处使用，轻松在不同项目中应用相同的设计规则和风格",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

const workflow = [
  {
    title: "创建并配置项目规则文件",
    description: "在项目根目录下创建 .cursor/rules/ 目录，添加以 .mdc 为后缀的规则文件，并设置 alwaysApply: true"
  },
  {
    title: "配置全局设计样式",
    description: "向 Cursor Agent 发出指令，根据 Tailwind CSS v4 规则配置全局设计样式，修改 app.css 等全局样式文件"
  },
  {
    title: "自动化组件设计与重构",
    description: "后续开发中，Cursor Agent 将自动应用您配置的设计规则，确保所有组件的设计一致性"
  },
  {
    title: "调整组件紧凑性",
    description: "根据具体需求，灵活调整组件的紧凑度，适应不同的应用场景，如数据密集型界面"
  }
]; 