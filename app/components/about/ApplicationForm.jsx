'use client';

import { useState } from "react";
import SubmittButton from "../global/SubmitButton";

export default function Application() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const [submitStatus, setSubmitStatus] = useState({
        submitting: false,
        succeeded: false,
        error: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async () => {
        // Reset submit status
        setSubmitStatus({ submitting: false, succeeded: false, error: false });

        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        
        if (!formData.message.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }

        // Form is valid - submit to Formspree
        setSubmitStatus({ submitting: true, succeeded: false, error: false });

        try {
            const response = await fetch('https://formspree.io/f/xbdjvypw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus({ submitting: false, succeeded: true, error: false });
                // Reset form
                setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    message: "",
                });

                // Clear success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus({ submitting: false, succeeded: false, error: false });
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus({ submitting: false, succeeded: false, error: true });
        }
    };

    return (
        <section className="bg-white text-black px-4 2xl:px-0 py-10 md:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Left */}
                    <div className="w-full md:w-1/3">
                        <p className="text-base md:text-xl font-medium tracking-tight">
                            [Application Form]
                        </p>
                    </div>

                    {/* Right */}
                    <div className="w-full md:w-2/3 flex flex-col gap-12">

                        {/* Success Message */}
                        {submitStatus.succeeded && (
                            <div className="bg-green-100 border border-green-500 text-green-700 px-6 py-4 rounded">
                                Thank you for your application! We'll get back to you soon.
                            </div>
                        )}

                        {/* Error Message */}
                        {submitStatus.error && (
                            <div className="bg-red-100 border border-red-500 text-red-700 px-6 py-4 rounded">
                                Something went wrong. Please try again later.
                            </div>
                        )}

                        {/* Full Name + Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col">
                                <label className="text-sm opacity-70 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    disabled={submitStatus.submitting}
                                    className={`border-b py-2 focus:outline-none disabled:opacity-50 ${errors.fullName ? "border-red-500" : "border-black"
                                        }`}
                                />
                                {errors.fullName && (
                                    <span className="text-red-500 text-xs mt-1">
                                        {errors.fullName}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="text-sm opacity-70 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={submitStatus.submitting}
                                    className="border-b border-black py-2 focus:outline-none disabled:opacity-50"
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
                                disabled={submitStatus.submitting}
                                className={`border-b py-2 focus:outline-none disabled:opacity-50 ${errors.email ? "border-red-500" : "border-black"
                                    }`}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs mt-1">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label className="text-sm opacity-70 mb-2">
                                Message *
                            </label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                disabled={submitStatus.submitting}
                                className={`border-b py-2 resize-none focus:outline-none disabled:opacity-50 ${errors.message ? "border-red-500" : "border-black"
                                    }`}
                            />
                            {errors.message && (
                                <span className="text-red-500 text-xs mt-1">
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        {/* Submit */}
                        <div onClick={submitStatus.submitting ? null : handleSubmit}>
                            <SubmittButton text="Submit Application" disabled={submitStatus.submitting}/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}