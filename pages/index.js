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
      </main>
    </>
  )
}