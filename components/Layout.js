// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">
            <Link href="/">我的技术博客</Link>
          </h1>
          <div>
            <Link href="/" className="mr-4 hover:underline">首页</Link>
            <Link href="/about" className="hover:underline">关于我</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-1 p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2023 我的技术博客
      </footer>
    </div>
  );
}
