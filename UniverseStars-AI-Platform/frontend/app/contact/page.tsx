'use client';
import { useState, useRef } from 'react';
import { StarExplosion } from '@/components/StarExplosion';

export default function Contact() {
    const[showExplosion, setShowExplosion] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleButtonClick = async () => {
        // 1. Check if the form exists
        if (!formRef.current) return;

        // 2. Trigger native HTML5 validation (checks 'required' fields)
        if (!formRef.current.reportValidity()) {
            return; // Stop execution if validation fails
        }

        // 3. Trigger animation
        console.log("Validation passed, triggering animation");
        setShowExplosion(true);

        // 4. Submit data in the background
        const formData = new FormData(formRef.current);
        try {
            await fetch("https://formspree.io/f/your_form_id", { // Replace with your actual hashid
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            console.log("Data sent successfully");
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    const handleAnimationComplete = () => {
        setShowExplosion(false);
        alert("Request successfully submitted!");
        formRef.current?.reset(); // Clear the form
    };

    return (
        <main className="min-h-screen bg-[#020202] text-white p-6 md:p-12 flex flex-col justify-center items-center">
            <StarExplosion
                isVisible={showExplosion}
                onClose={handleAnimationComplete}
            />

            <div className="max-w-xl w-full">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 tracking-tight">Request Enterprise Access</h1>
                    <p className="text-gray-400">
                        UniverseStars is an invitation-only infrastructure. Please provide your details to initiate a security vetting process.
                    </p>
                </div>

                <form
                    ref={formRef}
                    className="space-y-6 border border-white/10 p-8 rounded-3xl bg-[#050505]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="bg-[#080808] border border-white/10 p-4 rounded-xl focus:border-emerald-500 outline-none transition"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Institutional Email"
                            required
                            className="bg-[#080808] border border-white/10 p-4 rounded-xl focus:border-emerald-500 outline-none transition"
                        />
                    </div>

                    <input
                        type="text"
                        name="organization"
                        placeholder="Organization / Firm"
                        required
                        className="w-full bg-[#080808] border border-white/10 p-4 rounded-xl focus:border-emerald-500 outline-none transition"
                    />

                    <textarea
                        name="message"
                        placeholder="Briefly describe your use case"
                        rows={4}
                        required
                        className="w-full bg-[#080808] border border-white/10 p-4 rounded-xl focus:border-emerald-500 outline-none transition"
                    ></textarea>

                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-all"
                    >
                        Submit Request
                    </button>
                </form>

                <div className="mt-12 text-center border-t border-white/5 pt-8">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                        Alternatively, contact us directly at:
                    </p>
                    <a href="mailto:access@universestars.ai" className="text-emerald-500 font-bold hover:underline">
                        access@universestars.ai
                    </a>
                </div>
            </div>
        </main>
    );
}