// @flow strict
import Image from "next/image";

import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";


function Education() {
  return (
    <div id="education" className="mt-12">

  <div className='mb-4 flex items-center'>
				<span className='bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 text-lg font-semibold rounded-lg shadow-lg dark:from-purple-800 dark:to-blue-700'>
					Education
				</span>
				<div className='ml-4 h-0.5 flex-1 bg-gradient-to-r from-purple-600 dark:from-purple-400 to-transparent' />
			</div>

     

      <div className="py-8">
       

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium ">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Education;