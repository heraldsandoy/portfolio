// pages/projects.tsx
import React from 'react';
import ProjectSlider from '../components/ProjectSlider';
import DeckOfCards from '../components/DeckOfCards';

const cardData = [
  {
    background: '/projects/army.png',
  },
  {
    background: '/projects/jones.png',
  },
  {
    background: '/projects/qfab.png',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="relative bg-blue-bg min-h-[900px]">
        <div className="absolute inset-x-0 top-0 h-16 bg-blue-bg transform -skew-y-2 origin-top-left"></div>
        <div className="p-8 text-center">
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
