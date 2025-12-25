'use client';

export default function WhiteButton({ text = "Submit Info", href = "#" }) {
  return (
    <a href={href} className="relative inline-block cursor-pointer group overflow-visible">
      {/* Animated fill background */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div 
          className="absolute inset-0 bg-white origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transform: 'scaleY(0)',
            clipPath: 'inset(0 0 0 0 round 24px)',
          }}
          ref={(el) => {
            if (el) {
              const parent = el.parentElement.parentElement;
              parent.addEventListener('mouseenter', () => {
                el.style.transform = 'scaleY(1)';
              });
              parent.addEventListener('mouseleave', () => {
                el.style.transform = 'scaleY(0)';
              });
            }
          }}
        />
      </div>
      
      {/* Button content */}
      <div className="relative bg-transparent px-4 py-3 border-2 border-white rounded-3xl">
        <span className="relative text-white font-normal text-sm md:text-lg transition-colors duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:text-black z-10">
          {text}
        </span>
      </div>
    </a>
  );
}