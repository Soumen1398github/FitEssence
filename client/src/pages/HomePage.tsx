import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, MessageSquare, BarChart3, User, Play, Zap, Target, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Train Smarter with
              <span className="block bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                AI Pose Detection
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transform your workouts with real-time AI pose analysis. Count reps automatically, 
              get personalized nutrition plans, and track your fitness journey like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/workout">
                  <Play className="w-5 h-5" />
                  Start Workout
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Target className="w-5 h-5" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to
              <span className="text-primary"> Level Up</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets intuitive design to create the ultimate fitness companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Pose Detection</h3>
                <p className="text-muted-foreground">
                  Real-time tracking of push-ups, pull-ups, and more with computer vision technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Nutrition</h3>
                <p className="text-muted-foreground">
                  AI-powered meal planning based on your workouts, goals, and body metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-success/30 transition-colors">
                  <BarChart3 className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Progress Analytics</h3>
                <p className="text-muted-foreground">
                  Detailed insights and beautiful charts to track your fitness journey over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-warning/30 transition-colors">
                  <User className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal Profile</h3>
                <p className="text-muted-foreground">
                  Customize your experience with height, weight, age tracking and goal setting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.5%</div>
              <p className="text-muted-foreground">Pose Detection Accuracy</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50K+</div>
              <p className="text-muted-foreground">Workouts Tracked</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">24/7</div>
              <p className="text-muted-foreground">AI Fitness Coaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already training smarter with AI-powered fitness tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/login">
                <Zap className="w-5 h-5" />
                Get Started Free
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;