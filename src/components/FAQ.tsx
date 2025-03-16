
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/utils/animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Who is eligible for a Georgian driving license?",
    answer: "Any citizen from an EU/EEA country who is at least 18 years old can apply for a Georgian driving license. You'll need a valid passport or ID, proof of address, and must meet basic vision requirements."
  },
  {
    question: "How long does the entire process take?",
    answer: "The entire process typically takes 3-5 days from arrival in Georgia to receiving your license. This includes all appointments, tests, and processing time."
  },
  {
    question: "Do I need to take a driving test?",
    answer: "No, Georgia doesn't require a practical driving test for EU/EEA citizens who are converting or obtaining a license. You'll only need to pass a vision test and a simple written exam (available in multiple languages)."
  },
  {
    question: "What documents do I need to bring?",
    answer: "You'll need your passport or national ID card, proof of address (utility bill, bank statement, etc.), and two passport-sized photos. If you're converting an existing license, bring that as well."
  },
  {
    question: "Is a Georgian driving license valid in the EU?",
    answer: "Yes, Georgian driving licenses are internationally recognized and valid throughout the EU and most other countries worldwide."
  },
  {
    question: "What if I don't speak Georgian?",
    answer: "Don't worry! Our service includes translation assistance. The written test is available in multiple languages including English, German, French, and Spanish."
  },
  {
    question: "Can I choose my accommodation?",
    answer: "With our All-Inclusive and Essential packages, we book quality hotels (minimum 3-star) in central Tbilisi. If you have specific preferences, let us know and we'll try to accommodate them (additional costs may apply)."
  },
  {
    question: "What happens if my application is rejected?",
    answer: "Application rejections are very rare when all documentation is in order. In the unlikely event of a rejection, we'll assist you in addressing any issues and reapplying at no additional service cost (though government fees may apply)."
  }
];

const FAQ = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <section ref={ref} id="faq" className="py-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${getAnimationClass(isInView, 'fade-up')}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about getting your Georgian driving license
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className={`border border-border rounded-lg mb-4 overflow-hidden ${getAnimationClass(isInView, 'fade-up')}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/50 data-[state=open]:bg-accent/50 transition-all">
                  <span className="text-left font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions? <a href="/contact" className="text-primary font-medium hover:underline">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
