import React from 'react';
import { content } from '../data/content';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050B1A] border-t border-kw-cyan/20 px-6 sm:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kw-muted">
        <p>{content.footer.copyright}</p>
        <p className="text-kw-cyan/80 font-medium">{content.footer.credits}</p>
      </div>
    </footer>
  );
}
