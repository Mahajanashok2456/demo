import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { PackagesSection } from '../components/PackagesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { AboutSection } from '../components/AboutSection';
import { FoundersSection } from '../components/FoundersSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <HeroSection />
      
      {/* Travel Packages */}
      <section id="packages">
        <PackagesSection />
      </section>
      
      {/* Why Choose Us */}
      <WhyChooseUsSection />
      
      {/* About Us */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* Founders */}
      <section id="founders">
        <FoundersSection />
      </section>
      
      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
