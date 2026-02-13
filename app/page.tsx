"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0f172a] to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-28">
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center py-24 overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building High-Performance
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                React Native Applications
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-200 font-semibold tracking-tight">
              Saurabh Kandari • Senior React Native Developer
            </p>

            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              4+ years of experience delivering scalable cross-platform mobile
              solutions across healthcare, e-commerce, and social platforms.
              Specialized in performance optimization, Redux architecture,
              real-time integrations, and production-grade deployments.
            </p>

            {/* Metrics */}
            <div className="flex justify-center gap-8 pt-6 flex-wrap">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">30%</h3>
                <p className="text-gray-400 text-sm">Performance Boost</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-400">25%</h3>
                <p className="text-gray-400 text-sm">Load Time Reduced</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-400">40%</h3>
                <p className="text-gray-400 text-sm">API Issue Reduction</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 pt-8 flex-wrap">
              <a
                href="/SaurabhKandari_ReactNative_4yearExp.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                Download Resume
              </a>
              {/* <a
                href="/SaurabhKandari_ReactNative_4yearExp.pdf"
                download
                className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                Download Resume
              </a> */}
              <a
                href="https://github.com/Saurabh123kandari"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saurabh-kandari-862a68161"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.section>

        {/* TECHNICAL SKILLS */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mobile Development",
                items: [
                  "React Native (iOS & Android)",
                  "Native Modules",
                  "Push Notifications",
                  "React Navigation",
                ],
              },
              {
                title: "State & APIs",
                items: [
                  "Redux Toolkit",
                  "Redux-Saga",
                  "RTK Query",
                  "REST APIs",
                  "Firebase",
                ],
              },
              {
                title: "Optimization & Testing",
                items: [
                  "Performance Tuning",
                  "Memory Leak Debugging",
                  "Jest",
                  "Unit & Integration Testing",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md border border-gray-800 p-6 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        {/* <section>
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Professional Experience
          </h2>

          <div className="space-y-10">
            <div className="bg-gradient-to-r from-[#111827] to-[#1f2937] p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-semibold">
                Senior React Native Developer – Chetu INC
              </h3>
              <p className="text-gray-400 mt-2">
                Improved application performance by 30% and reduced load time by
                25%. Implemented Redux Toolkit architecture reducing API
                handling issues by 40%.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#111827] to-[#1f2937] p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-semibold">
                React Native Developer – Recraft Relic Pvt Ltd
              </h3>
              <p className="text-gray-400 mt-2">
                Integrated Stripe, Twilio, and Firebase APIs, increasing
                engagement by 20%. Resolved 100+ production bugs improving
                stability and crash rates.
              </p>
            </div>
          </div>
        </section> */}

        {/* PROFESSIONAL EXPERIENCE */}
        <section>
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Professional Experience
          </h2>

          <div className="space-y-12 relative border-l border-gray-800 pl-8">
            {/* CHETU INC */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-10 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50" />

              <div className="bg-gradient-to-br from-[#111827] to-black p-8 rounded-3xl border border-gray-800 group-hover:border-blue-500/50 transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    Senior React Native Developer
                  </h3>
                  <span className="text-sm text-gray-400">
                    Chetu INC • Mar 2023 – Oct 2025 • Noida
                  </span>
                </div>

                <p className="text-gray-400 mb-5">
                  Led cross-platform mobile application development initiatives,
                  delivering scalable architecture and measurable performance
                  improvements.
                </p>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>
                    • Improved application performance by{" "}
                    <span className="text-blue-400 font-semibold">30%</span>{" "}
                    through optimized rendering and state management.
                  </li>
                  <li>
                    • Reduced load time by{" "}
                    <span className="text-green-400 font-semibold">25%</span>{" "}
                    via API optimization and lazy loading strategies.
                  </li>
                  <li>
                    • Implemented Redux Toolkit architecture, cutting API data
                    handling issues by{" "}
                    <span className="text-purple-400 font-semibold">40%</span>.
                  </li>
                  <li>
                    • Collaborated with designers and product managers to ship
                    high-impact features aligned with business goals.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* RECRAFT RELIC */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-10 top-2 w-4 h-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50" />

              <div className="bg-gradient-to-br from-[#1f2937] to-black p-8 rounded-3xl border border-gray-800 group-hover:border-pink-500/50 transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    React Native Developer
                  </h3>
                  <span className="text-sm text-gray-400">
                    Recraft Relic Pvt Ltd • Oct 2021 – Jan 2023 • Mohali
                  </span>
                </div>

                <p className="text-gray-400 mb-5">
                  Built and maintained scalable cross-platform mobile
                  applications with third-party integrations and Agile-driven
                  development processes.
                </p>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>
                    • Integrated{" "}
                    <span className="text-yellow-400 font-semibold">
                      5+ third-party APIs
                    </span>{" "}
                    including Stripe, Twilio & Firebase.
                  </li>
                  <li>
                    • Increased user engagement by{" "}
                    <span className="text-green-400 font-semibold">20%</span>{" "}
                    through feature expansion.
                  </li>
                  <li>
                    • Resolved{" "}
                    <span className="text-blue-400 font-semibold">
                      100+ production bugs
                    </span>
                    , significantly improving crash stability.
                  </li>
                  <li>
                    • Actively participated in Agile ceremonies improving sprint
                    velocity & collaboration.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* PS QUICK IT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -left-10 top-2 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50" />

              <div className="bg-gradient-to-br from-[#0f172a] to-black p-8 rounded-3xl border border-gray-800 group-hover:border-green-500/50 transition">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">System Trainee</h3>
                  <span className="text-sm text-gray-400">
                    PS Quick IT Pvt Ltd • Jul 2019 – Mar 2020 • Noida
                  </span>
                </div>

                <p className="text-gray-400 mb-5">
                  Contributed to web application development and UI optimization
                  following modular and SOLID design principles.
                </p>

                <ul className="space-y-3 text-gray-300 text-sm">
                  <li>
                    • Improved bounce rate by{" "}
                    <span className="text-green-400 font-semibold">15%</span>{" "}
                    through UI/UX enhancements.
                  </li>
                  <li>
                    • Designed modular codebase improving long-term
                    maintainability.
                  </li>
                  <li>
                    • Participated in collaborative brainstorming sessions for
                    feature innovation.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Health Care App */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group bg-gradient-to-br from-[#0f172a] to-black p-8 rounded-3xl border border-gray-800 overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500" />

              <h3 className="text-xl font-semibold mb-3">🏥 Health Care App</h3>

              <p className="text-gray-400 text-sm mb-4">
                Engineered a Medicare mobile platform delivering secure
                healthcare services with real-time communication and scalable
                state management.
              </p>

              <ul className="text-gray-500 text-sm space-y-2 mb-5">
                <li>• Increased revenue by 30% in 3 months</li>
                <li>• Integrated Twilio & Firebase Cloud Messaging</li>
                <li>• Optimized Redux architecture for performance</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full">
                  React Native
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full">
                  Redux
                </span>
                <span className="px-3 py-1 bg-green-900/40 text-xs rounded-full">
                  Firebase
                </span>
                <span className="px-3 py-1 bg-pink-900/40 text-xs rounded-full">
                  Twilio
                </span>
              </div>
            </motion.div>

            {/* RV’s E-Commerce */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group bg-gradient-to-br from-[#111827] to-black p-8 rounded-3xl border border-gray-800 overflow-hidden"
            >
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500" />

              <h3 className="text-xl font-semibold mb-3">
                🛒 RV’s E-Commerce App
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Built a full-featured e-commerce mobile application with
                seamless checkout flow and optimized product listing
                performance.
              </p>

              <ul className="text-gray-500 text-sm space-y-2 mb-5">
                <li>• Integrated Stripe payment gateway</li>
                <li>• Implemented scalable REST API handling</li>
                <li>• Improved checkout efficiency & UI responsiveness</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full">
                  React Native
                </span>
                <span className="px-3 py-1 bg-yellow-900/40 text-xs rounded-full">
                  Stripe
                </span>
                <span className="px-3 py-1 bg-gray-700/60 text-xs rounded-full">
                  REST API
                </span>
              </div>
            </motion.div>

            {/* Cuperos Dating App */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group bg-gradient-to-br from-[#1f2937] to-black p-8 rounded-3xl border border-gray-800 overflow-hidden"
            >
              <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 blur-2xl transition duration-500" />

              <h3 className="text-xl font-semibold mb-3">
                💬 Cuperos – Dating App
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                Developed a social networking platform enabling real-time
                messaging, posts, and push notifications across iOS & Android.
              </p>

              <ul className="text-gray-500 text-sm space-y-2 mb-5">
                <li>• Implemented Firebase real-time updates</li>
                <li>• Built scalable Redux-based state management</li>
                <li>• Enhanced user engagement & notification flow</li>
              </ul>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/40 text-xs rounded-full">
                  React Native
                </span>
                <span className="px-3 py-1 bg-purple-900/40 text-xs rounded-full">
                  Redux
                </span>
                <span className="px-3 py-1 bg-green-900/40 text-xs rounded-full">
                  Firebase
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
          <p className="text-gray-400">
            Open to Senior React Native opportunities
          </p>
          <p className="mt-4 font-medium">saurabh.kandari@gmail.com</p>
        </section>
      </div>
    </main>
  );
}
