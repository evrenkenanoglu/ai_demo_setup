import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-emerald-500/30 overflow-x-hidden">

            {/* 1. ADVANCED BACKGROUND: Animated Spotlight & Grid */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-20 brightness-100 contrast-150 pointer-events-none"
                    style={{ backgroundImage: `url('https://vercel.app')` }} />
            </div>

            <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">

                {/* Navigation */}
                <nav className="grid grid-cols-3 items-center mb-32">
                    <div className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                        <Link href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>

                    {/* Center Logo */}
                    <div className="flex justify-center">
                        <div className="relative w-96 h-48 transition-transform hover:scale-105 duration-500">
                            <Image
                                src="/UniverseStars_Logo2.png"
                                alt="UniverseStars Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    <div className="flex justify-end items-center gap-4">
                        <div className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                            v1.2 Stable
                        </div>
                        <Link href="/contact" className="px-5 py-2 border border-white/10 rounded-full text-[11px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all">
                            Request Demo
                        </Link>
                    </div>
                </nav>

                {/* Brand Header Section */}
                <div className="flex flex-col items-center justify-center mb-24 mt-12">
                    <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white">
                        UNIVERSE STARS
                    </h1>
                    <div className="flex items-center gap-4 mt-4 w-full justify-center">
                        <div className="h-[1px] w-16 bg-gray-800" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">
                            AI SOLUTIONS
                        </span>
                        <div className="h-[1px] w-16 bg-gray-800" />
                    </div>
                </div>

                {/* Hero Section */}
                <section className="text-center mb-40">
                    {/* UPDATED: Compliance Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Built for HIPAA & SOC2 Compliance
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                        The Enclave for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Professional AI.</span>
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                        Sovereign intelligence for legal counsel and clinical research. <br className="hidden md:block" />
                        Zero-knowledge architecture. Localized inference. Total control.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-black h-14 px-10 rounded-xl font-bold hover:scale-[1.02] transition-transform">Get Enterprise Access</button>
                        <button className="bg-white/5 border border-white/10 backdrop-blur-md h-14 px-10 rounded-xl font-bold hover:bg-white/10 transition-all">View Security Stack</button>
                    </div>
                </section>

                {/* Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                    {/* Main Feature */}
                    <div className="md:col-span-2 md:row-span-2 relative overflow-hidden border border-white/10 rounded-3xl bg-[#080808] p-12 group">
                        <div className="relative z-20">
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Deep Document Reasoning</h3>
                            <p className="text-gray-500 max-w-md font-light leading-relaxed">
                                Our proprietary RAG engine doesn&apos;t just search; it understands hierarchical legal relationships and medical cross-references.
                            </p>
                        </div>
                        <div className="absolute bottom-0 right-0 w-[80%] h-[60%] bg-[#0c0c0c] border-t border-l border-white/5 rounded-tl-2xl p-6 transition-transform group-hover:-translate-y-2 duration-700">
                            <div className="space-y-4">
                                <div className="h-2 w-full bg-white/5 rounded-full" />
                                <div className="h-2 w-[80%] bg-white/5 rounded-full" />
                                <div className="h-2 w-[90%] bg-emerald-500/20 rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* UPDATED: Secure Card (Compliance) */}
                    <div className="relative overflow-hidden border border-white/10 rounded-3xl bg-[#080808] p-8">
                        <div className="h-12 w-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-emerald-500">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.744c0 5.548 4.076 10.21 9 11.586 4.924-1.376 9-6.038 9-11.586 0-1.29-.245-2.522-.689-3.656A11.959 11.959 0 0112 2.714z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2 tracking-tight">HIPAA Compliant</h3>
                        <p className="text-sm text-gray-500 font-light">Architecture designed for full data sovereignty and encrypted isolation.</p>
                    </div>

                    {/* Speed Card */}
                    <div className="relative overflow-hidden border border-white/10 rounded-3xl bg-[#080808] p-8 group">
                        <div className="absolute top-0 right-0 p-8">
                            <span className="text-4xl font-bold text-white/5 group-hover:text-emerald-500/20 transition-colors duration-500">1.2s</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 pt-20 tracking-tight">Low Latency</h3>
                        <p className="text-sm text-gray-500 font-light">Optimized inference engines for real-time analysis of heavy datasets.</p>
                    </div>
                </section>

            </div>
        </main>
    );
}
