import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, hsla(348, 82%, 56%, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, hsla(38, 92%, 50%, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, hsla(216, 73%, 22%, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, hsla(348, 82%, 56%, 0.08) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium mb-4 block">ABOUT US</span>
            <h2 className="heading-lg mb-8">
              <span className="text-foreground">We Believe in the </span>
              <span className="gradient-text">Magic of Travel</span>
            </h2>
          </motion.div>
          
          {/* Story Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-strong rounded-3xl p-8 md:p-12"
            >
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
                It started with a simple idea: <span className="text-accent font-medium">travel should feel effortless</span>. 
                Not a checklist of destinations, but a collection of moments that change who you are.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-muted-foreground leading-relaxed">
                  We're a team of passionate travelers, dreamers, and planners who've been to 
                  the places we recommend. We've walked the streets, tasted the food, and felt 
                  the sunsets—so you can experience them too.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-muted-foreground leading-relaxed">
                  Every package we create is infused with personal touches—because we know that 
                  the best trips aren't about ticking boxes. They're about feeling alive, 
                  connected, and inspired.
                </p>
              </motion.div>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { number: '10K+', label: 'Happy Travelers' },
                { number: '150+', label: 'Destinations' },
                { number: '8+', label: 'Years of Trust' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
