import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Palette, 
  Code2, 
  Layout, 
  Server, 
  Megaphone, 
  Settings,
  Cpu
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive, user-centered designs that enhance engagement and drive conversions through beautiful interfaces.',
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
  },
  {
    icon: Code2,
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development from concept to deployment, using modern technologies and best practices.',
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Next.js'],
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Building responsive, performant, and accessible user interfaces that work flawlessly across all devices.',
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Robust server-side solutions with secure APIs, efficient databases, and scalable architecture.',
    technologies: ['Node.js', 'Python', 'Express', 'REST APIs', 'GraphQL'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that increase brand visibility and generate qualified leads.',
    technologies: ['SEO', 'Google Ads', 'Social Media', 'Analytics', 'Content Strategy'],
  },
  {
    icon: Settings,
    title: 'Website Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly and securely.',
    technologies: ['Performance Optimization', 'Security Updates', 'Bug Fixes', '24/7 Support'],
  },
  {
    icon: Cpu,
    title: 'Custom Software Solutions',
    description: 'Tailored software applications designed to solve unique business challenges and streamline operations.',
    technologies: ['Custom Development', 'API Integration', 'Automation', 'SaaS'],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="section-title mt-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 4 && (
                  <span className="tech-badge">+{service.technologies.length - 4}</span>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
