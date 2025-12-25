'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { usePageTransition } from "@/app/providers/PageTransitionProvider";

export default function Navbar() {
  // const router = useRouter();
  // const { startTransition } = usePageTransition();

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const isBlackSection = entry.target.classList.contains('bg-black');
            setIsDark(isBlackSection);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px 0px 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Expertise", href: "/expertise" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  /*
  const handleNav = (href) => (e) => {
    e.preventDefault();

    startTransition(() => {
      router.push(href);
    });
  };
  */

  return (
    <>
      <nav
        className={`
          fixed top-0 z-50 w-full px-4 md:px-16 py-2 flex items-center justify-between
          transition-all duration-500 ease-in-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
          ${isDark ? "text-white" : "text-black"}
          ${scrolled ? (isDark ? "bg-black/10 backdrop-blur-sm shadow-sm" : "bg-white/10 backdrop-blur-sm shadow-sm") : ""}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo1.webp"
            alt="Reach Logo"
            width={120}
            height={40}
            className="h-16 md:h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-12 text-sm tracking-wider">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              // onClick={handleNav(href)}
              className="group relative flex items-center pr-4"
            >
              {/* Expanding background */}
              <span
                className={`
                  absolute left-0 top-1/2 -translate-y-1/2
                  h-5 w-3 transition-all duration-300 ease-out
                  group-hover:w-full
                  ${isDark ? "bg-white" : "bg-black"}
                `}
              />

              {/* Text */}
              <span
                className={`
                  relative z-10 pl-4 uppercase
                  transition-colors duration-300
                  ${isDark ? "group-hover:text-black" : "group-hover:text-white"}
                `}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Animated Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`
              block h-0.5 w-7 transition-all duration-300 ease-in-out
              ${mobileMenuOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"}
              ${isDark ? "bg-white" : "bg-black"}
            `}
          />
          <span
            className={`
              block h-0.5 w-7 transition-all duration-300 ease-in-out
              ${mobileMenuOpen ? "opacity-0" : "opacity-100"}
              ${isDark ? "bg-white" : "bg-black"}
            `}
          />
          <span
            className={`
              block h-0.5 w-7 transition-all duration-300 ease-in-out
              ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"}
              ${isDark ? "bg-white" : "bg-black"}
            `}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-white
          transition-transform duration-500 ease-in-out md:hidden origin-top
          ${mobileMenuOpen ? "scale-y-100" : "scale-y-0"}
        `}
      >
        <div className="flex flex-col items-start justify-start h-full pt-32 px-8 gap-6">
          {navLinks.map(({ label, href }, index) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={`
                text-black text-2xl font-bold tracking-normal
                transition-all duration-500 ease-out
                ${mobileMenuOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 -translate-y-4"
                }
              `}
              style={{
                transitionDelay: mobileMenuOpen ? `${100 + index * 100}ms` : '0ms'
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}