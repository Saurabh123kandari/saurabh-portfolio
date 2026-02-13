export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Saurabh Kandari
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          Senior React Native Developer • 4 Years Experience
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">About</h2>
            <p className="text-gray-300">
              React Native CLI developer specializing in scalable mobile 
              architecture, SQLite integration, Twilio video calling, 
              performance optimization, and production deployments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="grid grid-cols-2 gap-2 text-gray-300">
              <li>React Native CLI</li>
              <li>TypeScript</li>
              <li>SQLite</li>
              <li>Redux / Zustand</li>
              <li>Firebase</li>
              <li>Twilio Video</li>
              <li>Performance Optimization</li>
              <li>REST APIs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Projects</h2>
            <div className="bg-gray-900 p-4 rounded-xl">
              <h3 className="text-xl font-semibold">NextSkill</h3>
              <p className="text-gray-400 mt-2">
                E-learning mobile application built using React Native CLI 
                with SQLite offline storage, video integration, and scalable architecture.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact</h2>
            <p className="text-gray-300">
              Email: your-email@gmail.com
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
