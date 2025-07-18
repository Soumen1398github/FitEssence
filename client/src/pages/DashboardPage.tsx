import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Target, 
  Calendar, 
  TrendingUp, 
  Flame, 
  Clock,
  Award,
  Zap
} from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Track your progress and stay motivated
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Workouts</p>
                  <p className="text-3xl font-bold text-primary">47</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-accent/20 hover:shadow-accent-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Calories Burned</p>
                  <p className="text-3xl font-bold text-accent">2,847</p>
                  <p className="text-xs text-success flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +8% this week
                  </p>
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Flame className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-success/20 hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-3xl font-bold text-success">12</p>
                  <p className="text-xs text-muted-foreground mt-1">days in a row</p>
                </div>
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-warning/20 hover:shadow-elevated transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Duration</p>
                  <p className="text-3xl font-bold text-warning">24</p>
                  <p className="text-xs text-muted-foreground mt-1">minutes</p>
                </div>
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Weekly Progress */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Your workout consistency this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Mock chart area */}
                  <div className="h-48 bg-muted/50 rounded-lg flex items-center justify-center border border-border">
                    <div className="text-center">
                      <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Chart coming soon</p>
                      <p className="text-xs text-muted-foreground">Will show workout frequency & performance</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                      <div key={day} className="text-center">
                        <p className="text-xs text-muted-foreground mb-2">{day}</p>
                        <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center ${
                          index < 5 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          {index < 5 && <div className="w-2 h-2 bg-current rounded-full" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Workouts */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
                <CardDescription>Your latest training sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Today", exercise: "Push-ups & Pull-ups", reps: "25 + 15", duration: "18 min", calories: 142 },
                    { date: "Yesterday", exercise: "Full Body Workout", reps: "45 total", duration: "32 min", calories: 198 },
                    { date: "2 days ago", exercise: "Upper Body Focus", reps: "38 + 22", duration: "28 min", calories: 175 },
                  ].map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Activity className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{workout.exercise}</p>
                          <p className="text-sm text-muted-foreground">{workout.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{workout.reps} reps</p>
                        <p className="text-xs text-muted-foreground">{workout.duration} • {workout.calories} cal</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Goals Progress */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Monthly Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Workouts</span>
                    <span>12/20</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Calories</span>
                    <span>2.8k/4k</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Streak</span>
                    <span>12/30 days</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>

                <Button variant="outline" className="w-full mt-4">
                  <Target className="w-4 h-4" />
                  Update Goals
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-gradient-card border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Flame className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">10-Day Streak!</p>
                    <p className="text-xs text-muted-foreground">Unlocked yesterday</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">50 Push-ups</p>
                    <p className="text-xs text-muted-foreground">Personal record!</p>
                  </div>
                </div>

                <Button variant="ghost" className="w-full text-sm">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="hero" className="w-full">
                  <Activity className="w-4 h-4" />
                  Start Workout
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="w-4 h-4" />
                  Schedule Session
                </Button>
                <Button variant="outline" className="w-full">
                  <Target className="w-4 h-4" />
                  Set New Goal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;