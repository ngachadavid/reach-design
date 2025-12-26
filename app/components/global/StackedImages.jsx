'use client';
import React, { useState } from 'react';

const StackedImages = () => {
  const [images, setImages] = useState([
    {
      src: '/images/reach3.webp',
      alt: 'Image 1',
      rotation: -12,
      translateX: 10,
      translateY: -8,
      zIndex: 2
    },
    {
      src: '/images/draw.avif',
      alt: 'Image 2',
      rotation: -3,
      translateX: -20,
      translateY: -20,
      zIndex: 1
    },
    {
      src: '/images/int.avif',
      alt: 'Image 3',
      rotation: 7,
      translateX: 18,
      translateY: -12,
      zIndex: 0
    }
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const containerRef = React.useRef(null);

  const handleStart = (e, index) => {
    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    
    // Bring clicked/touched image to front
    const newImages = [...images];
    const clickedImage = newImages[index];
    const currentZIndex = clickedImage.zIndex;
    
    // Move all images with higher z-index down by 1
    newImages.forEach(img => {
      if (img.zIndex > currentZIndex) {
        img.zIndex -= 1;
      }
    });
    
    // Put clicked image on top
    clickedImage.zIndex = images.length - 1;
    setImages(newImages);
    
    setDraggedIndex(index);
    setStartPosition({ x: clientX, y: clientY });
    setDragPosition({ x: 0, y: 0 });
  };

  const handleMove = (e) => {
    if (draggedIndex === null) return;

    const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

    setDragPosition({
      x: clientX - startPosition.x,
      y: clientY - startPosition.y
    });
  };

  const handleEnd = () => {
    if (draggedIndex === null) return;

    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const threshold = containerRect.width * 0.1;

    // Check if dragged far enough to the sides
    if (Math.abs(dragPosition.x) > threshold) {
      // Push to back by reordering z-indices
      const newImages = [...images];
      const draggedImage = newImages[draggedIndex];
      const currentZIndex = draggedImage.zIndex;
      
      // Move all images with lower z-index up by 1
      newImages.forEach(img => {
        if (img.zIndex < currentZIndex) {
          img.zIndex += 1;
        }
      });
      
      // Put dragged image at the bottom (z-index 0)
      draggedImage.zIndex = 0;
      
      setImages(newImages);
    }

    setDraggedIndex(null);
    setDragPosition({ x: 0, y: 0 });
  };

  React.useEffect(() => {
    if (draggedIndex !== null) {
      document.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove);
      document.addEventListener('touchend', handleEnd);

      return () => {
        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [draggedIndex, startPosition, dragPosition]);

  return (
    <div className="flex items-center justify-center p-8"> 
      <div ref={containerRef} className="relative w-full h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-transform duration-300 hover:scale-105"
            style={{
              transform: `scale(1) rotateZ(${image.rotation}deg) translateX(${
                draggedIndex === index ? image.translateX + dragPosition.x : image.translateX
              }px) translateY(${
                draggedIndex === index ? image.translateY + dragPosition.y : image.translateY
              }px)`,
              zIndex: draggedIndex === index ? 10 : image.zIndex,
              cursor: draggedIndex === index ? 'grabbing' : 'grab',
              transition: draggedIndex === index ? 'none' : 'transform 0.3s'
            }}
            onMouseDown={(e) => handleStart(e, index)}
            onTouchStart={(e) => handleStart(e, index)}
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

export default StackedImages;