import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

  return (
    <nav className="flex justify-between items-center min-h-[120px] max-w-[95%] mx-auto">
      <div className="logo-place">
          <Image src="/logo.png" width={118} height={55} alt="logo" />
      </div>

      <div className="main-menu flex font-pexico">
        <Link href="/">Porfolio</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>

      <div className="resume">
        <Link href="/">
          <div className="relative bg-blue-bg text-white cta-prop">
            <div className="skew-top bg-blue-bg"></div>
              <p className="z-10 font-pexico">RESUME</p>
            <div className="skew-bottom bg-blue-bg"></div>
          </div>
        </Link>
      </div>
    </nav>
  )
}