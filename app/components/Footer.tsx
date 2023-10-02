import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faEnvelope as faSolidEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="flex justify-between max-w-[95%] mx-auto pt-5 pb-5">
      <div className="text-white">
        <p className="text-[#00386f] font-proximaSemi">Allrights Reserved 2023 @ heraldsandy</p>
      </div>
      <div className="text-[#00386f]">
        <Link className="pr-5" href="https://www.facebook.com/sandyherald93" target='_blank'><FontAwesomeIcon icon={faFacebook} /></Link>
        <Link className="pr-5" href="https://www.linkedin.com/in/john-herald-sandoy-09ab23139/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link>
        <Link href="mailto:sandoyherald1993@gmail.com" target='_blank'><FontAwesomeIcon icon={faEnvelope} /></Link>
      </div>
    </footer>
  )
}

export default Footer