import React from 'react';
import Image from 'next/image';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = 'Carregando...' }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      {/* Ícone Oficial Levve com animação */}
      <div className="relative w-16 h-16 animate-pulse">
        <Image
          src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/26dd0bcd-d1a2-4827-9467-86c4d20fef02.jpg"
          alt="Levve"
          width={64}
          height={64}
          className="rounded-lg"
          priority
        />
      </div>
      
      {/* Mensagem */}
      <p className="text-gray-600 text-sm">{message}</p>
      
      {/* Barra de progresso animada */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}
