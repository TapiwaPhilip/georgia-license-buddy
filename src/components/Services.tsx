
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "All-Inclusive Package",
    description: "Complete end-to-end service including flights, accommodation, transportation, appointments, and translation assistance.",
    features: [
      "Return flights from Europe",
      "3-night hotel accommodation",
      "Airport transfers",
      "Local transportation",
      "Document translation",
      "All appointment bookings",
      "24/7 support during your stay"
    ],
    highlight: true,
  },
  {
    title: "Essential Package",
    description: "Core services for those who prefer to arrange their own travel to Georgia.",
    features: [
      "3-night hotel accommodation",
      "Local transportation",
      "Document translation",
      "All appointment bookings",
      "24/7 support during your stay"
    ],
    highlight: false,
  },
  {
    title: "Paperwork Only",
    description: "For those already in Georgia who just need help with the license process.",
    features: [
      "Document translation",
      "All appointment bookings",
      "Application guidance",
      "Support during appointments"
    ],
    highlight: false,
  }
];

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <section ref={ref} className="py-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${getAnimationClass(isInView, 'fade-up')}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Choose the package that best fits your needs and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-xl ${
                service.highlight 
                  ? 'bg-primary text-primary-foreground border-primary ring-2 ring-primary/20' 
                  : 'bg-white dark:bg-gray-800 border border-border'
              } p-8 shadow-sm relative card-hover ${
                getAnimationClass(isInView, 'fade-up')
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full shadow-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`mb-6 ${service.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className={`mr-2 text-lg ${service.highlight ? 'text-primary-foreground' : 'text-primary'}`}>✓</div>
                    <span className={service.highlight ? 'text-primary-foreground/90' : 'text-muted-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                variant={service.highlight ? 'secondary' : 'default'} 
                className="w-full mt-auto"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
