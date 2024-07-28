import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/home/Hero";
import TipsSection from "@/components/home/TipsSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import "@/sass/main.scss";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <WelcomeSection />
      <TipsSection />
      <Footer />
    </>
  );
};

export default Home;
