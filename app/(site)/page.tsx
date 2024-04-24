import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Jellies AI",
  description: "An Startup for tech solution",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Services />
      {/* <Projects /> */}
      <About />
      {/* <FeaturesTab /> */}
      <FunFact />
      <Integration />
      <CTA />
      <Team />
      <FAQ />
      <Testimonial />
      <Contact />
      {/* <Pricing /> */}
      <Blog />
    </main>
  );
}
