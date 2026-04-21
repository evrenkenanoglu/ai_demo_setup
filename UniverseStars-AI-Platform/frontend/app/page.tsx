import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 p-8 md:p-12">
        {/* Navigation */}
        <nav className="grid grid-cols-3 items-center mb-32 max-w-7xl mx-auto">
          <div className="hidden md:block">
            <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-medium">
              Enterprise Grade AI
            </span>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-24 transition-transform hover:scale-105 duration-500">
              <Image 
                src="/UniverseStars_Logo1.png" 
                alt="UniverseStars Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <div className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
              <div className="text-[11px] text-gray-300 font-semibold tracking-wide uppercase">
                Secure Enclave v1.2
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
            Sovereign Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.05] bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
            Intelligence for the <br/>
            <span className="italic font-serif">Legal & Medical</span> Frontier.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Private, audit-ready architecture designed for the world&apos;s most sensitive professional datasets.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Request Enterprise Access
            </button>
            <button className="w-full md:w-auto px-10 py-4 rounded-full font-bold text-white border border-white/10 hover:bg-white/5 transition-all">
              View Compliance
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Document Analysis",
              desc: "Securely process restricted legal and clinical datasets with full audit logging and local inference.",
              tag: "Encrypted"
            },
            {
              title: "Compliance",
              desc: "HIPAA & SOC2 Type II ready architecture designed for high-trust, zero-knowledge environments.",
              tag: "Certified"
            }
          ].map((card, i) => (
            <div key={i} className="group relative border border-white/10 p-10 rounded-2xl bg-[#0f0f0f]/50 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 text-[10px] uppercase tracking-widest text-gray-600 font-bold group-hover:text-emerald-500 transition-colors">
                {card.tag}
              </div>
              <h2 className="text-2xl font-semibold mb-4 tracking-tight">{card.title}</h2>
              <p className="text-gray-400 leading-relaxed font-light">
                {card.desc}
              </p>
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
