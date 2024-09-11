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
                <p className="text-white pt-5">Assisted the app development team by creating mobile app pages from design files.</p>
              </div>

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
                <p className="text-white pt-5">Chris Pay offers cloud-based HRMS and payroll solutions. Chris Pay Enterprise offers solutions for workforce scheduling, employee document management, biometrics based attendance management, workflow approvals, employee information management and HR reporting and analytics.
                </p>
                <p className="text-white pt-5">Contributed to the app development team by implementing frontend pages based on design files.</p>
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
