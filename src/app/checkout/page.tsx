"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

function CheckoutInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plano = searchParams.get("plano") || "mensal";

  useEffect(() => {
    const timer = setTimeout(() => {
      // MVP: depois você troca isso pelo Stripe real
      // window.location.href = `https://checkout.stripe.com/...?...plano=${plano}`;
      router.push(`/checkout/sucesso?plano=${plano}`);
    }, 2000);

    return () => clearTimeout(timer);
  }, [plano, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <BrandLogo size="lg" showText={true} />

        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 border-4 border-[#0066FF] border-t-transparent rounded-full animate-spin" />
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

          <p className="text-sm text-gray-500 mt-6">
            Seus dados estão protegidos com criptografia de ponta a ponta
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div />}>
      <CheckoutInner />
    </Suspense>
  );
}
