import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram, Users } from "lucide-react";

export const Volunteer = () => {
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      handle: "@MeetingOfMindsNL",
    },
    {
      name: "Facebook",
      icon: Facebook,
      handle: "/MeetingOfMindsNL",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@meetingofmindsnl",
    },
  ];

  return (
    <section id="media" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
            Interested in Volunteering?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">


          {/* Volunteer CTA */}
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
            <CardContent className="p-8 text-center">
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Help make this event a success to help people in need!
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6">
                To join, all you need to do is send an email to freddie.pike@nleats.com expressing your interest!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
