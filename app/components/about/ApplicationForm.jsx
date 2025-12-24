'use client';

import { useState } from "react";
import WhiteButton from "../global/WhiteButton";
import Button from "../global/Button";

export default function Application() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        if (Object.keys(newErrors).length) {
            setErrors(newErrors);
            return;
        }

        console.log("Application submitted:", formData);
    };

    return (
        <section className="bg-white text-black px-4 2xl:px-0 py-20">
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
                                    className={`border-b py-2 focus:outline-none ${errors.fullName ? "border-red-500" : "border-black"
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
                                    className="border-b border-black py-2 focus:outline-none"
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
                                className={`border-b py-2 focus:outline-none ${errors.email ? "border-red-500" : "border-black"
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
                                className={`border-b py-2 resize-none focus:outline-none ${errors.message ? "border-red-500" : "border-black"
                                    }`}
                            />
                            {errors.message && (
                                <span className="text-red-500 text-xs mt-1">
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        {/* Submit */}
                        <div onClick={handleSubmit}>
                            <Button text="Submit Application"/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
