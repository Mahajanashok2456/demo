import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', travelType: '', message: '' });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
        />
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
          <span className="text-accent font-medium mb-4 block">GET IN TOUCH</span>
          <h2 className="heading-lg mb-6">
            <span className="text-foreground">Let's Plan Your </span>
            <span className="gradient-text">Dream Trip</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Ready to start your journey? We'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder:text-muted-foreground/50 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder:text-muted-foreground/50 transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                {/* Travel Type */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Type of Travel
                  </label>
                  <select
                    value={formData.travelType}
                    onChange={(e) => setFormData({ ...formData, travelType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground transition-all"
                    required
                  >
                    <option value="" className="bg-background">Select travel type</option>
                    <option value="adventure" className="bg-background">Adventure</option>
                    <option value="luxury" className="bg-background">Luxury</option>
                    <option value="budget" className="bg-background">Budget</option>
                    <option value="family" className="bg-background">Family</option>
                    <option value="spiritual" className="bg-background">Spiritual</option>
                    <option value="international" className="bg-background">International</option>
                  </select>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 text-foreground placeholder:text-muted-foreground/50 transition-all resize-none"
                    placeholder="Tell us about your dream destination..."
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="glass rounded-2xl p-6 flex items-start gap-4 group hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Our Office</h3>
                  <p className="text-muted-foreground">
                    123 Travel Street, Wanderlust Tower<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
              
              <div className="glass rounded-2xl p-6 flex items-start gap-4 group hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">hello@wanderlust.travel</p>
                  <p className="text-muted-foreground">support@wanderlust.travel</p>
                </div>
              </div>
              
              <div className="glass rounded-2xl p-6 flex items-start gap-4 group hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 98765 43211</p>
                </div>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 font-semibold hover:bg-green-500/30 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
