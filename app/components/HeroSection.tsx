import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HeroSection() {
  return (
  <section id="hero" className="flex items-center lg:max-w-[1600px] sm:max-w-[90%] mx-auto py-[60px]">
    <div className="w-1/2 p-4">
      <h1 className="font-pexico">I'M HERALD <br />SANDOY</h1>

      <div className="intro-pos mb-10 mt-10">
        <h2 className="font-proximaBold leading-[40px]">Web Developer</h2>
        <h3 className="font-proximaSemi">Based on Philippines</h3>
      </div>

      <Link href="/">
        <div className="relative bg-blue-bg text-white cta-prop">
          <div className="skew-top bg-blue-bg"></div>
            <p className="z-10 font-pexico">CONTACT ME</p>
          <div className="skew-bottom bg-blue-bg"></div>
        </div>
      </Link>
  
    </div>
    <div className="w-1/2 p-4 relative min-h-[500px]">
        <Image className="absolute top-0" src="/grey-herald.png" width="1247" height="1193" alt="herald hero image" />
    </div>
  </section>
  )
}

export default HeroSection