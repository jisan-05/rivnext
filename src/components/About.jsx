import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Shield } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technological trends to deliver cutting-edge solutions.',
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Every project is crafted with attention to detail and best practices.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build long-term relationships based on trust and transparency.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
          <h2 className="section-title mt-4">
            Empowering Businesses Through <span className="text-gradient">Technology</span>
          </h2>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-gradient rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver reliable, modern, and scalable digital solutions that empower businesses 
              to thrive in the digital age. We combine technical expertise with creative innovation 
              to transform complex challenges into elegant solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-gradient rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Eye className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become a trusted global technology partner, helping businesses of all sizes 
              unlock their potential through innovative digital solutions. We envision a world 
              where technology seamlessly drives growth and success.
            </p>
          </motion.div>
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
            <Heart className="text-primary" size={28} />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">Who We Are</h3>
          <p className="text-muted-foreground leading-relaxed">
            RivNext is a dynamic IT and digital services company founded with a passion for 
            creating exceptional digital experiences. Our team of skilled developers, designers, 
            and digital strategists work collaboratively to bring your vision to life. We believe 
            in building lasting partnerships with our clients, understanding their unique needs, 
            and delivering solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-display font-bold text-center mb-10">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-card border border-border flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
