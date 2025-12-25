'use client';
import React, { useState } from 'react';

const StackedSection = () => {
  const [images] = useState([
    {
      src: '/images/reach3.webp',
      alt: 'Image 1',
      rotation: -10,
      translateX: 5,
      translateY: -5,
      zIndex: 2
    },
    {
      src: '/images/draw.avif',
      alt: 'Image 2',
      rotation: -2,
      translateX: -26,
      translateY: -26,
      zIndex: 1
    },
    {
      src: '/images/int.avif',
      alt: 'Image 3',
      rotation: 6,
      translateX: 15,
      translateY: -15,
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