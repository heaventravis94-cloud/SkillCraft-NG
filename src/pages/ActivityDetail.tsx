"use client";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Star, Clock, Users, ShieldAlert, CheckCircle, Zap, ZapIcon } from "lucide-react";
import { activities } from "@/data/activities";

const ActivityDetail = () => {
  const { id } = useParams();
  const activityId = parseInt(id || "1");
  const activity = activities.find(a => a.id === activityId) || activities[0];
  
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(Array(activity.steps.length).fill(false));
  const [notes, setNotes] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleStep = (index: number) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[index] = !newCompletedSteps[index];
    setCompletedSteps(newCompletedSteps);
  };

  const completionPercentage = Math.round(
    (completedSteps.filter(Boolean).length / activity.steps.length) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{activity.title}</h1>
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
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <ZapIcon className={`h-6 w-6 ${isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {/* Progress */}
        <Card className="mb-6 bg-white/70 backdrop-blur-sm border-0 shadow-md">
          <CardContent className="p-4">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Activity Progress</span>
              <span className="font-bold">{completionPercentage}%</span>
            </div>
            <Progress value={completionPercentage} className="h-3" />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Supplies */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Supplies Needed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activity.supplies.map((supply, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                      <span>{supply}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Safety Notes */}
            {activity.safetyNotes && (
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <ShieldAlert className="h-5 w-5 mr-2" />
                    Safety Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{activity.safetyNotes}</p>
                </CardContent>
              </Card>
            )}

            {/* Steps */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle>Step-by-Step Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activity.steps.map((step, index) => (
                    <div key={index} className="flex items-start p-3 rounded-lg bg-gray-50">
                      <Checkbox
                        id={`step-${index}`}
                        className="mt-1 mr-3 h-5 w-5"
                        checked={completedSteps[index]}
                        onCheckedChange={() => toggleStep(index)}
                      />
                      <div className="flex-1">
                        <label 
                          htmlFor={`step-${index}`} 
                          className={`block text-sm font-medium ${completedSteps[index] ? "line-through text-gray-500" : "text-gray-900"}`}
                        >
                          Step {index + 1}
                        </label>
                        <p className={`mt-1 ${completedSteps[index] ? "text-gray-400" : "text-gray-700"}`}>
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle>Troubleshooting Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {activity.troubleshooting.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notes */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardHeader>
                <CardTitle>Your Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add your notes here..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[150px]"
                />
                <Button className="w-full mt-3">Save Notes</Button>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-md">
              <CardContent className="p-4 space-y-3">
                <Button 
                  className={`w-full ${completionPercentage === 100 ? "bg-green-500 hover:bg-green-600" : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"}`}
                  disabled={completionPercentage === 100}
                >
                  {completionPercentage === 100 ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Activity Completed!
                    </>
                  ) : (
                    "Mark Activity Complete"
                  )}
                </Button>
                <Button variant="outline" className="w-full">
                  Reset Progress
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivityDetail;