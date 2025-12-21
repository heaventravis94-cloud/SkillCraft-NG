"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { activities } from '@/data/activities'; // Assuming activities data is available

interface FavoritesContextType {
  favoriteActivityIds: number[];
  toggleFavorite: (activityId: number) => void;
  isFavorite: (activityId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteActivityIds, setFavoriteActivityIds] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('favoriteActivityIds');
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favoriteActivityIds', JSON.stringify(favoriteActivityIds));
    }
  }, [favoriteActivityIds]);

  const toggleFavorite = (activityId: number) => {
    setFavoriteActivityIds((prevIds) => {
      if (prevIds.includes(activityId)) {
        return prevIds.filter((id) => id !== activityId);
      } else {
        return [...prevIds, activityId];
      }
    });
  };

  const isFavorite = (activityId: number) => {
    return favoriteActivityIds.includes(activityId);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteActivityIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};