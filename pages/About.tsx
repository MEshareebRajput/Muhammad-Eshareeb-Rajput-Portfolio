import React from 'react';
import AnimWrapper from '../components/AnimWrapper';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 max-w-7xl mx-auto px-6 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <AnimWrapper animation="slide-right">
          <div className="relative">
            <div className="absolute -inset-4 border border-zinc-700 translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="/profile.png" 
              alt="About Muhammad Eshareeb" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 object-cover shadow-2xl"
            />
          </div>
        </AnimWrapper>

        {/* Content Side */}
        <div>
          <AnimWrapper animation="fade-up" delay={200}>
             <h4 className="text-zinc-500 uppercase tracking-widest text-sm mb-4">About Me</h4>
          </AnimWrapper>
          <AnimWrapper animation="fade-up" delay={300}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Designing with purpose, <br/> building for scale.
            </h1>
          </AnimWrapper>
          <AnimWrapper animation="fade-up" delay={400}>
            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Based in {PERSONAL_INFO.location}, I specialize in translating complex business requirements into elegant digital solutions. Whether it's a high-converting Shopify store or a custom WordPress ecosystem, I bring technical precision and creative flair to every project.
            </p>
          </AnimWrapper>

          <AnimWrapper animation="fade-up" delay={500}>
            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-zinc-800 pt-8">
              <div>
                <span className="block text-3xl font-serif font-bold text-white mb-1">10+</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider">Months Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-white mb-1">4+</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider">Projects Completed</span>
              </div>
            </div>
          </AnimWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;