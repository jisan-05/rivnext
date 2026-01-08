import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Building2 } from 'lucide-react';

const clients = [
  {
    name: 'TechVentures Inc.',
    description: 'E-commerce platform with integrated payment solutions',
    website: 'https://example.com',
    category: 'E-Commerce',
  },
  {
    name: 'GreenLeaf Organics',
    description: 'Modern website with online ordering system',
    website: 'https://example.com',
    category: 'Food & Beverage',
  },
  {
    name: 'FinanceFlow',
    description: 'Financial dashboard and analytics platform',
    website: 'https://example.com',
    category: 'FinTech',
  },
  {
    name: 'HealthFirst Medical',
    description: 'Patient management system and booking portal',
    website: 'https://example.com',
    category: 'Healthcare',
  },
  {
    name: 'EduPro Learning',
    description: 'Online learning management system',
    website: 'https://example.com',
    category: 'Education',
  },
  {
    name: 'Urban Style',
    description: 'Fashion e-commerce with virtual try-on feature',
    website: 'https://example.com',
    category: 'Retail',
  },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="clients" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Clients</span>
          <h2 className="section-title mt-4">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            We've had the privilege of working with amazing companies across various industries
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="client-card group cursor-pointer"
            >
              {/* Client Icon/Logo Placeholder */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <Building2 className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
              </div>

              {/* Category Badge */}
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-3 inline-block">
                {client.category}
              </span>

              {/* Client Name */}
              <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                {client.name}
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {client.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Want to see your company here?</p>
          <a href="#contact" className="btn-primary inline-flex">
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
