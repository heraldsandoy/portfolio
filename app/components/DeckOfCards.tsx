"use client"

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface DeckOfCardsProps {
  cardData: {
    background: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const DeckOfCards: React.FC<DeckOfCardsProps> = ({ cardData }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [offsetX, setOffsetX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const currentX = e.clientX;
        const diffX = currentX - startX;

        setOffsetX(diffX);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);

        const threshold = 50; // Adjust the threshold as needed

        if (offsetX > threshold) {
          handlePrevCard();
        } else if (offsetX < -threshold) {
          handleNextCard();
        } else {
          setOffsetX(0);
        }
      }
    };

    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        setOffsetX(0);
      }
    };

    // Attach global event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, startX, offsetX]);

  const handleNextCard = () => {
    setSelectedCardIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
    setOffsetX(0);
  };

  const handlePrevCard = () => {
    setSelectedCardIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
    setOffsetX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  return (
    <div className="deck-container">
      <div
        className="deck"
        onMouseDown={(e) => handleMouseDown(e)}
        ref={containerRef}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`custom-card ${
              index === selectedCardIndex ? 'selected' : ''
            }`}
            style={{
              zIndex: cardData.length - Math.abs(index - selectedCardIndex),
              transform: `translateX(${
                index === selectedCardIndex ? offsetX : 0
              }px) rotate(${(index - selectedCardIndex) * 5}deg)`, // Apply rotation here
              backgroundImage: `url(${card.background})`,
              transition: 'transform 0.3s ease', // Smoother transition
            }}
          ></div>
        ))}
      </div>
      <div className="description-slider">
        <div className="description-card">
          <div className="description-body text-left">
            <h3 className="font-proximaSemi text-white ">{cardData[selectedCardIndex].title}</h3>
            <p className="mb-10">{cardData[selectedCardIndex].description}</p>

            <div>
              <Link href={cardData[selectedCardIndex].link} target='_blank'>
                <div className="relative bg-green-bg text-white cta-prop">
                  <div className="skew-top bg-green-bg z-10"></div>
                    <p className="font-pexico relative z-20">VIEW PROJECT</p>
                  <div className="skew-bottom bg-green-bg z-10"></div>
                </div>
              </Link>
            </div>

            <div className="mt-10">
              <button className="navbtn previous" onClick={handlePrevCard}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="navbtn next" onClick={handleNextCard}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckOfCards;
