"use client";

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Heart, TrendingUp, Search } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-gray-200 z-50">
      <div className="grid grid-cols-5">
        <Link to="/">
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center rounded-none h-16 w-full ${
              isActive("/") ? "text-purple-600" : "text-gray-500"
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
        </Link>
        
        <Link to="/library">
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center rounded-none h-16 w-full ${
              isActive("/library") ? "text-purple-600" : "text-gray-500"
            }`}
          >
            <BookOpen className="h-5 w-5" />
            <span className="text-xs mt-1">Library</span>
          </Button>
        </Link>
        
        <Link to="/search">
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center rounded-none h-16 w-full ${
              isActive("/search") ? "text-purple-600" : "text-gray-500"
            }`}
          >
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Search</span>
          </Button>
        </Link>
        
        <Link to="/favorites">
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center rounded-none h-16 w-full ${
              isActive("/favorites") ? "text-purple-600" : "text-gray-500"
            }`}
          >
            <Heart className="h-5 w-5" />
            <span className="text-xs mt-1">Favorites</span>
          </Button>
        </Link>
        
        <Link to="/progress">
          <Button
            variant="ghost"
            className={`flex flex-col items-center justify-center rounded-none h-16 w-full ${
              isActive("/progress") ? "text-purple-600" : "text-gray-500"
            }`}
          >
            <TrendingUp className="h-5 w-5" />
            <span className="text-xs mt-1">Progress</span>
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;