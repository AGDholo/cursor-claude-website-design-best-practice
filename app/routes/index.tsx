export default function Index() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero 区域 */}
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            融合现代设计精华的<br />统一设计系统
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10">
            结合 Notion 的中性色优雅留白、Vercel/Geist 的极简黑白对比以及 Microsoft Fluent 2 的系统化设计
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/design-system" className="btn-brand">
              浏览组件库
            </a>
            <a href="#features" className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-fast">
              了解更多
            </a>
          </div>
        </div>
      </section>

      {/* 特性区域 */}
      <section id="features" className="py-16 px-4 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">设计系统特性</h2>
          
          <div className="dense-grid">
            <FeatureCard 
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
              title="统一品牌色系统"
              description="基于 OKLCH 色彩空间的品牌色系统，从主色调生成一致的色彩层级"
            />
            
            <FeatureCard 
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              }
              title="模块化布局系统"
              description="基于 4px 网格的间距系统，确保界面元素对齐与一致性"
            />
            
            <FeatureCard 
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="优化的动效体验"
              description="精心设计的动效时长与缓动函数，提供流畅且有意义的交互反馈"
            />
            
            <FeatureCard 
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              }
              title="自动暗色模式"
              description="完整支持亮色/暗色主题切换，自动跟随系统偏好设置"
            />
          </div>
        </div>
      </section>
      
      {/* 高密度 UI 区域 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">高密度 UI 组件</h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
            专为数据密集型应用设计的组件系统，最大化屏幕空间利用率
          </p>
          
          <div className="card-glass mb-8">
            <h3 className="text-lg font-semibold mb-4">水平滚动容器</h3>
            <div className="horizontal-scroll-container">
              <div className="flex min-w-max gap-4 pb-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-64 card-dense">
                    <h4 className="text-sm font-medium mb-1">项目 {i + 1}</h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">横向滚动优先的布局系统</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="card-glass">
            <h3 className="text-lg font-semibold mb-4">统计仪表板</h3>
            <div className="dense-grid">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="stat-card-dense">
                  <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold">{(i + 1) * 25}%</p>
                    <p className="text-xs text-neutral-500">数据统计 {i + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA 区域 */}
      <section className="py-16 px-4 bg-neutral-50 dark:bg-neutral-950 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">开始使用统一设计系统</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            通过精心设计的组件和样式，快速构建现代、高效的用户界面
          </p>
          <a href="/design-system" className="btn-brand">
            开始您的旅程
          </a>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-glass">
      <div className="w-12 h-12 bg-brand-500/10 dark:bg-brand-500/20 rounded-lg flex items-center justify-center text-brand-500 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
    </div>
  );
} 