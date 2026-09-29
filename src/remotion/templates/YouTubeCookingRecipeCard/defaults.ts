import type { VideoContentProps } from '@/remotion/schema';

export interface YouTubeCookingRecipeCardProps extends VideoContentProps {
  recipeName?: string;
  prepTime?: string;
  servings?: string;
  ingredientsList?: string[];
}

export const youtubeCookingRecipeCardDefaultContent: YouTubeCookingRecipeCardProps = {
  brand: {
    name: 'GOURMET KITCHEN 🍳',
    primaryColor: '#F97316',
    accentColor: '#84CC16',
  },
  product: {
    name: 'Creamy Garlic Butter Tuscan Salmon',
    description: 'Pan-seared salmon bathed in a rich garlic parmesan cream sauce with sun-dried tomatoes.',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop',
  },
  cta: {
    text: 'FULL RECIPE & MEASUREMENTS IN DESCRIPTION 📖',
    subtext: 'Subscribe for New Recipes Every Sunday!',
  },
  recipeName: 'CREAMY TUSCAN SALMON',
  prepTime: '20 MINS PREP',
  servings: '4 SERVINGS',
  ingredientsList: [
    '4 Fresh Salmon Filets',
    '3 Cloves Minced Garlic',
    '1 Cup Heavy Cream',
    '1/2 Cup Sun-Dried Tomatoes & Spinach',
  ],
};
