// pages/projects.tsx
import React from 'react';
import ProjectSlider from '../components/ProjectSlider';
import DeckOfCards from '../components/DeckOfCards';

const cardData = [
  {
    background: '/projects/army.png',
    title: 'Army Amenities Fund',
    description: 'AAF Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl non arcu accumsan rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula erat quis eros imperdiet, nec lobortis enim viverra.',
    link: 'https://armyamenitiesfund.com.au',
  },
  {
    background: '/projects/jones.png',
    title: 'Jones Theatrical Group',
    description: 'JTG Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl non arcu accumsan rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula erat quis eros imperdiet, nec lobortis enim viverra.',
    link: 'https://jonestg.co/',
  },
  {
    background: '/projects/qfab.png',
    title: 'Quality Fabrication',
    description: 'QFAB Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl non arcu accumsan rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula erat quis eros imperdiet, nec lobortis enim viverra.',
    link: 'https://www.qualityfabrication.ae/',
  },
  {
    background: '/projects/th-b.png',
    title: 'Total Hearing Care',
    description: 'THC Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl non arcu accumsan rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula erat quis eros imperdiet, nec lobortis enim viverra.',
    link: 'https://totalhearingcare.com/',
  },
  {
    background: '/projects/uniformity.png',
    title: 'Uniformity',
    description: 'Uniformity Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl non arcu accumsan rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula erat quis eros imperdiet, nec lobortis enim viverra.',
    link: 'https://uniformity.com.au/',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="relative bg-blue-bg min-h-[900px]">
        <div className="absolute inset-x-0 top-0 bg-blue-bg transform -skew-y-2 origin-top-left h-24 limp"></div>
        <div className="text-center lg:max-w-[1440px] sm:max-w-[90%] mx-auto pt-11">
          <h2 className="text-white text-[35px] font-pexico">Explore some of my work</h2>

          <div className="rotator">
            <DeckOfCards cardData={cardData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
