export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        
        {/* 底部版权 */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} HeroUI. 保留所有权利。
          </div>
        </div>
      </div>
    </footer>
  );
} 