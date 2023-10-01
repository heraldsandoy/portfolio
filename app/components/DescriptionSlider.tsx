import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface DescriptionSliderProps {
  cardData: {
    title: string;
    description: string;
    link: string;
  };
  handlePrevCard: () => void;
  handleNextCard: () => void;
}

const DescriptionSlider: React.FC<DescriptionSliderProps> = ({
  cardData,
  handlePrevCard,
  handleNextCard,
}) => {
  return (
    <div className="description-slider">
      <div className="description-card">
        <h3>{cardData.title}</h3>
        <p>{cardData.description}</p>
        <a href={cardData.link}>View Project</a>
      </div>
      <div className="shuffle-wrap">
        <button className="navbtn previous" onClick={handlePrevCard}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="navbtn next" onClick={handleNextCard}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default DescriptionSlider;
