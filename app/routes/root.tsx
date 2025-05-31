import { Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeToggle } from "../components/ThemeToggle";

// 添加客户端脚本，在页面加载前应用保存的主题
const ThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // 获取保存的主题
            const theme = localStorage.getItem('theme');
            
            // 获取系统主题
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            
            // 应用主题
            if (theme === 'dark' || (theme === null && systemTheme === 'dark')) {
              document.documentElement.classList.add('dark');
              document.documentElement.setAttribute('data-theme', 'dark');
            } else {
              document.documentElement.classList.remove('dark');
              document.documentElement.removeAttribute('data-theme');
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
                <a href="/design-system" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-fast">
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