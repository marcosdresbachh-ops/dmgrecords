import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Exportação robusta para garantir que PlaceHolderImages nunca seja undefined
export const PlaceHolderImages: ImagePlaceholder[] = (data as any)?.placeholderImages || [];
