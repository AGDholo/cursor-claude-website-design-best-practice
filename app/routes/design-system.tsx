import { ReactNode } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

export default function DesignSystem() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">设计系统示例</h1>
        <ThemeToggle />
      </div>
      
      <Section title="品牌色系统">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((weight) => (
            <div key={weight} className="flex flex-col items-center">
              <div 
                className={`w-20 h-20 rounded-lg mb-2`}
                style={{ backgroundColor: `rgb(var(--color-brand-${weight}, oklch(0.62 0.214 259.8)))` }}
              />
              <div className="text-sm">brand-{weight}</div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="按钮样式">
        <div className="flex flex-wrap gap-4">
          <button className="btn-brand">主要按钮</button>
          <button className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-fast">次要按钮</button>
          <button className="btn-micro bg-brand-500 text-white">紧凑按钮</button>
        </div>
      </Section>
      
      <Section title="卡片样式">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-glass">
            <h3 className="text-lg font-semibold mb-2">标准卡片</h3>
            <p className="text-neutral-600 dark:text-neutral-400">这是一个标准尺寸的卡片组件，使用了设计系统的圆角和阴影。</p>
          </div>
          
          <div className="card-dense">
            <h3 className="text-sm font-medium mb-1">紧凑卡片</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">这是一个紧凑型卡片，适用于数据密集型界面。</p>
          </div>
          
          <div className="card-glass">
            <h3 className="text-lg font-semibold mb-2">玻璃态卡片</h3>
            <p className="text-neutral-600 dark:text-neutral-400">使用背景模糊和半透明效果的现代卡片设计。</p>
          </div>
        </div>
      </Section>
      
      <Section title="数据统计卡片">
        <div className="dense-grid">
          <div className="stat-card-dense">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold">89%</p>
              <p className="text-xs text-neutral-500">完成率</p>
            </div>
          </div>
          
          <div className="stat-card-dense">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold">24h</p>
              <p className="text-xs text-neutral-500">剩余时间</p>
            </div>
          </div>
          
          <div className="stat-card-dense">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold">42</p>
              <p className="text-xs text-neutral-500">已完成任务</p>
            </div>
          </div>
          
          <div className="stat-card-dense">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-bold">98%</p>
              <p className="text-xs text-neutral-500">效率指数</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="水平滚动容器">
        <div className="horizontal-scroll-container">
          <div className="flex min-w-max gap-4 pb-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-64 card-dense">
                <h3 className="text-sm font-medium mb-1">项目 {i + 1}</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">这是一个横向滚动容器中的卡片项目。</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section title="固定高度内容">
        <div className="fixed-height-content card-dense">
          <h3 className="text-sm font-medium mb-2 sticky top-0 bg-white dark:bg-neutral-900 py-2">固定高度容器</h3>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="py-2 border-b border-neutral-100 dark:border-neutral-800">
              <p className="text-xs">列表项 {i + 1}</p>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="可访问性">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-dense">
            <h3 className="text-sm font-medium mb-2">焦点状态</h3>
            <div className="flex flex-wrap gap-2">
              <button className="btn-micro bg-brand-500 text-white focus-visible:outline focus-visible:outline-brand-400">按钮焦点</button>
              <a href="#" className="text-brand-500 underline focus-visible:outline focus-visible:outline-brand-400 rounded">链接焦点</a>
            </div>
          </div>
          
          <div className="card-dense">
            <h3 className="text-sm font-medium mb-2">动效设置</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">所有动效均遵循用户的减弱动效偏好</p>
            <button className="btn-micro bg-brand-500 text-white" style={{ animation: "pulse 2s infinite" }}>动效演示</button>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string, children: ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">{title}</h2>
      <div>{children}</div>
    </section>
  );
} 