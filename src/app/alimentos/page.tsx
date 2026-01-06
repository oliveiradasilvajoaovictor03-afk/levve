"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Search,
  Barcode,
  Camera,
  TrendingUp,
  Filter,
  Plus,
  Sparkles,
  X,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import {
  foodDatabase,
  categorias,
  searchProducts,
  getProductsByCategory,
  getPopularProducts,
  type FoodProduct,
} from "@/lib/data/food-database";
import { buscarProdutoPorCodigo, validateBarcode } from "@/lib/services/barcode-scanner";

export default function AlimentosPage() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [produtosFiltrados, setProdutosFiltrados] = useState<FoodProduct[]>(
    getPopularProducts()
  );
  const [produtoSelecionado, setProdutoSelecionado] = useState<FoodProduct | null>(null);
  const [porcaoCustom, setPorcaoCustom] = useState(1);
  const [mostrarScanner, setMostrarScanner] = useState(false);
  const [codigoBarras, setCodigoBarras] = useState("");
  const [buscandoCodigo, setBuscandoCodigo] = useState(false);

  // Busca por texto
  const handleBusca = (termo: string) => {
    setBusca(termo);
    if (termo.trim()) {
      setProdutosFiltrados(searchProducts(termo));
    } else {
      setProdutosFiltrados(
        categoriaAtiva === "todos"
          ? getPopularProducts()
          : getProductsByCategory(categoriaAtiva)
      );
    }
  };

  // Filtro por categoria
  const handleCategoria = (catId: string) => {
    setCategoriaAtiva(catId);
    setBusca("");
    setProdutosFiltrados(
      catId === "todos" ? getPopularProducts() : getProductsByCategory(catId)
    );
  };

  // Buscar por código de barras
  const handleBuscarCodigo = async () => {
    if (!codigoBarras || !validateBarcode(codigoBarras)) {
      alert("Código de barras inválido. Digite 8, 12, 13 ou 14 dígitos.");
      return;
    }

    setBuscandoCodigo(true);

    try {
      const produto = await buscarProdutoPorCodigo(codigoBarras);
      if (produto) {
        // Converter ProductInfo para FoodProduct
        const foodProduct: FoodProduct = {
          id: `barcode-${codigoBarras}`,
          nome: produto.nome,
          marca: produto.marca,
          categoria: "todos",
          imagem: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=400&h=400&fit=crop",
          porcao: produto.porcao,
          calorias: produto.calorias,
          proteinas: produto.proteinas,
          carboidratos: produto.carboidratos,
          gorduras: produto.gorduras,
          codigoBarras: codigoBarras,
        };
        setProdutoSelecionado(foodProduct);
        setMostrarScanner(false);
      } else {
        alert("Produto não encontrado. Tente buscar manualmente.");
      }
    } catch (error) {
      alert("Erro ao buscar produto. Tente novamente.");
    } finally {
      setBuscandoCodigo(false);
    }
  };

  // Adicionar ao diário
  const handleAdicionar = () => {
    if (!produtoSelecionado) return;

    const caloriasTotal = Math.round(produtoSelecionado.calorias * porcaoCustom);
    const proteinasTotal = Math.round(produtoSelecionado.proteinas * porcaoCustom * 10) / 10;
    const carboidratosTotal = Math.round(produtoSelecionado.carboidratos * porcaoCustom * 10) / 10;
    const gordurasTotal = Math.round(produtoSelecionado.gorduras * porcaoCustom * 10) / 10;

    alert(
      `✅ Adicionado ao diário!\n\n` +
      `${produtoSelecionado.nome}\n` +
      `Porção: ${porcaoCustom}x (${produtoSelecionado.porcao})\n\n` +
      `Calorias: ${caloriasTotal} kcal\n` +
      `Proteínas: ${proteinasTotal}g\n` +
      `Carboidratos: ${carboidratosTotal}g\n` +
      `Gorduras: ${gordurasTotal}g`
    );

    setProdutoSelecionado(null);
    setPorcaoCustom(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-[#0066FF] hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
            <BrandLogo size="md" showText={true} href="/" />
            <button
              onClick={() => setMostrarScanner(!mostrarScanner)}
              className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all"
            >
              <Barcode className="w-5 h-5" />
              <span className="hidden sm:inline">Scanner</span>
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Loja Nutricional 🍽️
          </h1>
          <p className="text-gray-600 text-lg">
            Registre seus alimentos de forma fácil e rápida
          </p>
        </div>

        {/* Scanner de Código de Barras */}
        {mostrarScanner && (
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Barcode className="w-8 h-8 text-[#0066FF]" />
                <h3 className="font-bold text-gray-900 text-lg">
                  Scanner de Código de Barras
                </h3>
              </div>
              <button
                onClick={() => setMostrarScanner(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <p className="text-gray-600 mb-4">
              Digite o código de barras do produto para buscar informações nutricionais.
            </p>

            <div className="flex gap-3">
              <input
                type="text"
                value={codigoBarras}
                onChange={(e) => setCodigoBarras(e.target.value.replace(/\D/g, ""))}
                placeholder="Ex: 7891234567890"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                maxLength={14}
              />
              <button
                onClick={handleBuscarCodigo}
                disabled={buscandoCodigo || !codigoBarras}
                className="flex items-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {buscandoCodigo ? "Buscando..." : "Buscar"}
              </button>
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-gray-600">
                <strong>💡 Dica:</strong> Localize o código de barras na embalagem do produto
                (geralmente 13 dígitos) e digite os números acima.
              </p>
            </div>
          </div>
        )}

        {/* Barra de Busca */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={busca}
              onChange={(e) => handleBusca(e.target.value)}
              placeholder="Buscar por nome, marca ou categoria..."
              className="flex-1 outline-none text-gray-900 placeholder-gray-400"
            />
            {busca && (
              <button
                onClick={() => handleBusca("")}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* Filtros de Categoria */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoria(cat.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  categoriaAtiva === cat.id
                    ? "bg-[#0066FF] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.nome}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mensagem da IA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#0066FF] rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Sugestão da IA Nutricional
              </h3>
              <p className="text-gray-700">
                Com base no seu objetivo de emagrecimento, recomendamos priorizar
                alimentos ricos em proteínas e com baixas calorias. Experimente:
                frango grelhado, ovos, feijão e legumes! 💪
              </p>
            </div>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {busca
                ? `Resultados para "${busca}"`
                : categoriaAtiva === "todos"
                ? "Produtos Populares"
                : categorias.find((c) => c.id === categoriaAtiva)?.nome}
            </h2>
            <span className="text-sm text-gray-600">
              {produtosFiltrados.length} produtos
            </span>
          </div>

          {produtosFiltrados.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-600 mb-4">
                Tente buscar por outro termo ou categoria
              </p>
              <button
                onClick={() => {
                  setBusca("");
                  handleCategoria("todos");
                }}
                className="px-6 py-3 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all"
              >
                Ver todos os produtos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {produtosFiltrados.map((produto) => (
                <div
                  key={produto.id}
                  onClick={() => setProdutoSelecionado(produto)}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#0066FF] hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                      {produto.nome}
                    </h3>
                    {produto.marca && (
                      <p className="text-xs text-gray-600 mb-2">{produto.marca}</p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <span>{produto.porcao}</span>
                      <span className="font-bold text-[#0066FF]">
                        {produto.calorias} kcal
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <p className="text-gray-600">Prot</p>
                        <p className="font-bold text-green-600">{produto.proteinas}g</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">Carb</p>
                        <p className="font-bold text-orange-600">
                          {produto.carboidratos}g
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-600">Gord</p>
                        <p className="font-bold text-purple-600">{produto.gorduras}g</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de Produto Selecionado */}
      {produtoSelecionado && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {produtoSelecionado.nome}
                </h2>
                <button
                  onClick={() => {
                    setProdutoSelecionado(null);
                    setPorcaoCustom(1);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {produtoSelecionado.marca && (
                <p className="text-gray-600 mb-4">{produtoSelecionado.marca}</p>
              )}

              <div className="aspect-video overflow-hidden rounded-xl mb-6 bg-gray-100">
                <img
                  src={produtoSelecionado.imagem}
                  alt={produtoSelecionado.nome}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Porção */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantidade de porções
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setPorcaoCustom(Math.max(0.5, porcaoCustom - 0.5))}
                    className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-bold"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-bold text-gray-900">{porcaoCustom}x</p>
                    <p className="text-sm text-gray-600">
                      {produtoSelecionado.porcao}
                    </p>
                  </div>
                  <button
                    onClick={() => setPorcaoCustom(porcaoCustom + 0.5)}
                    className="w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Informações Nutricionais */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Informações Nutricionais (Total)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Calorias</p>
                    <p className="text-2xl font-bold text-[#0066FF]">
                      {Math.round(produtoSelecionado.calorias * porcaoCustom)}
                    </p>
                    <p className="text-xs text-gray-500">kcal</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Proteínas</p>
                    <p className="text-2xl font-bold text-green-600">
                      {Math.round(produtoSelecionado.proteinas * porcaoCustom * 10) / 10}g
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Carboidratos</p>
                    <p className="text-2xl font-bold text-orange-600">
                      {Math.round(produtoSelecionado.carboidratos * porcaoCustom * 10) / 10}g
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-600 mb-1">Gorduras</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {Math.round(produtoSelecionado.gorduras * porcaoCustom * 10) / 10}g
                    </p>
                  </div>
                </div>
              </div>

              {/* Botão Adicionar */}
              <button
                onClick={handleAdicionar}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0066FF] text-white rounded-xl hover:bg-blue-700 transition-all font-bold text-lg"
              >
                <Plus className="w-6 h-6" />
                Adicionar ao diário
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
