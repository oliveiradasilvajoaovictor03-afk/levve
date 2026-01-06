export type Language = "pt-BR" | "en" | "es" | "fr" | "de";

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Promise Global
  promise: {
    "pt-BR": "Emagrecimento simples e acessível com suporte diário por IA.",
    "en": "Simple, affordable weight loss with daily AI support.",
    "es": "Pérdida de peso simple y asequible con apoyo diario de IA.",
    "fr": "Perte de poids simple et abordable avec soutien quotidien par IA.",
    "de": "Einfacher, erschwinglicher Gewichtsverlust mit täglicher KI-Unterstützung.",
  },

  // Hero Section
  heroTitle: {
    "pt-BR": "Emagreça com planejamento inteligente, gastando pouco.",
    "en": "Lose weight with smart planning, spending less.",
    "es": "Pierde peso con planificación inteligente, gastando poco.",
    "fr": "Perdez du poids avec une planification intelligente, en dépensant moins.",
    "de": "Abnehmen mit intelligenter Planung, weniger ausgeben.",
  },

  heroSubtitle: {
    "pt-BR": "Acompanhamento diário por IA, plano alimentar acessível e foco em constância.",
    "en": "Daily AI support, affordable meal plan and focus on consistency.",
    "es": "Apoyo diario de IA, plan de comidas asequible y enfoque en la constancia.",
    "fr": "Soutien quotidien par IA, plan alimentaire abordable et accent sur la constance.",
    "de": "Tägliche KI-Unterstützung, erschwinglicher Essensplan und Fokus auf Beständigkeit.",
  },

  ctaStart: {
    "pt-BR": "Começar gratuitamente",
    "en": "Start for free",
    "es": "Comenzar gratis",
    "fr": "Commencer gratuitement",
    "de": "Kostenlos starten",
  },

  ctaPlans: {
    "pt-BR": "Ver planos",
    "en": "View plans",
    "es": "Ver planes",
    "fr": "Voir les plans",
    "de": "Pläne ansehen",
  },

  // Features
  featureRealResults: {
    "pt-BR": "Resultados reais",
    "en": "Real results",
    "es": "Resultados reales",
    "fr": "Résultats réels",
    "de": "Echte Ergebnisse",
  },

  featureAffordableFood: {
    "pt-BR": "Comida acessível",
    "en": "Affordable food",
    "es": "Comida asequible",
    "fr": "Nourriture abordable",
    "de": "Erschwingliches Essen",
  },

  featureAISupport: {
    "pt-BR": "IA que te entende",
    "en": "AI that understands you",
    "es": "IA que te entiende",
    "fr": "IA qui vous comprend",
    "de": "KI, die Sie versteht",
  },

  // Trust Badges
  noSignupFee: {
    "pt-BR": "Sem taxa de adesão",
    "en": "No signup fee",
    "es": "Sin tarifa de inscripción",
    "fr": "Pas de frais d'inscription",
    "de": "Keine Anmeldegebühr",
  },

  cancelAnytime: {
    "pt-BR": "Cancele quando quiser",
    "en": "Cancel anytime",
    "es": "Cancela cuando quieras",
    "fr": "Annulez à tout moment",
    "de": "Jederzeit kündbar",
  },

  realResults: {
    "pt-BR": "Resultados reais",
    "en": "Real results",
    "es": "Resultados reales",
    "fr": "Résultats réels",
    "de": "Echte Ergebnisse",
  },

  // Dashboard
  welcome: {
    "pt-BR": "Bem-vindo ao Levve!",
    "en": "Welcome to Levve!",
    "es": "¡Bienvenido a Levve!",
    "fr": "Bienvenue chez Levve!",
    "de": "Willkommen bei Levve!",
  },

  overview: {
    "pt-BR": "Visão Geral",
    "en": "Overview",
    "es": "Resumen",
    "fr": "Aperçu",
    "de": "Übersicht",
  },

  nutrition: {
    "pt-BR": "Alimentação",
    "en": "Nutrition",
    "es": "Alimentación",
    "fr": "Nutrition",
    "de": "Ernährung",
  },

  mealPrep: {
    "pt-BR": "Marmitas",
    "en": "Meal Prep",
    "es": "Preparación de comidas",
    "fr": "Préparation de repas",
    "de": "Essensvorbereitung",
  },

  calories: {
    "pt-BR": "Calorias",
    "en": "Calories",
    "es": "Calorías",
    "fr": "Calories",
    "de": "Kalorien",
  },

  progress: {
    "pt-BR": "Progresso",
    "en": "Progress",
    "es": "Progreso",
    "fr": "Progrès",
    "de": "Fortschritt",
  },

  aiNutritionist: {
    "pt-BR": "IA Nutricional",
    "en": "AI Nutritionist",
    "es": "IA Nutricional",
    "fr": "IA Nutritionniste",
    "de": "KI-Ernährungsberater",
  },
};

export function detectBrowserLanguage(): Language {
  if (typeof window === "undefined") return "pt-BR";
  
  const browserLang = navigator.language;
  
  if (browserLang.startsWith("pt")) return "pt-BR";
  if (browserLang.startsWith("en")) return "en";
  if (browserLang.startsWith("es")) return "es";
  if (browserLang.startsWith("fr")) return "fr";
  if (browserLang.startsWith("de")) return "de";
  
  return "pt-BR"; // Default
}

export function translate(key: string, language: Language): string {
  return translations[key]?.[language] || translations[key]?.["pt-BR"] || key;
}
