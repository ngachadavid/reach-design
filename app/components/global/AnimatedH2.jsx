export default function AnimatedH2({ children, isVisible, className = "" }) {
  return (
    <h2 className={`text-3xl font-bold leading-none tracking-tight ${className}`}>
      {children.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: `opacity 0.5s ease-out ${index * 0.05}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
}
