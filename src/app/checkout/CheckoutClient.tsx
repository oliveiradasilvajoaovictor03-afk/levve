"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, Loader2 } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

/**
 * Página de Checkout Externa
 * Esta página redireciona para Stripe Checkout (externo ao app)
 * Compatível com App Store e Google Play
 */
export default function CheckoutClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plano = searchParams.get("plano") || "mensal";

  useEffect(() => {
    // Simular redirecionamento para Stripe
    const timer = setTimeout(() => {
      // TODO: Redirecionar para Stripe Checkout real
      // window.location.href = `https://checkout.stripe.com/...?plan=${plano}`;
      
      // MVP: Redirecionar para página de sucesso
      router.push("/checkout/sucesso");
    }, 2000);

    return () => clearTimeout(timer);
  }, [plano, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <BrandLogo size="lg" showText={true} />
        
        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Redirecionando para pagamento seguro...
          </h1>
          
          <p className="text-gray-600 mb-6">
            Você será redirecionado para nossa plataforma de pagamento segura.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Pagamento processado externamente via Stripe</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Seus dados estão protegidos com criptografia de ponta a ponta
        </p>
      </div>
    </div>
  );
}
