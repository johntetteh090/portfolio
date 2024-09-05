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

        <div className="mt-10 grid grid-cols-3 gap-6">
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
            modalVisible={modalVisible}
            modalImages={(images) => (modalImages) && modalImages(images)}
          />
          <ProjectCard
            appName={"Ecoville"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/ecoville/ecoville1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
          <ProjectCard
            appName={"School Website"}
            description={"description"}
            appLink={"http://schoolproject.atlanticshipping.org/"}
            images={["/images/school_website/image1.png"]}
          />
        </div>
      </div>

     
      
    </section>
  );
}
