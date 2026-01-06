/**
 * Banco de Dados de Alimentos - Loja Nutricional Levve
 * Produtos famosos brasileiros + alimentos genéricos
 */

export interface FoodProduct {
  id: string;
  nome: string;
  marca?: string;
  categoria: string;
  imagem: string;
  porcao: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
  fibras?: number;
  sodio?: number;
  codigoBarras?: string;
  popular?: boolean;
}

export const categorias = [
  { id: "todos", nome: "Todos", icon: "🍽️" },
  { id: "arroz-feijao", nome: "Arroz e Feijão", icon: "🍚" },
  { id: "carnes", nome: "Carnes", icon: "🍗" },
  { id: "ovos-laticinios", nome: "Ovos e Laticínios", icon: "🥚" },
  { id: "paes-massas", nome: "Pães e Massas", icon: "🍞" },
  { id: "legumes-verduras", nome: "Legumes e Verduras", icon: "🥬" },
  { id: "frutas", nome: "Frutas", icon: "🍎" },
  { id: "bebidas", nome: "Bebidas", icon: "🥤" },
  { id: "snacks", nome: "Snacks", icon: "🍿" },
];

export const foodDatabase: FoodProduct[] = [
  // ============================================
  // PRODUTOS FAMOSOS BRASILEIROS
  // ============================================
  
  // Bebidas
  {
    id: "coca-cola-350ml",
    nome: "Coca-Cola Lata",
    marca: "Coca-Cola",
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=400&fit=crop",
    porcao: "350ml",
    calorias: 147,
    proteinas: 0,
    carboidratos: 37,
    gorduras: 0,
    codigoBarras: "7894900011517",
    popular: true,
  },
  {
    id: "guarana-antarctica-350ml",
    nome: "Guaraná Antarctica Lata",
    marca: "Guaraná Antarctica",
    categoria: "bebidas",
    imagem: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop",
    porcao: "350ml",
    calorias: 144,
    proteinas: 0,
    carboidratos: 36,
    gorduras: 0,
    codigoBarras: "7894900010015",
    popular: true,
  },
  
  // Arroz e Feijão
  {
    id: "arroz-tio-joao",
    nome: "Arroz Branco Tipo 1",
    marca: "Tio João",
    categoria: "arroz-feijao",
    imagem: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    porcao: "100g cozido",
    calorias: 130,
    proteinas: 2.5,
    carboidratos: 28,
    gorduras: 0.3,
    fibras: 0.5,
    codigoBarras: "7896036090015",
    popular: true,
  },
  {
    id: "feijao-carioca-camil",
    nome: "Feijão Carioca",
    marca: "Camil",
    categoria: "arroz-feijao",
    imagem: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400&h=400&fit=crop",
    porcao: "100g cozido",
    calorias: 77,
    proteinas: 4.8,
    carboidratos: 14,
    gorduras: 0.5,
    fibras: 8.5,
    codigoBarras: "7896006710011",
    popular: true,
  },
  
  // Carnes
  {
    id: "peito-frango-sadia",
    nome: "Peito de Frango Congelado",
    marca: "Sadia",
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=400&fit=crop",
    porcao: "100g grelhado",
    calorias: 165,
    proteinas: 31,
    carboidratos: 0,
    gorduras: 3.6,
    codigoBarras: "7891515415013",
    popular: true,
  },
  {
    id: "linguica-toscana-perdigao",
    nome: "Linguiça Toscana",
    marca: "Perdigão",
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 300,
    proteinas: 15,
    carboidratos: 2,
    gorduras: 26,
    codigoBarras: "7891515415020",
    popular: true,
  },
  
  // Pães e Massas
  {
    id: "pao-forma-integral-pullman",
    nome: "Pão de Forma Integral",
    marca: "Pullman",
    categoria: "paes-massas",
    imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    porcao: "2 fatias (50g)",
    calorias: 120,
    proteinas: 5,
    carboidratos: 22,
    gorduras: 2,
    fibras: 3,
    codigoBarras: "7896003701012",
    popular: true,
  },
  {
    id: "macarrao-galo",
    nome: "Macarrão Espaguete",
    marca: "Galo",
    categoria: "paes-massas",
    imagem: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
    porcao: "100g cozido",
    calorias: 131,
    proteinas: 5,
    carboidratos: 25,
    gorduras: 0.9,
    fibras: 1.8,
    codigoBarras: "7896022200014",
    popular: true,
  },
  
  // Ovos e Laticínios
  {
    id: "leite-integral-italac",
    nome: "Leite Integral UHT",
    marca: "Italac",
    categoria: "ovos-laticinios",
    imagem: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=400&fit=crop",
    porcao: "200ml",
    calorias: 120,
    proteinas: 6,
    carboidratos: 9,
    gorduras: 6,
    codigoBarras: "7896034610011",
    popular: true,
  },
  {
    id: "iogurte-grego-danone",
    nome: "Iogurte Grego Natural",
    marca: "Danone",
    categoria: "ovos-laticinios",
    imagem: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 97,
    proteinas: 9,
    carboidratos: 4,
    gorduras: 5,
    codigoBarras: "7891025105015",
    popular: true,
  },
  
  // Snacks
  {
    id: "biscoito-maizena-marilan",
    nome: "Biscoito Maisena",
    marca: "Marilan",
    categoria: "snacks",
    imagem: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop",
    porcao: "30g (6 unidades)",
    calorias: 130,
    proteinas: 2,
    carboidratos: 22,
    gorduras: 4,
    codigoBarras: "7896003700015",
    popular: true,
  },
  
  // ============================================
  // ALIMENTOS GENÉRICOS (FOCO NO BRASILEIRO REAL)
  // ============================================
  
  // Arroz e Feijão Genéricos
  {
    id: "arroz-branco-cozido",
    nome: "Arroz Branco Cozido",
    categoria: "arroz-feijao",
    imagem: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 130,
    proteinas: 2.7,
    carboidratos: 28,
    gorduras: 0.3,
    fibras: 0.4,
    popular: true,
  },
  {
    id: "feijao-carioca-cozido",
    nome: "Feijão Carioca Cozido",
    categoria: "arroz-feijao",
    imagem: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 77,
    proteinas: 4.8,
    carboidratos: 14,
    gorduras: 0.5,
    fibras: 8.5,
    popular: true,
  },
  {
    id: "feijao-preto-cozido",
    nome: "Feijão Preto Cozido",
    categoria: "arroz-feijao",
    imagem: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 77,
    proteinas: 4.5,
    carboidratos: 14,
    gorduras: 0.5,
    fibras: 8.7,
    popular: true,
  },
  
  // Carnes Genéricas
  {
    id: "frango-grelhado",
    nome: "Peito de Frango Grelhado",
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 165,
    proteinas: 31,
    carboidratos: 0,
    gorduras: 3.6,
    popular: true,
  },
  {
    id: "carne-moida",
    nome: "Carne Moída (Patinho)",
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop",
    porcao: "100g cozida",
    calorias: 250,
    proteinas: 26,
    carboidratos: 0,
    gorduras: 17,
    popular: true,
  },
  {
    id: "bife-bovino",
    nome: "Bife Bovino Grelhado",
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 271,
    proteinas: 26,
    carboidratos: 0,
    gorduras: 19,
    popular: true,
  },
  {
    id: "peixe-tilapia",
    nome: "Tilápia Grelhada",
    categoria: "carnes",
    imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 96,
    proteinas: 20,
    carboidratos: 0,
    gorduras: 1.7,
    popular: true,
  },
  
  // Ovos e Laticínios Genéricos
  {
    id: "ovo-cozido",
    nome: "Ovo Cozido",
    categoria: "ovos-laticinios",
    imagem: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=400&fit=crop",
    porcao: "1 unidade (50g)",
    calorias: 78,
    proteinas: 6.3,
    carboidratos: 0.6,
    gorduras: 5.3,
    popular: true,
  },
  {
    id: "ovo-mexido",
    nome: "Ovo Mexido",
    categoria: "ovos-laticinios",
    imagem: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=400&fit=crop",
    porcao: "2 ovos (100g)",
    calorias: 155,
    proteinas: 13,
    carboidratos: 1.1,
    gorduras: 11,
    popular: true,
  },
  {
    id: "queijo-minas",
    nome: "Queijo Minas Frescal",
    categoria: "ovos-laticinios",
    imagem: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
    porcao: "30g (1 fatia)",
    calorias: 66,
    proteinas: 5.4,
    carboidratos: 1.2,
    gorduras: 4.5,
    popular: true,
  },
  {
    id: "leite-integral",
    nome: "Leite Integral",
    categoria: "ovos-laticinios",
    imagem: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    porcao: "200ml",
    calorias: 120,
    proteinas: 6,
    carboidratos: 9,
    gorduras: 6,
    popular: true,
  },
  
  // Pães e Massas Genéricos
  {
    id: "pao-frances",
    nome: "Pão Francês",
    categoria: "paes-massas",
    imagem: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop",
    porcao: "1 unidade (50g)",
    calorias: 135,
    proteinas: 4,
    carboidratos: 28,
    gorduras: 1,
    popular: true,
  },
  {
    id: "pao-integral",
    nome: "Pão Integral",
    categoria: "paes-massas",
    imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
    porcao: "2 fatias (50g)",
    calorias: 120,
    proteinas: 5,
    carboidratos: 22,
    gorduras: 2,
    fibras: 3,
    popular: true,
  },
  {
    id: "macarrao-cozido",
    nome: "Macarrão Cozido",
    categoria: "paes-massas",
    imagem: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 131,
    proteinas: 5,
    carboidratos: 25,
    gorduras: 0.9,
    popular: true,
  },
  {
    id: "tapioca",
    nome: "Tapioca Simples",
    categoria: "paes-massas",
    imagem: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop",
    porcao: "1 unidade (50g)",
    calorias: 70,
    proteinas: 0.1,
    carboidratos: 17,
    gorduras: 0.1,
    popular: true,
  },
  
  // Legumes e Verduras
  {
    id: "brocolis-cozido",
    nome: "Brócolis Cozido",
    categoria: "legumes-verduras",
    imagem: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 35,
    proteinas: 2.4,
    carboidratos: 7,
    gorduras: 0.4,
    fibras: 3.3,
    popular: true,
  },
  {
    id: "cenoura-cozida",
    nome: "Cenoura Cozida",
    categoria: "legumes-verduras",
    imagem: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 35,
    proteinas: 0.8,
    carboidratos: 8,
    gorduras: 0.2,
    fibras: 3,
    popular: true,
  },
  {
    id: "alface",
    nome: "Alface Crespa",
    categoria: "legumes-verduras",
    imagem: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 15,
    proteinas: 1.4,
    carboidratos: 2.9,
    gorduras: 0.2,
    fibras: 2.1,
    popular: true,
  },
  {
    id: "tomate",
    nome: "Tomate",
    categoria: "legumes-verduras",
    imagem: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 18,
    proteinas: 0.9,
    carboidratos: 3.9,
    gorduras: 0.2,
    fibras: 1.2,
    popular: true,
  },
  
  // Frutas
  {
    id: "banana",
    nome: "Banana Prata",
    categoria: "frutas",
    imagem: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    porcao: "1 unidade (100g)",
    calorias: 98,
    proteinas: 1.3,
    carboidratos: 26,
    gorduras: 0.1,
    fibras: 2,
    popular: true,
  },
  {
    id: "maca",
    nome: "Maçã",
    categoria: "frutas",
    imagem: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=400&fit=crop",
    porcao: "1 unidade (150g)",
    calorias: 78,
    proteinas: 0.4,
    carboidratos: 21,
    gorduras: 0.2,
    fibras: 3.6,
    popular: true,
  },
  {
    id: "laranja",
    nome: "Laranja",
    categoria: "frutas",
    imagem: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400&h=400&fit=crop",
    porcao: "1 unidade (150g)",
    calorias: 62,
    proteinas: 1.2,
    carboidratos: 16,
    gorduras: 0.2,
    fibras: 3.1,
    popular: true,
  },
  {
    id: "mamao",
    nome: "Mamão Papaya",
    categoria: "frutas",
    imagem: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=400&fit=crop",
    porcao: "100g",
    calorias: 43,
    proteinas: 0.5,
    carboidratos: 11,
    gorduras: 0.1,
    fibras: 1.8,
    popular: true,
  },
];

