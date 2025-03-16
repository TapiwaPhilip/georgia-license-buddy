
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView, getAnimationClass } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import MainLayout from '@/layouts/MainLayout';

const ServicesPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  const services = [
    {
      title: "All-Inclusive Package",
      description: "Our comprehensive solution that takes care of everything from the moment you decide to get a Georgian driving license.",
      features: [
        "Round-trip flights from any European city",
        "3-night accommodation in a quality hotel",
        "Airport pickup and drop-off",
        "All local transportation in Georgia",
        "Document translation services",
        "Scheduling all necessary appointments",
        "Personal assistant throughout the process",
        "Vision test and written exam preparation",
        "24/7 support during your stay",
        "Guidance on local attractions and dining"
      ],
      price: "€1,499",
      highlight: true
    },
    {
      title: "Essential Package",
      description: "Perfect for those who prefer to arrange their own flights to Georgia but want assistance with the rest of the process.",
      features: [
        "3-night accommodation in a quality hotel",
        "Airport pickup and drop-off",
        "All local transportation in Georgia",
        "Document translation services",
        "Scheduling all necessary appointments",
        "Personal assistant throughout the process",
        "Vision test and written exam preparation",
        "24/7 support during your stay"
      ],
      price: "€899",
      highlight: false
    },
    {
      title: "Paperwork Only",
      description: "Ideal for those already in Georgia or planning their own trip who just need help navigating the licensing process.",
      features: [
        "Document translation services",
        "Scheduling all necessary appointments",
        "Guidance throughout the application process",
        "Vision test and written exam preparation",
        "Support during official appointments"
      ],
      price: "€499",
      highlight: false
    },
    {
      title: "Custom Solutions",
      description: "Need something specific? We can create a tailored package to meet your unique requirements.",
      features: [
        "Customized service components",
        "Group discounts for 3+ people",
        "Extended accommodation options",
        "Specialized translation services",
        "Additional tourism arrangements",
        "Expedited processing where possible"
      ],
      price: "Custom pricing",
      highlight: false
    }
  ];

  return (
    <MainLayout>
      <div className="pt-28 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div ref={ref} className={`max-w-3xl mx-auto text-center mb-16 ${getAnimationClass(isInView, 'fade-up')}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Choose the package that fits your needs and budget. All options include our expert guidance through the Georgian driving license process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden border ${
                  service.highlight ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                } bg-card shadow-sm ${getAnimationClass(isInView, 'fade-up')}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-6 ${service.highlight ? 'bg-primary text-primary-foreground' : ''}`}>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                  <p className={`mt-2 ${service.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                  <div className="mt-4 text-2xl font-bold">{service.price}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="text-primary mr-2">✓</div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/contact">Select This Package</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-accent rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-bold mb-4">The Georgian License Process</h2>
              <p className="mb-6">
                Getting a Georgian driving license involves several steps, but with our assistance, the process becomes simple and stress-free:
              </p>
              
              <ol className="space-y-6 mb-6">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-medium">Document Preparation</h3>
                    <p className="text-muted-foreground">
                      We'll help you prepare all required documents, including your passport/ID, proof of address, and photos.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-medium">Vision Test</h3>
                    <p className="text-muted-foreground">
                      A simple vision test is conducted at an authorized medical center.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-medium">Written Exam</h3>
                    <p className="text-muted-foreground">
                      Complete a basic written exam on traffic rules, available in multiple languages.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-medium">License Issuance</h3>
                    <p className="text-muted-foreground">
                      After passing the exam, your license is processed and issued, typically within 1-2 business days.
                    </p>
                  </div>
                </li>
              </ol>
              
              <p className="text-center">
                <Button asChild size="lg" className="mt-4">
                  <Link to="/contact">Start Your Application</Link>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;
