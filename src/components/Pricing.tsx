
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/utils/animations';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const packages = [
  {
    title: "All-Inclusive",
    price: "€1,499",
    description: "Complete end-to-end service",
    features: [
      "Flights from anywhere in Europe",
      "Hotel accommodation (3 nights)",
      "All local transportation",
      "Document translation",
      "Appointment scheduling",
      "Personal assistant",
      "24/7 support"
    ],
    cta: "Book All-Inclusive",
    popular: true
  },
  {
    title: "Essential",
    price: "€899",
    description: "Core services (without flights)",
    features: [
      "Hotel accommodation (3 nights)",
      "All local transportation",
      "Document translation",
      "Appointment scheduling",
      "Personal assistant",
      "24/7 support"
    ],
    cta: "Book Essential",
    popular: false
  },
  {
    title: "Basic",
    price: "€499",
    description: "Paperwork & appointments only",
    features: [
      "Document translation",
      "Appointment scheduling",
      "Application guidance",
      "Support during appointments"
    ],
    cta: "Book Basic",
    popular: false
  }
];

const Pricing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <section ref={ref} id="pricing" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${getAnimationClass(isInView, 'fade-up')}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            All packages include official government fees and our service charges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden border ${
                pkg.popular ? 'border-primary shadow-lg' : 'border-border'
              } bg-card ${getAnimationClass(isInView, 'fade-up')}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">/ person</span>
                </div>
                <p className="text-muted-foreground mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  variant={pkg.popular ? 'default' : 'outline'} 
                  className={`w-full ${pkg.popular ? '' : 'hover:bg-primary hover:text-primary-foreground'}`}
                >
                  <Link to="/contact">{pkg.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-muted-foreground text-sm">
          <p>Prices are per person. Group discounts available for 3+ people.</p>
          <p className="mt-2">All packages include license fees (approx. €60) paid directly to Georgian authorities.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
