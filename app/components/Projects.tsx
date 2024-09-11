// pages/projects.tsx
import React from "react"
import ProjectSlider from "../components/ProjectSlider"
import DeckOfCards from "../components/DeckOfCards"

const cardData = [
  {
    background: "/projects/pbc.png",
    title: "Peter Berry Consultancy",
    description: "Developed using Elementor and WooCommerce, with Zapier integration for the client's CRM. Design assets from Adobe XD were utilized and adapted to create a fully functional website.",
    link: "https://peterberryconsultancy.com"
  },
  {
    background: "/projects/army.png",
    title: "Army Amenities Fund",
    description: "Developed using Advanced Custom Fields Pro. Design assets from Adobe XD were utilized and adapted to create a fully functional website.",
    link: "https://armyamenitiesfund.com.au"
  },
  {
    background: "/projects/jones.png",
    title: "Jones Theatrical Group",
    description: "Developed using Elementor. Design assets from Adobe Photoshop were utilized and adapted to create a fully functional website.",
    link: "https://jonestg.co/"
  },
  {
    background: "/projects/qfab.png",
    title: "Quality Fabrication",
    description: "Developed using Divi Theme builder. Design assets from Adobe Photoshop were utilized and adapted to create a fully functional website.",
    link: "https://www.qualityfabrication.ae/"
  },
  {
    background: "/projects/th-b.png",
    title: "Total Hearing Care",
    description: "Developed using WPBakery builder. Design assets from Figma were utilized and adapted to create a fully functional website.",
    link: "https://totalhearingcare.com/"
  },
  {
    background: "/projects/uniformity.png",
    title: "Uniformity",
    description: "Developed using Advanced Custom Fields Pro. Design assets from Adobe XD were utilized and adapted to create a fully functional website.",
    link: "https://uniformity.com.au/"
  }
]

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="relative bg-blue-bg min-h-[900px]">
        <div className="absolute inset-x-0 top-0 bg-blue-bg transform -skew-y-2 origin-top-left h-24 limp"></div>
        <div className="text-center 2xl:max-w-[1350px] xl:max-w-[90%] lg:max-w-[90%] md:max-w-[90%] mx-auto pt-11">
          <h2 className="text-white text-[35px] font-pexico">Explore some of my recent work</h2>

          <div className="rotator">
            <DeckOfCards cardData={cardData} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
