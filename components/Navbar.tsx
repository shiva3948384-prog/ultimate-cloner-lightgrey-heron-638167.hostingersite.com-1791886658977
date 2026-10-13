import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Navbar({ title = 'Flipkart big sale is live' }: { title?: string }) {
  return (
    <header className="w-full border-b border-zinc-200 bg-white text-zinc-900 px-6 py-4 flex items-center justify-between">
      <a href="/" className="font-bold text-lg hover:opacity-90" style={{ color: '#337ab7' }}>{title}</a>
      <nav className="flex items-center gap-6 text-sm text-zinc-600">
        <a href="/" className="hover:underline">Home</a>
        <a href="/#catalog" className="hover:underline">Catalog</a>
      </nav>
      <button className="p-2 text-zinc-700 hover:opacity-80">
        <ShoppingBag className="w-5 h-5" />
      </button>
    </header>
  );
}
