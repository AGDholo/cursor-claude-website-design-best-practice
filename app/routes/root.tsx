import { Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeToggle } from "../components/ThemeToggle";

// 添加优化的主题脚本，确保页面加载前应用正确的主题
const ThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              // 获取保存的主题
              const theme = localStorage.getItem('theme');
              
              // 获取系统主题偏好
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              
              // 应用主题
              if (theme === 'dark' || (theme === 'system' || theme === null) && systemTheme === 'dark') {
                document.documentElement.classList.add('dark');
                if (theme) document.documentElement.setAttribute('data-theme', theme);
              } else if (theme === 'light') {
                document.documentElement.classList.remove('dark');
                document.documentElement.setAttribute('data-theme', 'light');
              } else {
                // 系统是亮色
                document.documentElement.classList.remove('dark');
                if (theme === 'system') document.documentElement.setAttribute('data-theme', 'system');
              }
            } catch (e) {
              // 如果出错，使用默认亮色主题
              console.error('主题应用失败:', e);
            }
          })();
        `,
      }}
    />
  );
};

export default function Root() {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <ThemeScript />
      </head>
      <body>
        <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white">
          <header className="border-b border-neutral-200 dark:border-neutral-800">
            <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
              <nav className="flex items-center gap-6">
                <a href="/" className="text-lg font-semibold">
                  设计系统
                </a>
                <a href="/design-system" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-[var(--time-fast)]">
                  组件库
                </a>
              </nav>
              <ThemeToggle />
            </div>
          </header>
          
          <main>
            <Outlet />
          </main>
          
          <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-12">
            <div className="max-w-6xl mx-auto p-4 text-sm text-neutral-500">
              <p>© {new Date().getFullYear()} 设计系统示例</p>
            </div>
          </footer>
        </div>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
} 