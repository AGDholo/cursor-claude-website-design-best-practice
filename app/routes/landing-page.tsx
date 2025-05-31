import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      
      {/* Hero 部分 */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className={`flex flex-col md:flex-row items-center transition-opacity duration-[800ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="block transform transition-transform duration-[var(--time-portal)] delay-100 translate-y-0 opacity-100" style={{ 
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionProperty: 'transform, opacity',
                }}>Cursor AI 设计规则</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-500 transform transition-transform duration-[var(--time-portal)] delay-200" style={{ 
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionProperty: 'transform, opacity',
                }}>
                  配置指南
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg transform transition-all duration-[var(--time-portal)] delay-300" style={{ 
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: isLoaded ? 1 : 0
              }}>
                使用 Tailwind CSS v4 + Context7 + Claude 4，配置专业的设计规则系统，实现高效一致的界面开发
              </p>
              <div className="flex flex-wrap gap-4 transform transition-all duration-[var(--time-portal)] delay-400" style={{ 
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: isLoaded ? 1 : 0
              }}>
                <button className="btn-brand">
                  开始配置
                </button>
                <button className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-[var(--time-fast)]">
                  查看示例
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center transform transition-all duration-[var(--time-portal)] delay-300" style={{ 
              transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              opacity: isLoaded ? 1 : 0
            }}>
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 opacity-20 blur-3xl absolute -z-10"></div>
                <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl w-[420px] max-w-full">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm w-full">
                      <div className="text-brand-500">// 设计规则示例</div>
                      <div className="text-gray-700 dark:text-gray-300 w-full">
                        <div className="typing-effect" style={{
                          overflow: 'hidden',
                          borderRight: '0.15em solid var(--color-brand-500)',
                          whiteSpace: 'nowrap',
                          animation: 'typing 3.5s steps(40, end) 1s forwards, blink-caret 0.75s step-end infinite',
                          maxWidth: '100%'
                        }}>
                          <span>@import "tailwindcss";</span>
                        </div>
                        <div className="typing-effect-delay-1" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 2s forwards',
                          maxWidth: '100%'
                        }}>
                          <span>@theme {`{`}</span>
                        </div>
                        <div className="ml-4 typing-effect-delay-2" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 2.5s forwards',
                          maxWidth: '100%'
                        }}>
                          <span>--color-brand-500: oklch(0.62 0.214 259.8);</span>
                        </div>
                        <div className="ml-4 typing-effect-delay-3" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 3s forwards',
                          maxWidth: '100%'
                        }}>
                          <span>--time-portal: 240ms;</span>
                        </div>
                        <div className="typing-effect-delay-4" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 3.5s forwards',
                          maxWidth: '100%'
                        }}>
                          <span>{`}`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>基于 .cursor/rules 规则文件自动应用</p>
                    <p>Tailwind CSS v4 + Context7 + Claude 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 特性部分 */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              配置指南特点
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              通过简单的步骤，快速配置 Cursor AI 设计规则，实现高效且一致的界面开发
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-glass transform transition-all duration-[var(--time-std)] hover:translate-y-[-4px]"
                style={{
                  transitionDelay: `${100 * index}ms`
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 工作流程部分 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              配置流程
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              四个简单步骤，轻松设置 Cursor AI 设计规则系统
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-200 dark:bg-brand-900 -translate-x-1/2 z-0"></div>
            
            {workflow.map((step, index) => (
              <div key={index} className={`relative z-10 flex items-center gap-8 mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-brand-500/20 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="card-glass flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 示例代码部分 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              设计规则文件示例
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              查看 .cursor/rules 文件夹中的规则文件示例，了解如何定义您的设计系统
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-glass overflow-hidden">
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
            </div>
            
            <div className="card-glass overflow-hidden">
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
            </div>
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

const cases = [
  {
    title: "企业管理系统",
    description: "采用高密度UI设计模式，最大化信息展示效率"
  },
  {
    title: "内容创作平台",
    description: "使用标准设计系统，注重内容阅读体验和编辑流畅性"
  },
  {
    title: "数据分析仪表板",
    description: "应用高密度UI设计，配合横向优先布局展示复杂数据"
  },
  {
    title: "电商平台",
    description: "结合标准设计与紧凑组件，平衡视觉吸引力和信息密度"
  },
  {
    title: "协作办公工具",
    description: "使用响应式设计和紧凑布局，提升团队协作效率"
  },
  {
    title: "学习管理系统",
    description: "采用模块化组件和清晰的信息层级，优化学习体验"
  }
]; 