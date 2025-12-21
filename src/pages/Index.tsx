"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, BookOpen, TrendingUp, Star, Clock, ZapIcon } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Link } from "react-router-dom";
import { useFavorites } from "@/contexts/FavoritesContext"; // Import useFavorites
import { activities } from "@/data/activities"; // Import activities to get full activity objects

const Index = () => {
  const { isFavorite, toggleFavorite, favoriteActivityIds } = useFavorites(); // Use the favorites hook

  const [recentActivities] = useState([
    { id: 13, title: "Basic Pasta Cooking", category: "Cooking", progress: 60 },
    { id: 1, title: "Laundry Sorting Basics", category: "Life Skills", progress: 30 },
    { id: 26, title: "Stain Removal Techniques", category: "Laundry", progress: 80 }
  ]);

  const popularActivities = [
    { id: 41, title: "Income and Expense Tracking", category: "Budgeting", difficulty: "Beginner", time: "30 mins" },
    { id: 14, title: "Scrambled Eggs Perfectly", category: "Cooking", difficulty: "Beginner", time: "10 mins" },
    { id: 36, title: "Daily Schedule Planning", category: "Time Management", difficulty: "Beginner", time: "20 mins" },
    { id: 46, title: "CPR Basics", category: "First Aid", difficulty: "Intermediate", time: "60 mins" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SkillCraft NextGen
              </h1>
              <p className="text-sm text-gray-600">Learn real life skills, build confidence</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/favorites">
                  <Heart className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/progress">
                  <TrendingUp className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <section className="mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">Welcome to SkillCraft NextGen!</h2>
              <p className="text-gray-700 mb-4">
                Learn practical life skills at your own pace. No account needed - just start learning!
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">No Login Required</Badge>
                <Badge variant="secondary">Beginner Friendly</Badge>
                <Badge variant="secondary">Hands-On Learning</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Continue Learning */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Continue Learning
            </h2>
            <Button variant="link" className="text-purple-600" asChild>
              <Link to="/progress">
                View All
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentActivities.map((activity) => (
              <Card key={activity.id} className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                  <Badge variant="outline">{activity.category}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{activity.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                        style={{ width: `${activity.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                    <Link to={`/activity/${activity.id}`}>
                      Continue
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Explore Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/library">
              <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-semibold">Skill Library</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/search">
              <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Search className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-semibold">Search</h3>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/favorites">
              <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Heart className="h-8 w-8 mx-auto mb-2 text-pink-600" />
                  <h3 className="font-semibold">Favorites ({favoriteActivityIds.length})</h3> {/* Display favorite count */}
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/progress">
              <Card className="bg-gradient-to-br from-green-100 to-green-200 border-0 shadow-md hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <h3 className="font-semibold">Progress</h3>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Popular Activities */}
        <section>
          <h2 className="text-xl font-bold mb-4">Popular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularActivities.map((activity) => (
              <Card key={activity.id} className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{activity.title}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Badge variant="outline" className="mr-2">{activity.category}</Badge>
                        <Badge variant="secondary">{activity.difficulty}</Badge>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => toggleFavorite(activity.id)} // Use toggleFavorite from context
                    >
                      <ZapIcon className={`h-5 w-5 ${isFavorite(activity.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{activity.time}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                    <Link to={`/activity/${activity.id}`}>
                      Start Learning
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;