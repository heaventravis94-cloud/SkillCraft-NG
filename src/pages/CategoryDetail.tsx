"use client";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Home, CookingPot, Wrench, Leaf, Wallet, HeartPulse, Scissors, Zap, Search, ZapIcon, Palette, Sprout, Rocket, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import { activities } from "@/data/activities";
import { Input } from "@/components/ui/input";
import { useFavorites } from "@/contexts/FavoritesContext";

const CategoryDetail = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const { isFavorite, toggleFavorite, favoriteActivityIds } = useFavorites();

  // Map category IDs to titles and icons
  const categoryInfo: Record<string, { title: string; icon: JSX.Element; color: string }> = {
    "life-skills": {
      title: "Life & Independence Skills",
      icon: <Home className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    "cooking": {
      title: "Basic Cooking for Teens",
      icon: <CookingPot className="h-6 w-6" />,
      color: "bg-orange-100 text-orange-600"
    },
    "meal-prep": {
      title: "Meal Prep Basics",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-600"
    },
    "laundry": {
      title: "Laundry and Clothing Care",
      icon: <Scissors className="h-6 w-6" />,
      color: "bg-cyan-100 text-cyan-600"
    },
    "cleaning": {
      title: "Cleaning and Organization",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    "time-management": {
      title: "Time Management",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-violet-100 text-violet-600"
    },
    "budgeting": {
      title: "Budgeting Basics",
      icon: <Wallet className="h-6 w-6" />,
      color: "bg-green-100 text-green-600"
    },
    "first-aid": {
      title: "Basic First Aid (Non-Medical)",
      icon: <HeartPulse className="h-6 w-6" />,
      color: "bg-red-100 text-red-600"
    },
    "diy": {
      title: "DIY and Hands-On Skills",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600"
    },
    "creative": {
      title: "Creative and Maker Skills",
      icon: <Palette className="h-6 w-6" />,
      color: "bg-pink-100 text-pink-600"
    },
    "sustainability": {
      title: "Sustainability and Outdoor Skills",
      icon: <Sprout className="h-6 w-6" />,
      color: "bg-lime-100 text-lime-600"
    },
    "future-ready": {
      title: "Future Ready Skills",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-indigo-100 text-indigo-600"
    },
    "tech-digital-skills": {
      title: "Tech & Digital Skills",
      icon: <Laptop className="h-6 w-6" />,
      color: "bg-gray-100 text-gray-600"
    }
  };

  // Map category IDs to activity categories
  const categoryMap: Record<string, string> = {
    "life-skills": "Life Skills",
    "cooking": "Cooking",
    "meal-prep": "Meal Prep",
    "laundry": "Laundry",
    "cleaning": "Cleaning",
    "time-management": "Time Management",
    "budgeting": "Budgeting",
    "first-aid": "First Aid",
    "diy": "DIY",
    "creative": "Creative",
    "sustainability": "Sustainability",
    "future-ready": "Future Ready",
    "tech-digital-skills": "Tech & Digital Skills"
  };

  const categoryTitle = categoryInfo[id || ""]?.title || "Category";
  const categoryIcon = categoryInfo[id || ""]?.icon || <BookOpen className="h-6 w-6" />;
  const categoryColor = categoryInfo[id || ""]?.color || "bg-gray-100 text-gray-600";
  
  const categoryActivities = activities.filter(activity => 
    activity.category === categoryMap[id || ""]
  );

  const filteredActivities = categoryActivities.filter(activity => 
    activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mock progress data - removed to ensure clean state
  const activitiesProgress: Record<number, number> = {}; // Empty object for no progress

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <div className={`p-3 rounded-lg mr-4 ${categoryColor}`}>
              {categoryIcon}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{categoryTitle}</h1>
              <p className="text-gray-600">{filteredActivities.length} activities available</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search activities..."
              className="pl-10 py-6 bg-white/70 backdrop-blur-sm border-0 shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{filteredActivities.length}</div>
              <div className="text-sm text-gray-600">Total Activities</div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">
                {Object.values(activitiesProgress).filter(p => p === 100).length}
              </div>
              <div className="text-sm text-gray-600">Completed</div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {Object.values(activitiesProgress).filter(p => p > 0 && p < 100).length}
              </div>
              <div className="text-sm text-gray-600">In Progress</div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-pink-600">{favoriteActivityIds.length}</div> {/* Display favorite count */}
              <div className="text-sm text-gray-600">Favorites</div>
            </CardContent>
          </Card>
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {filteredActivities.map((activity) => {
            const progress = activitiesProgress[activity.id] || 0;
            return (
              <Card key={activity.id} className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{activity.title}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="mr-2">{activity.difficulty}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => toggleFavorite(activity.id)}
                    >
                      <ZapIcon className={`h-5 w-5 ${isFavorite(activity.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                      <Link to={`/activity/${activity.id}`}>
                        {progress > 0 ? "Continue" : "Start Activity"}
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to={`/activity/${activity.id}`}>
                        Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CategoryDetail;