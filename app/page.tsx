import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { HowItWorks } from "@/components/site/how-it-works";
import { Features } from "@/components/site/features";
import { Benefits } from "@/components/site/benefits";
import { Specs } from "@/components/site/specs";
import { Testimonials } from "@/components/site/testimonials";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Benefits />
        <Specs />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
