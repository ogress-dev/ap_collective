import Development from './(home)/components/Development';
import DevelopmentProcess from './(home)/components/DevelopmentProcess';
import Footer from './(home)/components/Footer';
import HeroSection from './(home)/components/HeroSection';
import MaterialSourcing from './(home)/components/MaterialSourcing';
import PhilosophySection from './(home)/components/PhilosophySection';
import Production from './(home)/components/Production';
import ProductionProcess from './(home)/components/ProductionProcess';
import Sourcing from './(home)/components/Sourcing';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <Sourcing />
      <MaterialSourcing />
      <Development />
      <DevelopmentProcess/>
      <Production />
      <ProductionProcess />
      <Footer />
    </>
  );
}
