import React from 'react';
import { ShoppingBag, Star, Check } from 'lucide-react';

export interface ProductCardProps {
  name: string;
  price?: string;
  imageUrl?: string;
  description?: string;
  inStock?: boolean;
  rating?: number;
}

export function ProductCard({ name, price, imageUrl, description, inStock = true, rating }: ProductCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white shadow-sm p-4 flex flex-col justify-between">
      <div>
        <div className="aspect-[3/4] w-full rounded overflow-hidden mb-3 bg-zinc-100 relative flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-zinc-400 text-xs">No Image</div>
          )}
        </div>
        {rating && (
          <div className="flex items-center gap-0.5 mb-1.5">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} className={`w-3.5 h-3.5 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-300'}`} />
            ))}
          </div>
        )}
        <h3 className="font-semibold text-sm line-clamp-2 mb-1" style={{ color: '#337ab7' }}>{name}</h3>
        {description && <p className="text-xs text-zinc-500 line-clamp-2 mb-2">{description}</p>}
      </div>
      <div className="pt-3 border-t border-zinc-100 flex items-center justify-between mt-auto">
        <span className="text-base font-bold" style={{ color: '#468847' }}>{price || '£50.00'}</span>
        <button 
          className="px-3 py-1.5 text-white text-xs font-semibold rounded shadow-sm hover:opacity-90"
          style={{ backgroundColor: '#337ab7' }}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
}
