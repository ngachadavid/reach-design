'use client';
import React, { useState } from 'react';

const StackedSection = () => {
  const [images] = useState([
    {
      src: '/images/rreach.webp',
      alt: 'Image 1',
      rotation: -12,
      translateX: 10,
      translateY: -8,
      zIndex: 2
    },
    {
      src: '/images/reach1.webp',
      alt: 'Image 2',
      rotation: -3,
      translateX: -20,
      translateY: -20,
      zIndex: 1
    },
    {
      src: '/images/reach.webp',
      alt: 'Image 3',
      rotation: 7,
      translateX: 18,
      translateY: -12,
      zIndex: 0
    }
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e, index) => {
    setDraggedIndex(index);
    setDragOffset({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div className="flex items-center justify-center p-8"> 
      <div className="relative w-full h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-transform duration-300 hover:scale-105"
            style={{
              transform: `scale(1) rotateZ(${image.rotation}deg) translateX(${image.translateX}px) translateY(${image.translateY}px)`,
              zIndex: draggedIndex === index ? 10 : image.zIndex,
              cursor: 'grab'
            }}
            onMouseDown={(e) => handleMouseDown(e, index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedSection;