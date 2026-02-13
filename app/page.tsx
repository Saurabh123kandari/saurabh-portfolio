import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* HERO SECTION */}
        <section className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Saurabh Kandari
          </h1>

          <p className="text-xl text-gray-400">
            Senior React Native Developer • 4 Years Experience
          </p>

          <p className="text-gray-500 max-w-2xl">
            Building scalable, high-performance mobile applications using 
            React Native CLI, TypeScript, and native integrations. 
            Specialized in performance optimization, offline-first architecture, 
            and real-time features.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-80 transition"
            >
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
            >
              LinkedIn
            </Link>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Technical Expertise</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-4">Mobile Development</h3>
              <ul className="space-y-2 text-gray-400">
                <li>React Native CLI</li>
                <li>TypeScript</li>
                <li>Redux / Zustand</li>
                <li>Navigation & Deep Linking</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-4">Architecture & Data</h3>
              <ul className="space-y-2 text-gray-400">
                <li>SQLite (Offline-first)</li>
                <li>REST APIs</li>
                <li>Firebase</li>
                <li>Environment Config (UAT / Prod)</li>
              </ul>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
              <h3 className="text-xl font-semibold mb-4">Advanced Capabilities</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Twilio Video Integration</li>
                <li>Push Notifications</li>
                <li>Performance Optimization</li>
                <li>Memory Management</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PROJECT SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Featured Project</h2>

          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#111111] p-8 rounded-3xl border border-gray-800 hover:border-gray-600 transition">
            <h3 className="text-2xl font-semibold mb-4">NextSkill – E-Learning App</h3>

            <p className="text-gray-400 max-w-3xl leading-relaxed">
              Designed and developed a scalable mobile learning platform using 
              React Native CLI with SQLite-based offline storage and video 
              integration. Implemented optimized FlatList rendering, 
              efficient image caching, and environment-based configuration 
              for seamless UAT and production deployments.
            </p>

            <div className="flex gap-4 mt-6">
              <span className="px-4 py-2 bg-black border border-gray-700 rounded-xl text-sm">
                React Native
              </span>
              <span className="px-4 py-2 bg-black border border-gray-700 rounded-xl text-sm">
                SQLite
              </span>
              <span className="px-4 py-2 bg-black border border-gray-700 rounded-xl text-sm">
                Twilio
              </span>
              <span className="px-4 py-2 bg-black border border-gray-700 rounded-xl text-sm">
                TypeScript
              </span>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-semibold mb-6">Let’s Connect</h2>

          <p className="text-gray-400">
            Open to senior React Native opportunities and challenging 
            mobile engineering roles.
          </p>

          <p className="mt-4 text-white font-medium">
            your-email@gmail.com
          </p>
        </section>

      </div>
    </main>
  );
}
