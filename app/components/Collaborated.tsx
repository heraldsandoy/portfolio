import React from "react"
import Link from "next/link"
import Image from "next/image"

function Collaborated() {
  return (
    <section id="collab" className="max-w-[100%]">
      <div className="relative bg-green-bg w-full limp-c">
        <div className="absolute inset-x-0 top-0 bg-green-bg transform -skew-y-2 origin-top-left h-24 limp"></div>
        <div className="text-center py-20">
          <h2 className="text-white text-[35px] font-pexico">Projects I collaborated with</h2>
        </div>
        <div className="flex items-center mx-auto column-mobile">
          <div className="w-1/2 max-m gray-img-bg min-h-[700px] relative">
            <Image className="absolute top-[80px]" src="/Keri.png" width="830" height="785" alt="Keri" />
          </div>

          <div className="w-1/2 max-m relative min-h-[700px] bg-blue-bg flex flex-col justify-center items-center section-reset">
            <div className="max-w-[60%] inner-child">
              <div className="intro-pos mb-10 mt-10">
                <h2 className="font-proximaBold leading-[40px]">Keri Delivery</h2>
                <p className="text-white pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl non arcu accumsan rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>

              <Link href="/">
                <div className="relative bg-green-bg text-white cta-prop">
                  <div className="skew-top bg-green-bg z-10"></div>
                  <p className="z-20 font-pexico">VIEW PROJECT</p>
                  <div className="skew-bottom bg-green-bg z-10"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-green-bg w-full limp-c">
        <div className="flex items-center mx-auto reverse-col">
          <div className="w-1/2 max-m relative min-h-[700px] bg-blue-bg flex flex-col justify-center items-center section-reset">
            <div className="max-w-[60%] inner-child">
              <div className="intro-pos mb-10 mt-10">
                <h2 className="font-proximaBold leading-[40px]">Chris-Pay</h2>
                <p className="text-white pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nisl non arcu accumsan rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 max-m gray-img-bg min-h-[700px] relative flex justify-center">
            <Image className="self-center" src="/chrispay.png" width="513" height="447" alt="Keri" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collaborated
