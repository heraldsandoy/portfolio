"use client"

import React, { useState, useRef, useEffect } from 'react';

interface DeckOfCardsProps {
  cardData: { background: string }[];
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
    if (selectedCardIndex < cardData.length - 1) {
      setSelectedCardIndex(selectedCardIndex + 1);
    } else {
      setSelectedCardIndex(0);
      setOffsetX(0); // Reset offsetX when looping to the first card
    }
  };

  const handlePrevCard = () => {
    if (selectedCardIndex > 0) {
      setSelectedCardIndex(selectedCardIndex - 1);
    } else {
      setSelectedCardIndex(cardData.length - 1);
      setOffsetX(0); // Reset offsetX when looping to the last card
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  return (
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
            }px) rotate(${(index - selectedCardIndex) * 5}deg)`,
            backgroundImage: `url(${card.background})`,
            transition: 'transform 0.3s ease', // Smoother transition
          }}
        ></div>
      ))}
      <button onClick={handlePrevCard}>Previous</button>
      <button onClick={handleNextCard}>Next</button>
    </div>
  );
};

export default DeckOfCards;
