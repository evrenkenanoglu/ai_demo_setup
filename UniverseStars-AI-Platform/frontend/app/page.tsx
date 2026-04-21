export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-12">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-24">
        <h1 className="text-xl font-bold tracking-tighter">UNIVERSESTARS</h1>
        <div className="text-sm text-gray-500">Secure Analysis Enclave v1.2</div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          Intelligence for the Legal & Medical Frontier.
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Private, sovereign, and audit-ready infrastructure for professional AI analysis.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-200 transition">
          Request Enterprise Access
        </button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="border border-gray-800 p-8 rounded-lg bg-[#0f0f0f]">
          <h2 className="text-2xl font-semibold mb-4">Document Analysis</h2>
          <p className="text-gray-400">Securely process restricted legal and clinical datasets with full audit logging.</p>
        </div>
        <div className="border border-gray-800 p-8 rounded-lg bg-[#0f0f0f]">
          <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
          <p className="text-gray-400">HIPAA & SOC2 Type II ready architecture designed for high-trust environments.</p>
        </div>
      </div>
    </main>
  );
}