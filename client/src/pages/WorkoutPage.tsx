import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, RotateCcw, Camera, CameraOff, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WorkoutPage = () => {
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [pushupCount, setPushupCount] = useState(0);
  const [pullupCount, setPullupCount] = useState(0);
  const [currentExercise, setCurrentExercise] = useState("pushups");

  const handleStartWorkout = () => {
    setIsWorkoutActive(true);
    setIsCameraOn(true);
  };

  const handlePauseWorkout = () => {
    setIsWorkoutActive(false);
  };

  const handleResetWorkout = () => {
    setIsWorkoutActive(false);
    setPushupCount(0);
    setPullupCount(0);
    setIsCameraOn(false);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Workout Session</h1>
          <p className="text-muted-foreground text-lg">
            Let AI track your form and count your reps automatically
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Camera Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Camera Feed</span>
                  <Badge 
                    variant={isCameraOn ? "default" : "secondary"}
                    className={isCameraOn ? "bg-success" : ""}
                  >
                    {isCameraOn ? "Live" : "Offline"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  {isCameraOn ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-lg font-medium">Camera Feed Active</p>
                        <p className="text-sm text-muted-foreground">
                          Position yourself in front of the camera
                        </p>
                        {/* Pose tracking overlay */}
                        <div className="absolute inset-4 border-2 border-primary/50 rounded-lg">
                          <div className="absolute top-2 left-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                          <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                          <div className="absolute bottom-2 left-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                          <div className="absolute bottom-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <CameraOff className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium text-muted-foreground">Camera Offline</p>
                      <p className="text-sm text-muted-foreground">
                        Start a workout to enable camera tracking
                      </p>
                    </div>
                  )}
                </div>

                {/* Exercise Selection */}
                <div className="flex gap-2 mt-4">
                  <Button 
                    variant={currentExercise === "pushups" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentExercise("pushups")}
                  >
                    Push-ups
                  </Button>
                  <Button 
                    variant={currentExercise === "pullups" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentExercise("pullups")}
                  >
                    Pull-ups
                  </Button>
                  <Button 
                    variant={currentExercise === "squats" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentExercise("squats")}
                  >
                    Squats
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats & Controls */}
          <div className="space-y-6">
            {/* Rep Counters */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle>Rep Counter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-1">
                    {currentExercise === "pushups" ? pushupCount : pullupCount}
                  </div>
                  <p className="text-sm text-muted-foreground capitalize">
                    {currentExercise} completed
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{pushupCount}</div>
                    <p className="text-xs text-muted-foreground">Push-ups</p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-success">{pullupCount}</div>
                    <p className="text-xs text-muted-foreground">Pull-ups</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workout Controls */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle>Workout Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {!isWorkoutActive ? (
                  <Button 
                    variant="hero" 
                    className="w-full"
                    onClick={handleStartWorkout}
                  >
                    <Play className="w-4 h-4" />
                    Start Workout
                  </Button>
                ) : (
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={handlePauseWorkout}
                  >
                    <Pause className="w-4 h-4" />
                    Pause Workout
                  </Button>
                )}

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleResetWorkout}
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset Session
                </Button>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-medium mb-2">Session Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span>00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Calories:</span>
                      <span>0 kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Form Score:</span>
                      <span className="text-success">Excellent</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Feedback */}
            <Card className="bg-gradient-card border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  AI Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm">
                      <span className="font-medium text-accent">Great form!</span> Keep your core engaged and maintain a straight line from head to heels.
                    </p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm">
                      <span className="font-medium text-primary">Tip:</span> Focus on controlled movements for better muscle activation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;