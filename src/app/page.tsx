import HeroSection from "@/components/HeroSection";
import AnalyticsPreview from "@/components/AnalyticsPreview";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col">
      <HeroSection />
      <AnalyticsPreview />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
