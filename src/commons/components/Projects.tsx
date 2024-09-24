import React from "react";
import ProjectCard from "./ProjectCard";

interface Props{
  modalVisible?:() => void
  modalImages?: (data: string[]) => void;
}

export default function Projects({modalVisible,modalImages} : Props) {
  return (
    <section id="feed" className="relative">
      <div className="mt-8">
        <p className="text-[40px] font-bold text-black">My Feeds</p>

        <div className="mt-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <ProjectCard
            appName={"School Website"}
            description={
              "A responsive school website focused on providing easy access to information for students, parents, and staff. " + 
              "And also as a platform for student admissions"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={
              [
              "/images/school_website/image1.png",
              "/images/school_website/image2.png",
            "/images/school_website/image3.png"]
            }
            modalVisible={modalVisible}
            modalImages={(images) => (modalImages) && modalImages(images)}
          />
          <ProjectCard
            appName={"Ecoville"}
            description={"Ecoville is an innovative community project focused on sustainable living and eco-friendly practices." +
              "It integrates green technologies, renewable energy sources, and environmentally responsible design to create a self-sustaining and eco-conscious neighborhood. "}
            appLink={"https://ecoville-africa.com/"}
            images={
              ["/images/ecoville/ecoville1.png",
                "/images/ecoville/ecoville2.png",
                "/images/ecoville/ecoville3.png",

              ]
            }
            modalVisible={modalVisible}
            modalImages={(images) => (modalImages) && modalImages(images)}
          />
          <ProjectCard
            appName={"Consolidated Shipping"}
            description={"Consolidated shipping solution to streamline logistics and reduce costs for a client." + 
              "The system allowed multiple smaller shipments to be combined into a single larger shipment," + 
              "optimizing transport efficiency and cutting down shipping costs by 25%."}
            appLink={"https://stg.consolidatedlt.com/"}
            images={
              ["/images/consolidated/consolidated1.png",
                "/images/consolidated/consolidated2.png",
                "/images/consolidated/consolidated3.png",

              ]
            }
            modalVisible={modalVisible}
            modalImages={(images) => (modalImages) && modalImages(images)}
          />
          <ProjectCard
            appName={"Propearnly"}
            description={"Propearnly is a comprehensive real estate platform designed to simplify the process of buying " + 
              "properties across the United Kingdom. Whether you're a first-time buyer, an investor, or seeking a " +
              "second home, our platform offers a seamless experience with advanced search filters, real-time property " +
              "listings, and personalized recommendations."}
            appLink={"https://propearnly.com/"}
            images={
              ["/images/propearnly/image1.png",
                "/images/propearnly/image2.png",
                "/images/propearnly/image3.png",
              ]
            }
            modalVisible={modalVisible}
            modalImages={(images) => (modalImages) && modalImages(images)}
          />
          <ProjectCard
            appName={"School Management System"}
            description={"SMS is an all-in-one school management system designed to streamline administrative, " + 
              "academic, and communication processes within educational institutions. "}
            appLink={"https://sms.gd-africa.com/"}
            images={
              ["/images/sms/image1.png",
                "/images/sms/image2.png",
                "/images/sms/image3.png",
              ]
            }
            modalVisible={modalVisible}
            modalImages={(images) => (modalImages) && modalImages(images)}
          />
        </div>
      </div>

     
      
    </section>
  );
}
