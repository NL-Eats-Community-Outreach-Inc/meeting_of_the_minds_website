import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Heart, Sparkles } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Elite Competition",
      description: "The inaugural St. John's city-wide trivia championship",
    },
    {
      icon: Heart,
      title: "For a Great Cause",
      description: "All net profits support NL Eats",
    },
    {
      icon: Sparkles,
      title: "Multimedia Rounds",
      description: "Curated audio, video, and puzzle challenges",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            About the Event
          </h2>
          <p className="text-xl text-card-foreground/80 leading-relaxed">
            Meeting of the Minds brings together corporate teams and the local trivia
            community for an incredible evening of charity, community, and competition.
            This is the inaugural St. John's city-wide trivia championship,
            featuring expertly hosted rounds that blend pop culture, intellectual
            challenges, and local knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-border bg-background hover:shadow-elevated transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Presented by long-time local trivia host Michael Pickard
              </h3>
              <p className="text-lg text-primary-foreground/90">
                Featuring expertly crafted multimedia trivia rounds with a perfect
                blend of pop culture, intellectual challenges, and local knowledge
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
