export default function Navbar() {
  const navLinks = [
    { label: "PROJECTS", href: "#projects" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full px-16 py-8 flex items-center justify-between text-black">
      {/* Logo */}
      <div className="text-lg font-semibold tracking-wider">
        REACH
      </div>

      {/* Navigation Links */}
      <div className="flex gap-12 text-sm tracking-wider">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="group relative flex items-center pr-4"
          >
            {/* Expanding background */}
            <span
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                h-5 w-3 bg-black
                transition-all duration-300 ease-out
                group-hover:w-full
              "
            />

            {/* Text */}
            <span
              className="
                relative z-10 pl-4
                transition-colors duration-300
                group-hover:text-white
              "
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
