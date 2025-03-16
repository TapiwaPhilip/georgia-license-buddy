
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import MainLayout from '@/layouts/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Process />
      <Services />
      <Pricing />
      <FAQ />
      <ContactForm />
    </MainLayout>
  );
};

export default Index;
