"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, BookOpen, CheckCircle, Clock } from "lucide-react";
import { activities } from "@/data/activities"; // Import activities data

const ProgressOverview = () => {
  const [stats] = useState({
    totalActivities: activities.length, // Dynamically get total activities
    completedActivities: 12, // Mock data for now
    inProgressActivities: 8, // Mock data for now
    totalHours: 24, // Mock data for now
    streak: 7 // Mock data for now
  });

  const categories = [
    { name: "Life Skills", completed: 5, total: activities.filter(a => a.category === "Life Skills").length, color: "bg-blue-500" },
    { name: "Cooking", completed: 3, total: activities.filter(a => a.category === "Cooking").length, color: "bg-orange-500" },
    { name: "DIY", completed: 2, total: activities.filter(a => a.category === "DIY").length, color: "bg-purple-500" },
    { name: "Creative", completed: 1, total: activities.filter(a => a.category === "Creative").length, color: "bg-pink-500" },
    { name: "Sustainability", completed: 1, total: activities.filter(a => a.category === "Sustainability").length, color: "bg-green-500" },
    { name: "Future Ready", completed: 1, total: activities.filter(a => a.category === "Future Ready").length, color: "bg-indigo-500" }
  ];

  const recentActivities = [
    { id: 1, title: "Basic Pasta Cooking", category: "Cooking", date: "2 days ago", time: "20 mins" },
    { id: 2, title: "Laundry Sorting Basics", category: "Life Skills", date: "3 days ago", time: "15 mins" },
    { id: 3, title: "Simple Wood Cutting", category: "DIY", date: "1 week ago", time: "45 mins" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
            <h1 className="text-2xl font-bold">Your Progress</h1>
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
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ProgressOverview;