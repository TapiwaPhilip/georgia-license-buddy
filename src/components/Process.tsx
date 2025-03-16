
import { useRef } from 'react';
import { useInView, getAnimationClass } from '@/utils/animations';

const processSteps = [
  {
    title: "Application",
    description: "Submit your details and preferred dates through our simple online form.",
    icon: "📝",
  },
  {
    title: "Planning",
    description: "We arrange your flights, accommodation, and schedule all necessary appointments.",
    icon: "✈️",
  },
  {
    title: "Documentation",
    description: "Prepare your ID, proof of residency, and other required documents with our guidance.",
    icon: "📋",
  },
  {
    title: "Testing",
    description: "Complete vision test and written exam with our on-site support.",
    icon: "👁️",
  },
  {
    title: "License Issuance",
    description: "Receive your Georgian driving license, valid throughout Europe.",
    icon: "🪪",
  },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, '-100px');

  return (
    <section ref={ref} className="py-20 bg-accent">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${getAnimationClass(isInView, 'fade-up')}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple 5-Step Process</h2>
          <p className="text-lg text-muted-foreground">
            We've streamlined the entire process to make getting your Georgian driving license as easy as possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-border relative card-hover ${
                getAnimationClass(isInView, 'fade-up')
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-4">
            Average processing time: <span className="font-semibold text-foreground">3-5 days</span>
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm">No driving test required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm">Valid throughout Europe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm">EU/EEA citizens eligible</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
