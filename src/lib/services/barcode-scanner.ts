/**
 * Serviço de Scanner de Código de Barras
 * MVP: Retorna dados mock
 * TODO: Integrar com API real de produtos (Open Food Facts, etc.)
 */

export interface ProductInfo {
  nome: string;
  marca: string;
  porcao: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
  fibras?: number;
  sodio?: number;
}

/**
 * Busca informações de produto por código de barras
 * @param barcode - Código de barras do produto
 * @returns Informações nutricionais do produto
 */
export async function buscarProdutoPorCodigo(barcode: string): Promise<ProductInfo | null> {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 1500));

  // TODO: Implementar integração real
  // const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
  // const data = await response.json();
  // return parseProductData(data);

  // Mock data para MVP
  const mockProducts: Record<string, ProductInfo> = {
    "7891234567890": {
      nome: "Whey Protein Concentrado",
      marca: "Marca Exemplo",
      porcao: "30g",
      calorias: 120,
      proteinas: 24,
      carboidratos: 3,
      gorduras: 1.5,
      fibras: 0,
      sodio: 80,
    },
    "7891234567891": {
      nome: "Pasta de Amendoim Integral",
      marca: "Marca Exemplo",
      porcao: "20g",
      calorias: 120,
      proteinas: 5,
      carboidratos: 4,
      gorduras: 10,
      fibras: 2,
      sodio: 50,
    },
    "7891234567892": {
      nome: "Aveia em Flocos",
      marca: "Marca Exemplo",
      porcao: "40g",
      calorias: 150,
      proteinas: 6,
      carboidratos: 27,
      gorduras: 3,
      fibras: 4,
      sodio: 0,
    },
  };

  // Retornar produto mock ou genérico
  return mockProducts[barcode] || {
    nome: "Produto Exemplo",
    marca: "Marca Genérica",
    porcao: "100g",
    calorias: 200,
    proteinas: 10,
    carboidratos: 25,
    gorduras: 5,
    fibras: 2,
    sodio: 100,
  };
}

/**
 * Analisa imagem de código de barras e extrai o código
 * @param imageData - Base64 ou URL da imagem
 * @returns Código de barras extraído
 */
export async function analyzeBarcodeImage(imageData: string): Promise<string | null> {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 1000));

  // TODO: Implementar OCR/scanner real
  // const response = await fetch('/api/scan-barcode', {
  //   method: 'POST',
  //   body: JSON.stringify({ image: imageData }),
  // });
  // const data = await response.json();
  // return data.barcode;

  // Mock: retornar código aleatório
  const mockBarcodes = [
    "7891234567890",
    "7891234567891",
    "7891234567892",
  ];

  return mockBarcodes[Math.floor(Math.random() * mockBarcodes.length)];
}

/**
 * Valida formato de código de barras
 * @param barcode - Código de barras
 * @returns true se válido, false caso contrário
 */
export function validateBarcode(barcode: string): boolean {
  // Validar formato básico (8, 12, 13 ou 14 dígitos)
  const validLengths = [8, 12, 13, 14];
  const isNumeric = /^\d+$/.test(barcode);
  
  return isNumeric && validLengths.includes(barcode.length);
}
