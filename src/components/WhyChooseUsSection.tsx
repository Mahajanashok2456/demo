import { motion } from 'framer-motion';
import { Briefcase, Shield, MapPin, Headphones, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Hand-crafted Packages',
    description: 'Every journey is meticulously designed by travel experts who understand your unique preferences.',
  },
  {
    icon: MapPin,
    title: 'End-to-end Planning',
    description: 'From booking to boarding, we handle every detail so you can focus on creating memories.',
  },
  {
    icon: Shield,
    title: 'Verified Accommodations',
    description: 'Stay worry-free with our personally vetted hotels, resorts, and homestays.',
  },
  {
    icon: Headphones,
    title: '24/7 Travel Support',
    description: 'Round-the-clock assistance during your journey, because peace of mind travels with you.',
  },
  {
    icon: CreditCard,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. What you see is exactly what you pay.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full border border-muted/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-muted/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent/10 rounded-full"
          />
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-golden font-medium mb-4 block">WHY CHOOSE US</span>
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Travel </span>
            <span className="gradient-text-soft">Without Worry</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just plan trips—we craft experiences that stay with you forever.
          </p>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isCenter = index === 2;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group ${isCenter ? 'lg:col-span-1' : ''}`}
              >
                <div className="glass-strong rounded-2xl p-8 h-full transition-all duration-500 hover:border-accent/30">
                  {/* 3D Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-golden/20 flex items-center justify-center mb-6 relative"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Icon className="w-8 h-8 text-accent" />
                    <div className="absolute inset-0 rounded-xl bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                  
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
