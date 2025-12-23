'use client';

import { useEffect, useRef, useState } from "react";
import AnimatedH2 from "../global/AnimatedH2";
import WhiteButton from "./WhiteButton";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        inquiry: ''
    });
    
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        inquiry: ''
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => sectionRef.current && observer.unobserve(sectionRef.current);
    }, []);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        
        if (name === 'name' && !value.trim()) {
            setErrors(prev => ({ ...prev, name: 'Name is required' }));
        }
        
        if (name === 'email') {
            if (!value.trim()) {
                setErrors(prev => ({ ...prev, email: 'Email is required' }));
            } else if (!validateEmail(value)) {
                setErrors(prev => ({ ...prev, email: 'Please enter a valid email' }));
            }
        }
        
        if (name === 'inquiry' && !value.trim()) {
            setErrors(prev => ({ ...prev, inquiry: 'Inquiry is required' }));
        }
    };

    const handleSubmit = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.inquiry.trim()) {
            newErrors.inquiry = 'Inquiry is required';
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
        // Form is valid - handle submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section
            ref={sectionRef}
            className="bg-black text-white px-4 2xl:px-0 py-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <div className="w-full md:w-1/3">
                        <AnimatedH2 isVisible={isVisible}>(Contact Us)</AnimatedH2>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            ...every great architecture begins with a conversation.
                        </h3>
                    </div>
                </div>

                {/* Form */}
                <div className="flex justify-end">
                    <div className="w-full md:w-2/3 flex flex-col gap-12">
                        {/* Name + Company */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col">
                                <label className="text-sm opacity-70 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`bg-transparent border-b py-2 focus:outline-none ${
                                        errors.name ? 'border-red-500' : 'border-white'
                                    }`}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs mt-1">{errors.name}</span>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm opacity-70 mb-2">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-white py-2 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm opacity-70 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`bg-transparent border-b py-2 focus:outline-none ${
                                    errors.email ? 'border-red-500' : 'border-white'
                                }`}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs mt-1">{errors.email}</span>
                            )}
                        </div>

                        {/* Inquiry */}
                        <div className="flex flex-col">
                            <label className="text-sm opacity-70 mb-2">
                                Inquiry *
                            </label>
                            <textarea
                                rows={4}
                                name="inquiry"
                                value={formData.inquiry}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`bg-transparent border-b py-2 resize-none focus:outline-none ${
                                    errors.inquiry ? 'border-red-500' : 'border-white'
                                }`}
                            />
                            {errors.inquiry && (
                                <span className="text-red-500 text-xs mt-1">{errors.inquiry}</span>
                            )}
                        </div>

                        {/* Submit */}
                        <div onClick={handleSubmit}>
                            <WhiteButton />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}