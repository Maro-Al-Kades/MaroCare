import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TopRated from "@/components/sections/TopRated";

const HomeRoute = () => {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Features />
      <About />
      <Services />
      <CTA />
      <TopRated />
      <FAQ />
    </div>
  );
};

export default HomeRoute;
