
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/utils/animations';
import MainLayout from '@/layouts/MainLayout';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <MainLayout>
      <div className="pt-28 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div ref={ref} className={`max-w-4xl mx-auto ${getAnimationClass(isInView, 'fade-up')}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">About GeoLicense</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl mb-6 text-muted-foreground">
                GeoLicense was founded with a simple mission: to make the process of obtaining a Georgian driving license as smooth and hassle-free as possible for European citizens.
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-border shadow-sm mb-10">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  After experiencing the bureaucratic challenges of obtaining a Georgian driving license firsthand, our founders recognized the need for a comprehensive service that could guide others through the process.
                </p>
                <p className="mb-0">
                  What started as helping friends navigate the requirements soon grew into a full-service operation, dedicated to providing seamless assistance to Europeans looking to benefit from Georgia's efficient licensing system.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Why Choose Georgia for Your Driving License?</h2>
              <p className="mb-4">
                Georgia offers a streamlined process for obtaining driving licenses, making it an attractive option for EU citizens looking for:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Quick processing times (typically 3-5 days)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>No practical driving test requirement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Lower costs compared to many EU countries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Internationally recognized licenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Easy renewal process</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4">Our Team</h2>
              <p className="mb-6">
                Our team consists of experienced professionals who understand both the Georgian licensing system and the needs of our European clients. We combine local expertise with international standards of service to ensure a smooth experience.
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
              <p className="mb-4">
                At GeoLicense, we're committed to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Complete transparency throughout the process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Personalized service tailored to your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Efficient handling of all documentation and appointments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>24/7 support during your stay in Georgia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Quality accommodations and comfortable transportation</span>
                </li>
              </ul>
              
              <div className="bg-accent p-8 rounded-xl mb-8">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  "Our goal is not just to help you get a driving license, but to make your brief stay in Georgia a pleasant and memorable experience."
                </blockquote>
                <p className="text-right mt-4 font-medium">— The GeoLicense Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
