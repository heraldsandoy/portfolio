"use client"

// components/ProjectSlider.tsx
import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectSliderProps {
  projects: {
    src: string;
    alt: string;
    title: string;
    description: string;
    link: string;
    width?: number; // Width of the image
    height?: number; // Height of the image
  }[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;

    if (deltaX > 50) {
      // Swipe right
      handlePrev();
      setIsDragging(false);
    } else if (deltaX < -50) {
      // Swipe left
      handleNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const projectStyles: React.CSSProperties = {
    transform: `translateX(-${currentProjectIndex * 100}%)`,
  };

  return (
    <div
      className="project-slider"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-container"
          style={{
            ...projectStyles,
            transform: `translateX(-${currentProjectIndex * 100}%) translateY(-${index * 10}px)`, // Adjust the translateY value for spacing
            position: 'relative', // Add relative positioning
            zIndex: projects.length - index, // Adjust the z-index for stacking
          }}
        >
          <div className="project">
            <div className="pagination">{index + 1}</div>
            <Image
              src={project.src}
              alt={project.alt}
              width={project.width || 200} // Set your default width here
              height={project.height || 150} // Set your default height here
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-button">
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
      <button onClick={handlePrev} className="slider-button prev-button">
        Previous
      </button>
      <button onClick={handleNext} className="slider-button next-button">
        Next
      </button>
    </div>
  );
};

export default ProjectSlider;
