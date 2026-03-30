import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PostEvent } from "@/components/PostEvent";
import { Prizes } from "@/components/Prizes";
import { Sponsors } from "@/components/Sponsors";
import { NLEats } from "@/components/NLEats";
import { Hosts } from "@/components/Hosts";
import { Volunteer } from "@/components/Volunteer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <PostEvent />
        <Sponsors />
        <NLEats />
        <Volunteer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
