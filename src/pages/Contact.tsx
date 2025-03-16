
import MainLayout from '@/layouts/MainLayout';
import ContactForm from '@/components/ContactForm';
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/utils/animations';

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <MainLayout>
      <div className="pt-28 pb-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <div ref={ref} className={`max-w-3xl mx-auto text-center mb-16 ${getAnimationClass(isInView, 'fade-up')}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about getting your Georgian driving license? We're here to help!
            </p>
          </div>
          
          <ContactForm />
          
          <div className={`mt-20 max-w-4xl mx-auto ${getAnimationClass(isInView, 'fade-up')}`}>
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg mb-2">How quickly can I get a Georgian license?</h3>
                  <p className="text-muted-foreground mb-6">
                    The entire process typically takes 3-5 days from arrival in Georgia to receiving your license.
                  </p>
                  
                  <h3 className="font-medium text-lg mb-2">Do I need to speak Georgian?</h3>
                  <p className="text-muted-foreground mb-6">
                    No, our service includes full translation assistance, and the written test is available in multiple languages.
                  </p>
                  
                  <h3 className="font-medium text-lg mb-2">What documents do I need?</h3>
                  <p className="text-muted-foreground">
                    You'll need your passport/ID, proof of address, and two passport photos. We'll guide you through all requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2">Is the Georgian license valid in the EU?</h3>
                  <p className="text-muted-foreground mb-6">
                    Yes, Georgian driving licenses are internationally recognized and valid throughout the European Union.
                  </p>
                  
                  <h3 className="font-medium text-lg mb-2">Do I need to take a driving test?</h3>
                  <p className="text-muted-foreground mb-6">
                    No, EU/EEA citizens are not required to take a practical driving test, only a vision test and a simple written exam.
                  </p>
                  
                  <h3 className="font-medium text-lg mb-2">What if I have more questions?</h3>
                  <p className="text-muted-foreground">
                    Feel free to contact us using the form above, and we'll answer all your questions promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
