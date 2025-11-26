import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download, Eye } from 'lucide-react';
import AnimWrapper from '../components/AnimWrapper';
import { PERSONAL_INFO, SKILLS } from '../constants';
import { RoutePath } from '../types';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center min-h-[90vh] pt-20 px-6 max-w-7xl mx-auto gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <AnimWrapper animation="fade-up" delay={100}>
            <p className="text-zinc-400 text-sm md:text-base uppercase tracking-[0.2em] mb-4">
              Portfolio & Resume
            </p>
          </AnimWrapper>
          
          <AnimWrapper animation="fade-up" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight text-white mb-6">
              {PERSONAL_INFO.name}
            </h1>
          </AnimWrapper>
          
          <AnimWrapper animation="fade-up" delay={300}>
            <h2 className="text-xl md:text-2xl text-zinc-300 font-light mb-8">
              {PERSONAL_INFO.title}
            </h2>
          </AnimWrapper>
          
          <AnimWrapper animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="https://drive.google.com/file/d/1FyL-AOzjElK2PB6eGwoA1nIzObWCRWbZ/view" 
                target="_blank"
                className="group relative px-8 py-3 bg-white text-black font-semibold rounded-none overflow-hidden hover:text-white transition-colors duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={18} /> Download CV
                </span>
              </a>
              
              <NavLink 
                to={RoutePath.PORTFOLIO}
                className="group px-8 py-3 border border-zinc-700 text-white font-semibold hover:border-white hover:bg-zinc-900 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                View Work <Eye size={18} className="group-hover:text-zinc-300" />
              </NavLink>
            </div>
          </AnimWrapper>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full max-w-md md:max-w-full relative">
          <AnimWrapper animation="zoom-in" delay={300}>
            <div className="relative aspect-[3/4] md:aspect-[3/4] bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 group">
               <img 
                 src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/586171260_122183052608512663_9151728751127118408_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=J7NgIx3OpJ0Q7kNvwEeiKK2&_nc_oc=AdlsN9eZQSqexXAgmfbb0g8rgq_KLT8niSZq0RdeJ3ZJcIKTFQfKm1BT7WcZOZNEiLU&_nc_zt=23&_nc_ht=scontent.fkhi8-1.fna&_nc_gid=39evZwvcNHwxvZh3cxYdqw&oh=00_AfjTClNq6k_I71OMDrwMNKmB-EdunJxnnxZNfQNF8wgQZg&oe=692CDB93" 
                 alt="Muhammad Eshareeb" 
                 className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
          </AnimWrapper>
        </div>
      </section>

      {/* Expertise Section - Redesigned */}
      <section className="py-24 bg-black relative overflow-hidden border-t border-zinc-900">
         {/* Background elements */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <AnimWrapper animation="fade-up">
              <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <h3 className="text-zinc-500 text-sm tracking-[0.2em] uppercase mb-3">Capabilities</h3>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
                    Core <span className="text-zinc-600">Expertise</span>
                  </h2>
                </div>
                <NavLink to={RoutePath.SKILLS} className="group flex items-center gap-3 text-white px-6 py-3 border border-zinc-800 hover:bg-white hover:text-black transition-all duration-300">
                  Explore All Skills <ArrowRight size={18} />
                </NavLink>
              </div>
            </AnimWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
               {SKILLS.slice(0, 3).map((skill, idx) => (
                 <AnimWrapper key={idx} animation="fade-up" delay={idx * 150} className="h-full">
                   <div className="relative h-96 bg-zinc-950 p-10 flex flex-col justify-between group overflow-hidden hover:bg-zinc-900 transition-colors duration-500">
                      
                      {/* Top Content */}
                      <div className="relative z-10">
                        <span className="inline-block px-3 py-1 border border-zinc-800 rounded-full text-xs text-zinc-400 mb-4 group-hover:border-zinc-600 transition-colors">
                          {skill.category}
                        </span>
                        <h4 className="text-3xl font-serif text-white">{skill.name}</h4>
                      </div>

                      {/* Center Graphic - Animated Number */}
                      <div className="absolute right-6 top-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                         <div className="text-6xl font-bold text-zinc-800 group-hover:text-zinc-700 select-none font-serif">
                            {idx + 1. < 10 ? `0${idx + 1}` : idx + 1}
                         </div>
                      </div>

                      {/* Bottom Interaction */}
                      <div className="relative z-10">
                        <div className="flex justify-between items-end mb-2">
                           <span className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">Proficiency</span>
                           <span className="text-xl font-bold text-white">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-zinc-900 h-1 mt-2 overflow-hidden">
                          <div 
                             className="bg-white h-full transition-all duration-1000 ease-out"
                             style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Hover Flash */}
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                   </div>
                 </AnimWrapper>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;