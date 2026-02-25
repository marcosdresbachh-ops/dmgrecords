
import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Garantindo que PlaceHolderImages seja sempre um array, mesmo se o JSON falhar no carregamento
export const PlaceHolderImages: ImagePlaceholder[] = Array.isArray((data as any)?.placeholderImages) 
  ? (data as any).placeholderImages 
  : [];
