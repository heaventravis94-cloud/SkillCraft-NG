"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon, Clock } from "lucide-react";
import { activities } from "@/data/activities"; // Import the activities data
import { Link } from "react-router-dom"; // Import Link for navigation

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredActivities = activities.filter(activity => 
    activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-4">Search Activities</h1>
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by activity or category..."
              className="pl-10 py-6 bg-white/70 backdrop-blur-sm border-0 shadow-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {searchTerm ? (
          <>
            <p className="text-gray-600 mb-4">
              {filteredActivities.length} result{filteredActivities.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
            
            {filteredActivities.length > 0 ? (
              <div className="space-y-4">
                {filteredActivities.map((activity) => (
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
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-2">
                        <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" asChild>
                          <Link to={`/activity/${activity.id}`}>
                            Start Activity
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
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <SearchIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">No Results Found</h2>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <SearchIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Search Activities</h2>
            <p className="text-gray-600">
              Enter a keyword to find activities and skills
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchPage;