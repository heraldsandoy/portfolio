import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main>
        <HeroSection />
        <Projects />
    </main>
  )
}
