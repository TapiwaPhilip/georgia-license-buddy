
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useInView, getAnimationClass } from '@/utils/animations';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <div className="relative overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div 
            ref={ref} 
            className={`flex-1 text-center lg:text-left mb-10 lg:mb-0 lg:pr-10 ${
              getAnimationClass(isInView, 'fade-up')
            }`}
          >
            <div className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
              Fast & Affordable European Driving Licenses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Get Your <span className="text-primary">Georgian Driving License</span> Without The Hassle
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              We handle everything from flights and accommodation to appointments and paperwork. Fast, affordable, and stress-free for EU citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-lg">
                <Link to="/contact">Start Your Application</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
                alt="Georgian driver's license process" 
                className="rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg max-w-[250px] animate-float">
                <p className="text-sm font-medium">
                  "Got my license in just 3 days! Highly recommend their service."
                </p>
                <div className="mt-2 flex items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">MK</div>
                  <div className="ml-2">
                    <p className="text-xs font-medium">Martin K.</p>
                    <p className="text-xs text-muted-foreground">Germany</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
