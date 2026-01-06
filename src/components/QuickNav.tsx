"use client";

import Link from "next/link";
import { Sparkles, LayoutDashboard } from "lucide-react";

export default function QuickNav() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex gap-2">
      {/* Botão Boas-vindas */}
      <Link
        href="/boas-vindas"
        className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-[#0066FF] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        title="Boas-vindas"
      >
        <Sparkles className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">Boas-vindas</span>
      </Link>

      {/* Botão Dashboard */}
      <Link
        href="/dashboard"
        className="flex items-center gap-2 px-4 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        title="Dashboard"
      >
        <LayoutDashboard className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">Dashboard</span>
      </Link>
    </div>
  );
}
