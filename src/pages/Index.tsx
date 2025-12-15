import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import InteractiveSection from '@/components/InteractiveSection';
import ContactFooter from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesSection />
      <InteractiveSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
