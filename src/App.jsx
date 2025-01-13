import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialLink from './components/SocialLink';
import PortfolioItem from './components/PortfolioItem';
import photo1 from '../src/photo/5.jpg'
import photo2 from '../src/photo/2.jpg'
import photo3 from '../src/photo/3.jpg'
import photo4 from '../src/photo/Photo.jpg'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_dbrolex_0418/',
    icon: faInstagram
  },
  {
    name: 'GitHub',
    url: 'https://github.com/LawrenceVectus86',
    icon: faGithub
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@brolexiz89',
    icon: faTiktok
  }
];

const portfolioItems = [
  {
    title: 'Nature Photography',
    image: photo1,
    description: 'Xiaomi 14T'
  },
  {
    title: 'Street Photography',
    image: photo2,
    description: 'Leica - Xiaomi 14T'
  },
  {
    title: 'Portrait Photography',
    image: photo3,
    description: 'Dog and their stories'
  }
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" data-aos="fade-down">
          <img 
            src={photo4} 
            alt="Profile" 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-purple-500"
          />
          <h1 className="text-4xl font-bold mb-2">Calvin Lawrence</h1>
          <p className="text-gray-400">Photographer & Developer</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          {socialLinks.map((link, index) => (
            <SocialLink 
              key={index}
              name={link.name}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;