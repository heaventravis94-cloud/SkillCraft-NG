"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, BookOpen, CheckCircle, Clock } from "lucide-react";
import { activities } from "@/data/activities"; // Import activities data
import { clearAppData } from "@/lib/utils"; // Import the new utility function
import { useFavorites } from "@/contexts/FavoritesContext"; // Import useFavorites to trigger re-render

const ProgressOverview = () => {
  const { toggleFavorite } = useFavorites(); // Use useFavorites to trigger re-render after clearing

  const [stats] = useState({
    totalActivities: activities.length, 
    completedActivities: 0, // Reset to 0
    inProgressActivities: 0, // Reset to 0
    totalHours: 0, // Reset to 0
    streak: 0 // Reset to 0
  });

  const categories = [
    { name: "Life Skills", completed: 0, total: activities.filter(a => a.category === "Life Skills").length, color: "bg-blue-500" },
    { name: "Cooking", completed: 0, total: activities.filter(a => a.category === "Cooking").length, color: "bg-orange-500" },
    { name: "DIY", completed: 0, total: activities.filter(a => a.category === "DIY").length, color: "bg-purple-500" },
    { name: "Creative", completed: 0, total: activities.filter(a => a.category === "Creative").length, color: "bg-pink-500" },
    { name: "Sustainability", completed: 0, total: activities.filter(a => a.category === "Sustainability").length, color: "bg-green-500" },
    { name: "Future Ready", completed: 0, total: activities.filter(a => a.category === "Future Ready").length, color: "bg-indigo-500" }
  ];

  const recentActivities: any[] = []; // Set to empty array

  const handleClearProgress = () => {
    clearAppData();
    // Force a re-render of components that depend on favorites
    // by toggling a non-existent favorite or similar mechanism if needed.
    // For now, a refresh will show the updated state.
    window.location.reload(); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
              <h1 className="text-2xl font-bold">Your Progress</h1>
            </div>
            <Button variant="destructive" onClick={handleClearProgress}>
              Clear All Progress
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.totalActivities}</div>
              <div className="text-sm text-gray-600">Total Activities</div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.completedActivities}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.inProgressActivities}</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.totalHours}h</div>
              <div className="text-sm text-gray-600">Learning Time</div>
            </CardContent>
          </Card>
        </div>

        {/* Progress by Category */}
        <Card className="mb-6 bg-white/70 backdrop-blur-sm border-0 shadow-md">
          <CardHeader>
            <CardTitle>Progress by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories.map((category, index) => {
                const percentage = Math.round((category.completed / category.total) * 100);
                return (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm text-gray-500">
                        {category.completed}/{category.total}
                      </span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivities.length === 0 ? (
              <div className="text-center py-6 text-gray-500">No recent activities to display.</div>
            ) : (
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center p-3 rounded-lg bg-gray-50">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{activity.title}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Badge variant="outline" className="mr-2 text-xs">
                          {activity.category}
                        </Badge>
                        <span>{activity.date}</span>
                        <span className="mx-1">•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProgressOverview;