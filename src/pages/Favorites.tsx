"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { activities } from "@/data/activities";
import { useFavorites } from "@/contexts/FavoritesContext";

const Favorites = () => {
  const { favoriteActivityIds, toggleFavorite } = useFavorites();

  // Filter activities based on favoriteActivityIds
  const favoritedActivities = activities.filter(activity => 
    favoriteActivityIds.includes(activity.id)
  );

  // Mock progress data - removed to ensure clean state
  const activitiesProgress: Record<number, number> = {}; // Empty object for no progress

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Star className="h-6 w-6 text-yellow-500 mr-2" />
            <h1 className="text-2xl font-bold">Your Favorites</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {favoritedActivities.length === 0 ? (
          <div className="text-center py-12">
            <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">No Favorites Yet</h2>
            <p className="text-gray-600 mb-4">
              Start exploring activities and save your favorites!
            </p>
            <Button asChild>
              <Link to="/library">Explore Activities</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">{favoritedActivities.length} saved activities</p>
            </div>
            
            {favoritedActivities.map((activity) => {
              const progress = activitiesProgress[activity.id] || 0;
              return (
                <Card key={activity.id} className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{activity.title}</CardTitle>
                        <div className="flex items-center mt-1">
                          <Badge variant="outline" className="mr-2">{activity.category}</Badge>
                          <Badge variant="secondary" className="mr-2">{activity.difficulty}</Badge>
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
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
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
        )}
      </main>
    </div>
  );
};

export default Favorites;