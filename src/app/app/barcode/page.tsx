"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Camera, 
  X, 
  AlertCircle, 
  CheckCircle, 
  Loader2,
  ArrowLeft,
  Keyboard
} from "lucide-react";

interface NutritionalData {
  name: string;
  brand?: string;
  portion?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  sugar?: number;
  sodium?: number;
}

export default function BarcodeScannerPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scanning, setScanning] = useState(false);
  const [manualEntry, setManualEntry] = useState(false);
  const [barcode, setBarcode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [nutritionalData, setNutritionalData] = useState<NutritionalData | null>(null);
  const [cameraPermission, setCameraPermission] = useState<"granted" | "denied" | "prompt">("prompt");

  useEffect(() => {
    // Verificar autenticação
    const userData = localStorage.getItem("levve_user");
    if (!userData) {
      router.push("/login");
      return;
    }

    return () => {
      stopCamera();
    };
  }, [router]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      setScanning(true);
      setCameraPermission("granted");
      setError("");
    } catch (err) {
      console.error("Erro ao acessar câmera:", err);
      setCameraPermission("denied");
      setError("Não foi possível acessar a câmera. Por favor, permita o acesso ou digite o código manualmente.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setScanning(false);
  };

  const searchProduct = async (code: string) => {
    setLoading(true);
    setError("");
    setSuccess(false);
    setNutritionalData(null);

    try {
      // Simular busca de produto (substituir por API real)
      // APIs sugeridas: Open Food Facts, USDA FoodData Central, etc.
      
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Dados mockados para demonstração
      const mockData: NutritionalData = {
        name: "Produto Exemplo",
        brand: "Marca Exemplo",
        portion: "100g",
        calories: 250,
        protein: 8,
        carbs: 35,
        fat: 10,
        sugar: 5,
        sodium: 200,
      };

      setNutritionalData(mockData);
      setSuccess(true);
      stopCamera();
    } catch (err) {
      setError("Produto não encontrado. Tente outro código ou digite manualmente.");
    } finally {
      setLoading(false);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (barcode.trim()) {
      searchProduct(barcode.trim());
    }
  };

  const handleAddToMeal = () => {
    // Adicionar ao diário de refeições
    router.push("/app");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#0066FF] animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Buscando produto...</p>
        </div>
      </div>
    );
  }

  if (success && nutritionalData) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/app"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Voltar</span>
              </Link>
              <h1 className="text-lg font-bold text-gray-900">Produto Encontrado</h1>
              <div className="w-20" />
            </div>
          </div>
        </header>

        {/* Success Content */}
        <main className="max-w-2xl mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            {/* Success Banner */}
            <div className="bg-green-50 border-b border-green-200 p-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-green-800 font-medium">Produto encontrado com sucesso!</p>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {nutritionalData.name}
              </h2>
              {nutritionalData.brand && (
                <p className="text-gray-600 mb-4">{nutritionalData.brand}</p>
              )}
              {nutritionalData.portion && (
                <p className="text-sm text-gray-500 mb-6">Porção: {nutritionalData.portion}</p>
              )}

              {/* Nutritional Data */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Informações Nutricionais
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Calorias</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {nutritionalData.calories ?? "—"}
                      {nutritionalData.calories && <span className="text-sm font-normal text-gray-600 ml-1">kcal</span>}
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Proteínas</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {nutritionalData.protein ?? "—"}
                      {nutritionalData.protein && <span className="text-sm font-normal text-gray-600 ml-1">g</span>}
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Carboidratos</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {nutritionalData.carbs ?? "—"}
                      {nutritionalData.carbs && <span className="text-sm font-normal text-gray-600 ml-1">g</span>}
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Gorduras</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {nutritionalData.fat ?? "—"}
                      {nutritionalData.fat && <span className="text-sm font-normal text-gray-600 ml-1">g</span>}
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Açúcares</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {nutritionalData.sugar ?? "—"}
                      {nutritionalData.sugar && <span className="text-sm font-normal text-gray-600 ml-1">g</span>}
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Sódio</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {nutritionalData.sodium ?? "—"}
                      {nutritionalData.sodium && <span className="text-sm font-normal text-gray-600 ml-1">mg</span>}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={handleAddToMeal}
                  className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-4 rounded-xl transition-all"
                >
                  Adicionar ao Diário
                </button>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setNutritionalData(null);
                    setBarcode("");
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-4 rounded-xl transition-all"
                >
                  Escanear Outro Produto
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/app"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar</span>
            </Link>
            <h1 className="text-lg font-bold text-gray-900">Scanner de Código de Barras</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mb-6">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Camera View */}
        {!manualEntry && (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
            <div className="aspect-video bg-gray-900 relative">
              {scanning ? (
                <>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-40 border-4 border-white rounded-xl opacity-50" />
                  </div>
                  <button
                    onClick={stopCamera}
                    className="absolute top-4 right-4 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-white mb-6">Aponte a câmera para o código de barras</p>
                    <button
                      onClick={startCamera}
                      className="px-6 py-3 bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold rounded-xl transition-all"
                    >
                      Ativar Câmera
                    </button>
                  </div>
                </div>
              )}
            </div>

            {cameraPermission === "denied" && (
              <div className="p-4 bg-yellow-50 border-t border-yellow-200">
                <p className="text-sm text-yellow-800">
                  Permissão de câmera negada. Por favor, permita o acesso nas configurações do navegador ou use a entrada manual.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Manual Entry */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Keyboard className="w-6 h-6 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Entrada Manual</h2>
          </div>
          
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div>
              <label htmlFor="barcode" className="block text-sm font-medium text-gray-700 mb-2">
                Digite o código de barras
              </label>
              <input
                id="barcode"
                type="text"
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                placeholder="Ex: 7891234567890"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
              />
            </div>
            
            <button
              type="submit"
              disabled={!barcode.trim()}
              className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold py-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buscar Produto
            </button>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            <strong>Dica:</strong> Posicione o código de barras dentro do quadrado branco para melhor leitura. 
            Se não funcionar, você pode digitar o código manualmente.
          </p>
        </div>
      </main>
    </div>
  );
}
