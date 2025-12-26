import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SkillLibrary from "./pages/SkillLibrary";
import CategoryDetail from "./pages/CategoryDetail";
import ActivityDetail from "./pages/ActivityDetail";
import Favorites from "./pages/Favorites";
import ProgressOverview from "./pages/Progress";
import SearchPage from "./pages/Search";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import { FavoritesProvider } from "./contexts/FavoritesContext"; // Import FavoritesProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <FavoritesProvider> {/* Wrap with FavoritesProvider */}
          <div className="pb-16">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/library" element={<SkillLibrary />} />
              <Route path="/category/:id" element={<CategoryDetail />} />
              <Route path="/activity/:id" element={<ActivityDetail />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/progress" element={<ProgressOverview />} />
              <Route path="/search" element={<SearchPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Navigation />
        </FavoritesProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;