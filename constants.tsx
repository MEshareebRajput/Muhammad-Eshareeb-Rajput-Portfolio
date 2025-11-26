import { 
  ShoppingBag, 
  Code, 
  BarChart, 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram, 
  Mail,
  Smartphone,
  Brush
} from 'lucide-react';
import { Project, Skill, Service, Experience, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Muhammad Eshareeb",
  title: "Web Developer | WordPress & Shopify Expert",
  bio: "I’m a web developer focused on WordPress, with experience in Shopify and building complete websites. I also work on digital marketing and branding, creating impactful online solutions that help businesses grow.",
  location: "Karachi, Pakistan",
  email: "muhammadeshareeb986@gmail.com",
  phone: "+92 328 2300151"
};
export const SKILLS: Skill[] = [
  // TECH
  { name: "WordPress", level: 95, category: "Tech" },
  { name: "Shopify", level: 90, category: "Tech" },
  
  // MARKETING
  { name: "Digital Marketing", level: 92, category: "Marketing" },
  { name: "Social Media Management", level: 90, category: "Marketing" },
  { name: "Campaign Management", level: 88, category: "Marketing" },
  { name: "Facebook & Instagram Paid Ads", level: 85, category: "Marketing" },
  { name: "Social Media Strategy", level: 90, category: "Marketing" },
  { name: "Content Marketing", level: 88, category: "Marketing" },
  { name: "Marketing Analytics", level: 82, category: "Marketing" },
  { name: "A/B Testing for Campaigns", level: 80, category: "Marketing" },
  { name: "Reels / Short Form Content Strategy", level: 85, category: "Marketing" },

  // DESIGN
  { name: "Brand Identity & Visual Branding", level: 86, category: "Design" },
  { name: "Ad Creatives Designing", level: 90, category: "Design" },
  { name: "Canva Pro Designing", level: 94, category: "Design" },
  { name: "Poster Designing", level: 92, category: "Design" },
  { name: "Logo Designing", level: 90, category: "Design" }
];


export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Shopify Development',
    description: 'Building and customizing Shopify stores to enhance user experience and drive sales.',
    icon: ShoppingBag
  },
  {
    id: '2',
    title: 'WordPress Customization',
    description: 'Developing comprehensive WordPress sites aligned with business goals and brand visibility.',
    icon: Code
  },
  {
    id: '3',
    title: 'Digital Marketing & Branding',
    description: 'Creating impactful online solutions, managing campaigns, and handling social media strategies.',
    icon: BarChart
  },
  {
  id: '4',
  title: 'Canva Design Services',
  description: 'Professional Canva designs including posters, flyers, logos, business cards, banners, brochures, and social media graphics.',
  icon: Brush
}
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Brand Store',
    description: 'A fully customized Shopify store with integrated marketing tools and optimized checkout flow.',
    category: 'Shopify',
    imageUrl: 'https://picsum.photos/id/445/800/600',
    link: '#'
  },
  {
    id: '2',
    title: 'Corporate Business Site',
    description: 'Responsive WordPress website designed for a corporate client to improve brand presence.',
    category: 'WordPress',
    imageUrl: 'https://picsum.photos/id/2/800/600',
    link: '#'
  },
  {
    id: '3',
    title: 'Social Media Campaign',
    description: 'Strategic digital marketing campaign that increased engagement and brand awareness.',
    category: 'Marketing',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    link: '#'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, dark-themed portfolio website built with React and Tailwind CSS.',
    category: 'WordPress',
    imageUrl: 'https://picsum.photos/id/180/800/600',
    link: '#'
  }
];

export const EDUCATION: Experience[] = [
  {
    id: '1',
    year: '2025',
    role: 'WordPress Developer',
    company: 'Marcos Technology',
    description: 'Developed comprehensive WordPress sites aligned with company goals. Enhanced user experience, SEO, and brand visibility.'
  },
  {
    id: '2',
    year: '2025',
    role: 'Digital Marketing Course (In Progress)',
    company: 'Saylani Mass IT Training Program',
  },
  {
    id: '3',
    year: '2024',
    role: 'MERN Stack Developer Intern',
    company: 'Eflex Solution',
    description: 'Developed and executed comprehensive applications using the MERN stack aligned with company objectives.'
  },
  {
    id: '4',
    year: '2023-2024',
    role: 'Diploma in IT (Web Development – MERN)',
    company: 'Saylani Mass IT Training Program',
  },
  {
    id: '5',
    year: '2023',
    role: 'Frontend Development Certification',
    company: 'Jawan Pakistan',
    description: '4 Months Course'
  },
  {
    id: '6',
    year: '2023-2025',
    role: 'Intermediate in Pre-Engineering',
    company: 'Govt. Boys College 11-A North Karachi',
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammadeshareeb986/', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/MEshareebRajput', icon: Github },
  { platform: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { platform: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61565379902641', icon: Facebook },
  { platform: 'Instagram', url: 'https://www.instagram.com/eshareebrajput/', icon: Instagram },
  { platform: 'WhatsApp', url: 'https://wa.me/923282300151', icon: Smartphone },
];