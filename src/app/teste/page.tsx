import BrandLogo from "@/components/BrandLogo";
import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function TestePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-2xl text-center">
        <div className="mb-8">
          <BrandLogo size="lg" showText={true} />
        </div>

        <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ROTA TESTE OK ✅
          </h1>
          <p className="text-lg text-gray-600">
            O roteador App Router está funcionando perfeitamente!
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
