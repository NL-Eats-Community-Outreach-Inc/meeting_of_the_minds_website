// Post Event page component for Meeting of the Minds website. Replaces Registration section for the time being to keep the website relevant, and will be updated with a new registration section when the next event is announced. Registration section kept completely intact for ease of use down the road.

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Gift, Heart, ShoppingCart } from "lucide-react";

export const PostEvent = () => {
    const benefits = [
        "Full championship admission",
        "Bar service",
        "Chance to win a grand prize of $1,000 plus an award for each team member",
        "Brainiac side game during first intermission for more prizes",
        "Support NL Eats local charity",
        "Complimentary team photo",
        "Access to side games and contests",
    ];

    const handleRegister = () => {
        // Redirect to shopify website
        window.location.href =
            "https://shop.meetingofthemindstrivia.com/products/tickets";
    };

    return (
        <section id="register" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        The Minds Have Spoken
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Meeting of the Minds 2026 is officially in the books
                    </p>
                </div>

                <div className="mt-16 max-w-2xl mx-auto">
                    <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-bold mb-4"></h3>
                            <p className="text-lg text-primary-foreground/90 mb-6">
                                St. John's showed up, and showed just how much
                                this community cares. From the first round to
                                the final tiebreaker, this year's trivia
                                championships were everything we hoped for and
                                more — great teams, tough questions, and an
                                incredible amount of goodwill raised for food
                                security right here at home. Thank you to every
                                team, sponsor, and supporter who made it happen.
                                Stay tuned — the next chapter is already in the
                                works.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12"></div>
            </div>
        </section>
    );
};
