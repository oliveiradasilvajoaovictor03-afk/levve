import React from 'react';

interface BrandLogoProps {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

// ✅ ÍCONE OFICIAL ÚNICO DO LEVVE
const LEVVE_ICON_URL = "https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/d9105710-f327-4523-baac-b94260b09d28.jpg";

export default function BrandLogo({ showText = true, size = 'md', className = '', href }: BrandLogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Ícone Oficial Levve */}
      <div className={`${sizeClasses[size]} relative flex-shrink-0`}>
        <img
          src={LEVVE_ICON_URL}
          alt="Levve"
          width={48}
          height={48}
          className="rounded-lg object-cover"
          style={{ height: "auto" }}
        />
      </div>
      
      {/* Nome da Marca */}
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]} text-gray-900 dark:text-white`}>
          Levve
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }

  return content;
}
