import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/trivia-hero.jpg";
import logoImage from "@/assets/transparent-logo.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Meeting of the Minds Trivia Championship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center -mb-4 -mt-8">
            <div className="rounded-xl p-1">
              <img
                src={logoImage}
                alt="Meeting of the Minds Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          <div className="inline-block px-4 py-2 bg-accent/90 rounded-full mb-4">
            <p className="text-accent-foreground font-semibold">
              St. John's Annual Trivia Championships
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-background leading-tight">
            Meeting of the Minds
          </h1>

          <p className="text-2xl md:text-3xl text-background/90 font-medium">
            120 of St. John's sharpest minds but only one team can be victorious.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-background/90 text-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span className="font-medium">
                January 31st, 2026 • 7:00-10:00 PM
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-6 w-6" />
              <span className="font-medium">
                100 Signal Hill Rd, St. John's, NL A1C 5S7
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span className="font-medium">
                Spaces available for 20 teams of up to 6 players each
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-elevated"
              onClick={() => scrollToSection("register")}
            >
              Sign Up Your Team
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-6"
              onClick={() => scrollToSection("about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
