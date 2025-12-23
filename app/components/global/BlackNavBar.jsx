'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { usePageTransition } from "@/app/providers/PageTransitionProvider";

export default function BlackNavbar() {
  // const router = useRouter();
  // const { startTransition } = usePageTransition();

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT US", href: "/about" },
    { label: "CONTACT", href: "/contact" },
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
    <nav
      className={`
        fixed top-0 z-50 w-full px-16 py-2 flex items-center justify-between text-black
        transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo1.webp"
          alt="Reach Logo"
          width={120}
          height={40}
          className="h-20 w-auto"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-12 text-sm tracking-wider">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            // onClick={handleNav(href)}
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
          </Link>
        ))}
      </div>
    </nav>
  );
}
