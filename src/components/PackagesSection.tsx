import { motion } from 'framer-motion';
import { useState } from 'react';
import { Compass, Crown, Wallet, Users, Sparkles, Globe } from 'lucide-react';
import adventureImg from '@/assets/package-adventure.jpg';
import luxuryImg from '@/assets/package-luxury.jpg';
import budgetImg from '@/assets/package-budget.jpg';
import familyImg from '@/assets/package-family.jpg';
import spiritualImg from '@/assets/package-spiritual.jpg';
import internationalImg from '@/assets/package-international.jpg';

const packages = [
  {
    id: 1,
    name: 'Adventure',
    icon: Compass,
    duration: '5D/6N',
    price: '₹24,999',
    highlights: ['Trekking', 'Camping', 'Wildlife'],
    image: adventureImg,
    accent: '#10B981',
  },
  {
    id: 2,
    name: 'Luxury',
    icon: Crown,
    duration: '7D/8N',
    price: '₹89,999',
    highlights: ['5-Star Hotels', 'Private Tours', 'Fine Dining'],
    image: luxuryImg,
    accent: '#F59E0B',
  },
  {
    id: 3,
    name: 'Budget',
    icon: Wallet,
    duration: '4D/5N',
    price: '₹12,999',
    highlights: ['Group Tours', 'Hostels', 'Local Food'],
    image: budgetImg,
    accent: '#3B82F6',
  },
  {
    id: 4,
    name: 'Family',
    icon: Users,
    duration: '6D/7N',
    price: '₹45,999',
    highlights: ['Kid-Friendly', 'Resorts', 'Activities'],
    image: familyImg,
    accent: '#EC4899',
  },
  {
    id: 5,
    name: 'Spiritual',
    icon: Sparkles,
    duration: '5D/6N',
    price: '₹18,999',
    highlights: ['Temples', 'Meditation', 'Yoga'],
    image: spiritualImg,
    accent: '#8B5CF6',
  },
  {
    id: 6,
    name: 'International',
    icon: Globe,
    duration: '8D/9N',
    price: '₹1,49,999',
    highlights: ['Visa Assist', 'Flights', 'Multi-City'],
    image: internationalImg,
    accent: '#E94560',
  },
];

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotation({
      x: (y - centerY) / 15,
      y: (centerX - x) / 15,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const Icon = pkg.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group h-[400px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={pkg.image} 
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundColor: pkg.accent }}
        />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end relative z-10">
        {/* Icon Badge */}
        <motion.div
          initial={false}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            y: isHovered ? -10 : 0 
          }}
          className="absolute top-6 right-6 w-12 h-12 rounded-xl glass flex items-center justify-center"
          style={{ 
            borderColor: isHovered ? pkg.accent : undefined,
            boxShadow: isHovered ? `0 0 30px ${pkg.accent}50` : undefined 
          }}
        >
          <Icon className="w-6 h-6" style={{ color: pkg.accent }} />
        </motion.div>
        
        {/* Title */}
        <h3 className="text-3xl font-display font-bold text-foreground mb-2">
          {pkg.name}
        </h3>
        
        {/* Duration & Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-muted-foreground">{pkg.duration}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span className="text-xl font-bold" style={{ color: pkg.accent }}>
            {pkg.price}
          </span>
        </div>
        
        {/* Highlights */}
        <motion.div 
          initial={false}
          animate={{ 
            opacity: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10 
          }}
          className="flex flex-wrap gap-2"
        >
          {pkg.highlights.map((highlight, i) => (
            <span 
              key={i}
              className="text-xs px-3 py-1.5 rounded-full glass-strong text-foreground/80"
            >
              {highlight}
            </span>
          ))}
        </motion.div>
        
        {/* Explore Button */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20 
          }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          <button 
            className="px-6 py-2.5 rounded-full font-semibold text-sm transition-all"
            style={{ 
              backgroundColor: pkg.accent,
              color: '#ffffff'
            }}
          >
            Explore Package →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PackagesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">OUR PACKAGES</span>
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Choose Your </span>
            <span className="gradient-text">Adventure</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            From thrilling expeditions to peaceful retreats, find the perfect journey that matches your soul.
          </p>
        </motion.div>
        
        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
