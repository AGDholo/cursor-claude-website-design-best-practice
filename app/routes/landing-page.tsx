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
        <div className="container mx-auto max-w-6xl">
          <div className={`flex flex-col md:flex-row items-center transition-opacity duration-[800ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                <span className="block transform transition-transform duration-[var(--time-portal)] delay-100 translate-y-0 opacity-100" style={{ 
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionProperty: 'transform, opacity',
                }}>AI驱动的前端设计</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-500 transform transition-transform duration-[var(--time-portal)] delay-200" style={{ 
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionProperty: 'transform, opacity',
                }}>
                  革命性体验
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg transform transition-all duration-[var(--time-portal)] delay-300" style={{ 
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: isLoaded ? 1 : 0
              }}>
                Cursor + Tailwind CSS v4 + Claude 4 的完美结合，提供最先进的前端设计提示词和工作流
              </p>
              <div className="flex flex-wrap gap-4 transform transition-all duration-[var(--time-portal)] delay-400" style={{ 
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: isLoaded ? 1 : 0
              }}>
                <button className="btn-brand">
                  立即开始
                </button>
                <button className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-[var(--time-fast)]">
                  查看演示
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center transform transition-all duration-[var(--time-portal)] delay-300" style={{ 
              transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              opacity: isLoaded ? 1 : 0
            }}>
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 opacity-20 blur-3xl absolute -z-10"></div>
                <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8 shadow-xl">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm">
                      <div className="text-brand-500">// 设计提示词示例</div>
                      <div className="text-gray-700 dark:text-gray-300">
                        <div className="typing-effect" style={{
                          overflow: 'hidden',
                          borderRight: '0.15em solid var(--color-brand-500)',
                          whiteSpace: 'nowrap',
                          animation: 'typing 3.5s steps(40, end) 1s forwards, blink-caret 0.75s step-end infinite'
                        }}>
                          <span>@import "tailwindcss";</span>
                        </div>
                        <div className="typing-effect-delay-1" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 2s forwards'
                        }}>
                          <span>@theme {`{`}</span>
                        </div>
                        <div className="ml-4 typing-effect-delay-2" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 2.5s forwards'
                        }}>
                          <span>--color-brand-500: oklch(0.62 0.214 259.8);</span>
                        </div>
                        <div className="ml-4 typing-effect-delay-3" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 3s forwards'
                        }}>
                          <span>--time-portal: 240ms;</span>
                        </div>
                        <div className="typing-effect-delay-4" style={{
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '0',
                          animation: 'typing 3.5s steps(40, end) 3.5s forwards'
                        }}>
                          <span>{`}`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>基于Notion × Vercel × Fluent2的设计指南</p>
                    <p>Tailwind CSS v4 + React组件</p>
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
              强大特性
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              融合三大设计体系的最佳实践，提供专业级前端开发体验
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
              设计工作流程
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              通过简单的步骤，即可创建出精美的网页设计
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
              Tailwind CSS v4 代码示例
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              使用最新的Tailwind CSS v4功能构建现代UI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-glass overflow-hidden">
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-white overflow-x-auto">
                <pre>
{`@import "tailwindcss";

@theme {
  --color-brand-500: oklch(0.62 0.214 259.8);
  --color-brand-600: oklch(0.55 0.245 262.9);
  
  --radius-2xl: 16px;
  --time-fast: 80ms;
  --easing-smooth: cubic-bezier(.25,.46,.45,.94);
}

.btn-brand {
  @apply bg-gradient-to-r from-brand-600 to-brand-500 
         text-white rounded-2xl px-4 py-2 
         shadow-xl hover:shadow-2xl 
         transition-[transform,shadow] 
         duration-[var(--time-fast)] 
         ease-[var(--easing-smooth)]
         hover:scale-105 hover:-translate-y-0.5;
}`}
                </pre>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">CSS 配置</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  利用 Tailwind CSS v4 的 @theme 直接在 CSS 中定义设计变量，无需 JavaScript 配置文件
                </p>
              </div>
            </div>
            
            <div className="card-glass overflow-hidden">
              <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-white overflow-x-auto">
                <pre>
{`<div className="perspective-distant">
  <article 
    className="rotate-x-6 rotate-z-3 transform-3d
              hover:rotate-x-0 hover:rotate-z-0
              transition-transform
              duration-[var(--time-std)]">
    <div className="bg-brand-500/10 
                  backdrop-blur-md 
                  rounded-2xl p-6 
                  border border-brand-500/20">
      <h3 className="text-xl font-semibold">
        3D 转换效果
      </h3>
      <p>利用 TailwindCSS v4 新增的 3D 变换功能</p>
    </div>
  </article>
</div>`}
                </pre>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">3D 转换组件</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  使用 Tailwind CSS v4 的 3D 转换功能创建具有深度感的交互式组件
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 客户案例 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              设计成果展示
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              查看使用我们设计系统创建的精美界面
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-[var(--time-std)] hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-purple-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">{item.title}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-[var(--time-std)]">
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA部分 */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              准备好提升您的设计工作流了吗？
            </h2>
            <p className="text-xl opacity-90 mb-8">
              立即获取最先进的AI设计提示词和工作流指南
            </p>
            <button className="bg-white text-brand-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-2xl font-medium transition-colors duration-[var(--time-fast)] shadow-xl hover:shadow-2xl hover:scale-105 transition-transform">
              免费开始使用
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

const features = [
  {
    title: "设计Token系统",
    description: "基于Fluent 2的语义化Design Tokens，确保整个设计系统的一致性",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "响应式设计",
    description: "基于Vercel/Geist的极简黑白高对比，完美适配各种设备尺寸",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "动效系统",
    description: "遵循Microsoft Fluent的动效规范，提供流畅的用户体验",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "高密度UI",
    description: "针对数据密集型应用的优化设计，最大化信息展示效率",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "暗色模式",
    description: "基于NN/g研究的暗色模式实现，提供舒适的夜间使用体验",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  },
  {
    title: "组件库",
    description: "可复用的React组件库，遵循设计系统规范，开箱即用",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

const workflow = [
  {
    title: "在Cursor中配置Context7",
    description: "通过Context7获取最新的Tailwind CSS v4和Claude 4文档，确保生成的代码始终是最新的"
  },
  {
    title: "定义设计Token系统",
    description: "使用@theme指令在CSS中直接定义颜色、字体、间距等设计变量，无需JavaScript配置"
  },
  {
    title: "编写AI提示词",
    description: "基于Notion、Vercel和Fluent2的混合设计风格，创建精确的提示词指南"
  },
  {
    title: "生成组件代码",
    description: "让Claude 4根据设计指南生成符合规范的组件代码，包括动画和交互效果"
  }
];

const cases = [
  {
    title: "数据仪表盘",
    description: "高密度数据可视化界面，展示关键指标和趋势"
  },
  {
    title: "电商平台",
    description: "现代化电商界面，提供流畅的购物体验"
  },
  {
    title: "内容管理系统",
    description: "简洁高效的CMS，优化内容创作工作流"
  },
  {
    title: "在线教育平台",
    description: "专注于学习体验的教育界面设计"
  },
  {
    title: "金融应用",
    description: "安全可靠的金融界面，展示复杂数据"
  },
  {
    title: "社交媒体",
    description: "注重用户互动的社交平台设计"
  }
]; 