/**
 * Buscar produtos por termo de pesquisa
 */
export function searchProducts(query: string): FoodProduct[] {
  const lowerQuery = query.toLowerCase().trim();
  
  if (!lowerQuery) return foodDatabase.filter(p => p.popular);
  
  return foodDatabase.filter(product => {
    const matchNome = product.nome.toLowerCase().includes(lowerQuery);
    const matchMarca = product.marca?.toLowerCase().includes(lowerQuery);
    const matchCategoria = product.categoria.toLowerCase().includes(lowerQuery);
    
    return matchNome || matchMarca || matchCategoria;
  });
}

/**
 * Buscar produtos por categoria
 */
export function getProductsByCategory(categoryId: string): FoodProduct[] {
  if (categoryId === "todos") {
    return foodDatabase;
  }
  
  return foodDatabase.filter(p => p.categoria === categoryId);
}

/**
 * Buscar produto por código de barras
 */
export function getProductByBarcode(barcode: string): FoodProduct | null {
  return foodDatabase.find(p => p.codigoBarras === barcode) || null;
}

/**
 * Obter produtos populares
 */
export function getPopularProducts(): FoodProduct[] {
  return foodDatabase.filter(p => p.popular);
}

/**
 * Obter sugestões de produtos baseado em objetivo
 */
export function getSuggestedProducts(objetivo: "emagrecimento" | "ganho-massa" | "saude"): FoodProduct[] {
  switch (objetivo) {
    case "emagrecimento":
      // Priorizar baixas calorias e alto teor de proteínas
      return foodDatabase
        .filter(p => p.calorias < 150 && p.proteinas > 5)
        .slice(0, 10);
    
    case "ganho-massa":
      // Priorizar alto teor de proteínas
      return foodDatabase
        .filter(p => p.proteinas > 15)
        .slice(0, 10);
    
    case "saude":
      // Priorizar alimentos naturais e com fibras
      return foodDatabase
        .filter(p => !p.marca && (p.fibras || 0) > 2)
        .slice(0, 10);
    
    default:
      return getPopularProducts();
  }
}
