import React from "react";

import Skills from "./Skills";

export default function ToolsAndSkills() {
  return (
    <div className="pt-7 mt-24 px-16 bg-tools-gradient rounded-3xl pb-[4rem]">
      <p className="font-bold text-[20px] mb-7">Tool & Skills</p>

      <div className="flex justify-between">
        <Skills
          image={'/images/tools-and-skills/nextjs.png'}
          name={"Next js"}
        />
        <Skills
          image={'/images/tools-and-skills/flutter.png'}
          name={"Flutter"}
        />
        <Skills
          image={'/images/tools-and-skills/reactjs.png'}
          name={"React js"}
          removeBar={true}
        />
      </div>

      <div className="flex justify-between mt-8">
        <Skills
          image={'/images/tools-and-skills/devOps.png'}
          name={"Dev Ops"}
          width="w-[48px]"
          height="h-[37px]"
        />
        <Skills
          image={'/images/tools-and-skills/firebase.png'}
          name={"Firebase"}
        />
        <Skills
          image={'/images/tools-and-skills/tailwindcss.png'}
          name={"Tailwind CSS"}
          removeBar={true}
          height="h-[20px]"
          width="w-[37px]"
        />
      </div>

      <div className="flex justify-between mt-8">
        <Skills
          image={'/images/tools-and-skills/ui-ux.jpg'}
          name={"UI/UX"}
        />
        <Skills
          image={'/images/tools-and-skills/vscode.png'}
          name={"VS Code"}
        />
        <Skills
          image={'/images/tools-and-skills/figma.png'}
          name={"Figma"}
          removeBar={true}
          height="h-[35px]"
          width="w-[35px]"
        />
      </div>

      <div className="flex justify-between mt-8">
        <Skills
          image={'/images/tools-and-skills/android-studio.png'}
          name={"Android Studio"}
          removeBar={true}
        />
        
      </div>
    </div>
  );
}
