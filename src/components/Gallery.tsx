import * as React from "react";
import { Card, CardContent } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PageSection } from "./common/PageSection";

const galleryImageModules = import.meta.glob<{ default: string }>(
    "../assets/event_images/*",
    { eager: true },
);

const galleryImages = Object.values(galleryImageModules).map((module) => ({
    src: module.default,
    alt: "Event image",
}));

export default function Gallery() {
    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: true }),
    );

    return (
        <PageSection id="gallery" className="bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Gallery
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        A glimpse into the fun and excitement from our last
                        event.
                    </p>
                </div>
            </div>
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[plugin.current]}
                className="w-full max-w-4xl mx-auto mt-8"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {galleryImages.map((image, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card className="overflow-hidden">
                                    <CardContent className="p-0">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="aspect-[4/3] object-cover w-full rounded-lg transition-transform duration-500 hover:scale-105"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </PageSection>
    );
}
