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
          className="space-y-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Saurabh Kandari
          </h1>

          <p className="text-xl text-gray-300">
            Senior React Native Developer • 4+ Years Experience
          </p>

          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Results-driven React Native engineer specializing in high-performance 
            cross-platform mobile applications. Strong expertise in Redux Toolkit, 
            API integrations, performance optimization, and production deployments 
            across iOS & Android ecosystems.
          </p>

          <div className="flex justify-center gap-4 pt-6">
            <Link
              href="https://github.com/Saurabh123kandari"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/saurabh-kandari-862a68161"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 transition"
            >
              LinkedIn
            </Link>
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
                items: ["React Native (iOS & Android)", "Native Modules", "Push Notifications", "React Navigation"]
              },
              {
                title: "State & APIs",
                items: ["Redux Toolkit", "Redux-Saga", "RTK Query", "REST APIs", "Firebase"]
              },
              {
                title: "Optimization & Testing",
                items: ["Performance Tuning", "Memory Leak Debugging", "Jest", "Unit & Integration Testing"]
              }
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
        <section>
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Professional Experience
          </h2>

          <div className="space-y-10">

            <div className="bg-gradient-to-r from-[#111827] to-[#1f2937] p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-semibold">
                Senior React Native Developer – Chetu INC
              </h3>
              <p className="text-gray-400 mt-2">
                Improved application performance by 30% and reduced load time by 25%.
                Implemented Redux Toolkit architecture reducing API handling issues by 40%.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#111827] to-[#1f2937] p-8 rounded-3xl border border-gray-800">
              <h3 className="text-xl font-semibold">
                React Native Developer – Recraft Relic Pvt Ltd
              </h3>
              <p className="text-gray-400 mt-2">
                Integrated Stripe, Twilio, and Firebase APIs, increasing engagement by 20%.
                Resolved 100+ production bugs improving stability and crash rates.
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                name: "Health Care App",
                tech: "React Native • Redux • Firebase • Twilio",
                desc: "Engineered Medicare platform achieving 30% revenue growth in 3 months."
              },
              {
                name: "RV’s E-Commerce",
                tech: "React Native • Stripe • REST APIs",
                desc: "Built scalable shopping and payment gateway integration."
              },
              {
                name: "Cuperos Dating App",
                tech: "React Native • Firebase • Redux",
                desc: "Developed social media features including messaging & notifications."
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-black border border-gray-800 p-6 rounded-2xl shadow-xl"
              >
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.tech}</p>
                <p className="text-gray-500 mt-3">{project.desc}</p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
          <p className="text-gray-400">Open to Senior React Native opportunities</p>
          <p className="mt-4 font-medium">saurabh.kandari@gmail.com</p>
        </section>

      </div>
    </main>
  );
}
