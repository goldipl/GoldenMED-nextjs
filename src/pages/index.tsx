import ContactCta from "@/components/common/ContactCta";
import Seo from "@/components/common/Seo";
import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamSection from "@/components/home/TeamSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TipsSection from "@/components/home/TipsSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import WhyUsSection from "@/components/home/WhyUsSection";

const Home = () => {
  return (
    <>
      <Seo />
      <Hero />
      <WelcomeSection />
      <ServicesSection />
      <WhyUsSection />
      <TeamSection />
      <TestimonialsSection />
      <NewsSection />
      <TipsSection />
      <ContactCta />
    </>
  );
};

export default Home;
