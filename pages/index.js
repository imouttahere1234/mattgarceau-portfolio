import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt Garceau | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-6 max-w-5xl mx-auto space-y-16">
        <section className="text-center space-y-4">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold">
            Matt Garceau
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl text-gray-600">
            Marketing Manager | Data Storyteller | Design-Driven Strategist
          </motion.p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p>
            I'm an innovative marketing professional with 6+ years of experience elevating brands and transforming customer experiences. I blend data insights with creative storytelling to drive visibility and sustainable growth. From modernizing real estate content to expanding digital reach, I thrive in fast-paced, creative environments.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border rounded-xl p-4 space-y-2 shadow">
              <h3 className="text-lg font-bold">Reports on Housing</h3>
              <p>Revamped bi-weekly reports with visuals and storytelling, driving a 108% subscriber increase.</p>
            </div>
            <div className="border rounded-xl p-4 space-y-2 shadow">
              <h3 className="text-lg font-bold">Dreamleague Inc.</h3>
              <p>Organized esports tournaments for 8 universities, generating $550K in new revenue.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Resume</h2>
          <a href="/Matt%20Garceau%20Resume%20-%20Marketing%20Manager.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            View / Download Resume
          </a>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p>Email: <a href="mailto:matthewfgarceau@gmail.com" className="text-blue-600">matthewfgarceau@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/mattgarceau" target="_blank" className="text-blue-600">linkedin.com/in/mattgarceau</a></p>
        </section>
      </main>
    </>
  )
}