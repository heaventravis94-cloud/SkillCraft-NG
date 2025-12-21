"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, CookingPot, Wrench, Leaf, Wallet, FirstAidKit, Home, Scissors, Zap, Palette, Sprout, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { activities } from "@/data/activities";

const SkillLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Dynamically calculate counts for each category
  const getCategoryCount = (categoryName: string) => {
    return activities.filter(activity => activity.category === categoryName).length;
  };

  const categories = [
    {
      id: "life-skills",
      title: "Life & Independence Skills",
      icon: <Home className="h-6 w-6" />,
      count: getCategoryCount("Life Skills"),
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: "cooking",
      title: "Basic Cooking for Teens",
      icon: <CookingPot className="h-6 w-6" />,
      count: getCategoryCount("Cooking"),
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: "meal-prep",
      title: "Meal Prep Basics",
      icon: <BookOpen className="h-6 w-6" />,
      count: getCategoryCount("Meal Prep"),
      color: "bg-amber-100 text-amber-600"
    },
    {
      id: "laundry",
      title: "Laundry and Clothing Care",
      icon: <Scissors className="h-6 w-6" />,
      count: getCategoryCount("Laundry"),
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      id: "cleaning",
      title: "Cleaning and Organization",
      icon: <BookOpen className="h-6 w-6" />,
      count: getCategoryCount("Cleaning"),
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      id: "time-management",
      title: "Time Management",
      icon: <BookOpen className="h-6 w-6" />,
      count: getCategoryCount("Time Management"),
      color: "bg-violet-100 text-violet-600"
    },
    {
      id: "budgeting",
      title: "Budgeting Basics",
      icon: <Wallet className="h-6 w-6" />,
      count: getCategoryCount("Budgeting"),
      color: "bg-green-100 text-green-600"
    },
    {
      id: "first-aid",
      title: "Basic First Aid (Non-Medical)",
      icon: <FirstAidKit className="h-6 w-6" />,
      count: getCategoryCount("First Aid"),
      color: "bg-red-100 text-red-600"
    },
    {
      id: "diy",
      title: "DIY and Hands-On Skills",
      icon: <Wrench className="h-6 w-6" />,
      count: getCategoryCount("DIY"),
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: "creative",
      title: "Creative and Maker Skills",
      icon: <Palette className="h-6 w-6" />, // Changed icon
      count: getCategoryCount("Creative"),
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: "sustainability",
      title: "Sustainability and Outdoor Skills",
      icon: <Sprout className="h-6 w-6" />, // Changed icon
      count: getCategoryCount("Sustainability"),
      color: "bg-lime-100 text-lime-600"
    },
    {
      id: "future-ready",
      title: "Future Ready Skills",
      icon: <Rocket className="h-6 w-6" />, // Changed icon
      count: getCategoryCount("Future Ready"),
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const filteredCategories = categories.filter(category => 
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Skill Library</h1>
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
              placeholder="Search skills..."
              className="pl-10 py-6 bg-white/70 backdrop-blur-sm border-0 shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCategories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      {category.icon}
                    </div>
                    <Badge variant="secondary">{category.count} activities</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                  <Button variant="outline" className="w-full">
                    Explore Skills
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* All Activities Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-2 border-purple-200 hover:bg-purple-50">
            View All Activities
          </Button>
        </div>
      </main>
    </div>
  );
};

export default SkillLibrary;