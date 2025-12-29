'use client';

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import AnimatedH2 from "../global/AnimatedH2";
import Button from "../global/Button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const sectionRef = useRef(null);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Fetch team from Sanity
  useEffect(() => {
    client
      .fetch(`*[_type == "teamMember"] | order(order asc, name asc){
        name,
        title,
        image,
        bio
      }`)
      .then(setTeamMembers)
      .catch(console.error);
  }, []);

  // Prevent body scroll when panel is open
  useEffect(() => {
    document.body.style.overflow = selectedMember ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  return (
    <section
      ref={sectionRef}
      className="bg-white text-black px-4 2xl:px-0 mt:pt-20 pb-20 md:pb-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="w-full md:w-1/3">
            <AnimatedH2 isVisible={isVisible}>(Meet the Team)</AnimatedH2>
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              ...each member of our team delivers the same care and integrity
              that has come to define Reach Design Studio.
            </h3>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedMember(member)}
              style={{ transitionDelay: `${idx * 140}ms` }}
              className={`
                flex flex-col gap-6 cursor-pointer group
                transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
            >
              {/* Image */}
              <div className="w-full h-115 overflow-hidden">
                {member.image && (
                  <img
                    src={urlFor(member.image).width(900).url()}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold tracking-tight group-hover:opacity-70 transition-opacity">
                  {member.name}
                </p>
                <p className="text-base uppercase font-medium opacity-90">
                  {member.title}
                </p>
                <button className="text-sm font-medium underline underline-offset-4 text-left hover:opacity-70 transition-opacity mt-1">
                  View Bio
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSelectedMember(null)}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-150 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          selectedMember ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {selectedMember && (
          <div className="h-full flex flex-col">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="overflow-y-auto h-full">
              <div className="w-full h-100 md:h-125">
                <img
                  src={urlFor(selectedMember.image).width(1200).url()}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-lg uppercase font-medium mb-8">
                  {selectedMember.title}
                </p>
                <p className="text-black leading-relaxed opacity-80">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <Button text="Contact Us" href="/contact" />
      </div>
    </section>
  );
}
