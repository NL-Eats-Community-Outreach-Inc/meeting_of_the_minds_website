import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import Gallery from "@/components/Gallery";


import { Sponsors } from "@/components/Sponsors";
import { Registration } from "@/components/Registration";
import { Schedule } from "@/components/Schedule";
import { NLEats } from "@/components/NLEats";
import { Volunteer } from "@/components/Volunteer";
import { Footer } from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <About />
                <Gallery />
                <Registration />
                <Sponsors />
                <NLEats />
                <Schedule />
                <Volunteer />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
