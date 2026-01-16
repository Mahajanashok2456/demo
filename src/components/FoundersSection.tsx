import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const founders = [
  {
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    philosophy: 'Every journey is a story waiting to be written.',
    image: 'AM',
    gradient: 'from-accent to-pink-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder & Creative Head',
    philosophy: 'The best trips leave you changed, not just traveled.',
    image: 'PS',
    gradient: 'from-golden to-amber-500',
  },
  {
    name: 'Vikram Patel',
    role: 'Co-Founder & Operations',
    philosophy: 'Details make the difference between good and unforgettable.',
    image: 'VP',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export function FoundersSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-golden/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">OUR FOUNDERS</span>
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">The Dreamers </span>
            <span className="gradient-text">Behind the Journey</span>
          </h2>
        </motion.div>
        
        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-3d p-6 h-full flex flex-col items-center text-center">
                {/* Portrait Frame */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Avatar */}
                    <div className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center text-3xl font-display font-bold text-white shadow-lg`}>
                      {founder.image}
                    </div>
                    
                    {/* 3D Frame Effect */}
                    <div className="absolute -inset-3 border-2 border-muted/20 rounded-3xl -z-10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                    <div className="absolute -inset-4 border border-muted/10 rounded-3xl -z-20 transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300" />
                  </motion.div>
                </div>
                
                {/* Name & Role */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {founder.name}
                </h3>
                <p className="text-sm text-accent mb-4">{founder.role}</p>
                
                {/* Quote */}
                <div className="flex-1 flex flex-col justify-end">
                  <div className="relative">
                    <Quote className="w-5 h-5 text-muted-foreground/30 absolute -top-3 -left-2" />
                    <p className="text-muted-foreground italic text-sm leading-relaxed pl-4">
                      {founder.philosophy}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Team Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass-strong rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-xl md:text-2xl font-display text-foreground italic">
              "Travel should feel effortless, magical, and <span className="gradient-text">personal</span>."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
