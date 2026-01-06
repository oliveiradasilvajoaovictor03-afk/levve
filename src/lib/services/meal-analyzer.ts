/**
 * Serviço de Análise de Refeições
 * MVP: Retorna dados mock
 * TODO: Integrar com API de IA real (OpenAI Vision, Google Vision, etc.)
 */

export interface MealAnalysisResult {
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
  confianca: number; // 0-100
  alimentos: string[];
}

/**
 * Analisa foto de refeição e retorna estimativas nutricionais
 * @param imageData - Base64 ou URL da imagem
 * @returns Análise nutricional da refeição
 */
export async function analyzeMealPhoto(imageData: string): Promise<MealAnalysisResult> {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 2000));

  // TODO: Implementar integração real
  // const response = await fetch('/api/analyze-meal', {
  //   method: 'POST',
  //   body: JSON.stringify({ image: imageData }),
  // });
  // return response.json();

  // Mock data para MVP
  const mockResults: MealAnalysisResult[] = [
    {
      calorias: 450,
      proteinas: 35,
      carboidratos: 48,
      gorduras: 12,
      confianca: 75,
      alimentos: ["Arroz", "Feijão", "Frango grelhado", "Salada"],
    },
    {
      calorias: 380,
      proteinas: 28,
      carboidratos: 42,
      gorduras: 10,
      confianca: 70,
      alimentos: ["Arroz", "Feijão", "Ovo", "Legumes"],
    },
    {
      calorias: 520,
      proteinas: 42,
      carboidratos: 55,
      gorduras: 15,
      confianca: 80,
      alimentos: ["Arroz", "Feijão", "Carne moída", "Cenoura"],
    },
  ];

  // Retornar resultado aleatório
  return mockResults[Math.floor(Math.random() * mockResults.length)];
}

/**
 * Valida se a imagem é adequada para análise
 * @param imageData - Base64 ou URL da imagem
 * @returns true se válida, false caso contrário
 */
export function validateMealImage(imageData: string): boolean {
  // Validações básicas
  if (!imageData || imageData.length === 0) {
    return false;
  }

  // Verificar se é base64 válido ou URL
  const isBase64 = imageData.startsWith("data:image/");
  const isUrl = imageData.startsWith("http://") || imageData.startsWith("https://");

  return isBase64 || isUrl;
}
