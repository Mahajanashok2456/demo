import { motion } from 'framer-motion';
import { useState } from 'react';
import { Compass, Crown, Wallet, Users, Sparkles, Globe } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Adventure',
    icon: Compass,
    duration: '5D/6N',
    price: '₹24,999',
    highlights: ['Trekking', 'Camping', 'Wildlife'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accent: '#10B981',
  },
  {
    id: 2,
    name: 'Luxury',
    icon: Crown,
    duration: '7D/8N',
    price: '₹89,999',
    highlights: ['5-Star Hotels', 'Private Tours', 'Fine Dining'],
    gradient: 'from-amber-500/20 to-yellow-500/20',
    accent: '#F59E0B',
  },
  {
    id: 3,
    name: 'Budget',
    icon: Wallet,
    duration: '4D/5N',
    price: '₹12,999',
    highlights: ['Group Tours', 'Hostels', 'Local Food'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accent: '#3B82F6',
  },
  {
    id: 4,
    name: 'Family',
    icon: Users,
    duration: '6D/7N',
    price: '₹45,999',
    highlights: ['Kid-Friendly', 'Resorts', 'Activities'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    accent: '#EC4899',
  },
  {
    id: 5,
    name: 'Spiritual',
    icon: Sparkles,
    duration: '5D/6N',
    price: '₹18,999',
    highlights: ['Temples', 'Meditation', 'Yoga'],
    gradient: 'from-purple-500/20 to-violet-500/20',
    accent: '#8B5CF6',
  },
  {
    id: 6,
    name: 'International',
    icon: Globe,
    duration: '8D/9N',
    price: '₹1,49,999',
    highlights: ['Visa Assist', 'Flights', 'Multi-City'],
    gradient: 'from-accent/20 to-golden/20',
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
      x: (y - centerY) / 10,
      y: (centerX - x) / 10,
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
        transition: 'transform 0.1s ease-out',
      }}
      className="card-3d p-6 cursor-pointer group"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div 
          className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-4 transition-all duration-300"
          style={{ 
            borderColor: isHovered ? pkg.accent : undefined,
            boxShadow: isHovered ? `0 0 30px ${pkg.accent}40` : undefined 
          }}
        >
          <Icon className="w-7 h-7" style={{ color: pkg.accent }} />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
          {pkg.name}
        </h3>
        
        {/* Duration & Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-muted-foreground">{pkg.duration}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span className="text-lg font-semibold" style={{ color: pkg.accent }}>
            {pkg.price}
          </span>
        </div>
        
        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {pkg.highlights.map((highlight, i) => (
            <span 
              key={i}
              className="text-xs px-3 py-1 rounded-full glass text-muted-foreground"
            >
              {highlight}
            </span>
          ))}
        </div>
        
        {/* Hover Arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="absolute top-6 right-6"
        >
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${pkg.accent}20` }}
          >
            <svg 
              className="w-5 h-5" 
              style={{ color: pkg.accent }}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
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
