import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Send, 
  Apple, 
  Target, 
  Zap, 
  Clock,
  ChefHat,
  Sparkles
} from "lucide-react";

const NutritionPage = () => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage("");
    }, 2000);
  };

  const mockMessages = [
    {
      type: "assistant",
      content: "Hi! I'm your AI nutrition coach. Based on your recent workout (25 push-ups, 15 pull-ups, 142 calories burned), I can help you plan the perfect meals to fuel your fitness goals. What would you like to know?",
      timestamp: "2 minutes ago"
    },
    {
      type: "user", 
      content: "What should I eat for post-workout recovery?",
      timestamp: "1 minute ago"
    },
    {
      type: "assistant",
      content: "Great question! For optimal recovery after your strength training, I recommend: \n\n🥗 **Immediate (0-30 min):** Greek yogurt with berries and honey\n🍗 **Meal (1-2 hours):** Grilled chicken with quinoa and roasted vegetables\n💧 **Hydration:** 16-20oz water with a pinch of sea salt\n\nThis combination provides 25g protein and complex carbs to replenish glycogen stores. Would you like a specific recipe?",
      timestamp: "Just now"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">AI Nutrition Coach</h1>
          <p className="text-muted-foreground text-lg">
            Get personalized meal plans based on your workouts and goals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-primary/20 h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Nutrition Chat
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Powered
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Ask me anything about nutrition, meal planning, or dietary advice
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {mockMessages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] p-4 rounded-lg ${
                            msg.type === 'user'
                              ? 'bg-primary text-primary-foreground ml-4'
                              : 'bg-muted/50 border border-border mr-4'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{msg.content}</p>
                          <p className={`text-xs mt-2 ${
                            msg.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] p-4 rounded-lg bg-muted/50 border border-border mr-4">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                            <span className="text-sm text-muted-foreground">AI is thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input */}
                <div className="flex gap-2 mt-4">
                  <Input
                    placeholder="Ask about nutrition, meal plans, or dietary advice..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    disabled={isLoading}
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    disabled={!message.trim() || isLoading}
                    variant="hero"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                {/* Quick Questions */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setMessage("What should I eat before my workout?")}
                  >
                    Pre-workout meal
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMessage("Create a high-protein meal plan")}
                  >
                    High-protein plan
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setMessage("How many calories should I eat daily?")}
                  >
                    Daily calories
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Summary */}
            <Card className="bg-gradient-card border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="w-5 h-5" />
                  Today's Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-2xl font-bold text-primary">1,847</div>
                    <p className="text-xs text-muted-foreground">Calories consumed</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-2xl font-bold text-accent">142</div>
                    <p className="text-xs text-muted-foreground">Calories burned</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Protein</span>
                    <span className="text-sm font-medium">85g / 120g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Carbs</span>
                    <span className="text-sm font-medium">142g / 200g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Fat</span>
                    <span className="text-sm font-medium">62g / 80g</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Meals */}
            <Card className="bg-gradient-card border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  Recommended Today
                </CardTitle>
                <CardDescription>
                  Based on your workout and goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Lunch (1 PM)</span>
                    </div>
                    <p className="text-sm">Grilled salmon with quinoa salad</p>
                    <p className="text-xs text-muted-foreground">High protein for recovery</p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Snack (4 PM)</span>
                    </div>
                    <p className="text-sm">Greek yogurt with almonds</p>
                    <p className="text-xs text-muted-foreground">Pre-workout fuel</p>
                  </div>

                  <div className="p-3 bg-muted/30 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium">Dinner (7 PM)</span>
                    </div>
                    <p className="text-sm">Chicken stir-fry with brown rice</p>
                    <p className="text-xs text-muted-foreground">Balanced macros</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Target className="w-4 h-4" />
                  Get Full Meal Plan
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-card border-success/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Nutrition Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Weekly average</span>
                  <span className="text-sm font-medium">1,950 cal/day</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Protein goal met</span>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                    5/7 days
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Hydration</span>
                  <span className="text-sm font-medium">2.1L / 2.5L</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Meal timing</span>
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Excellent
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;