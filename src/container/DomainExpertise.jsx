import React from 'react';
import SolPara from '../components/solutions/SolPara';
import Award from '../components/solutions/Award';
import { domainExpertData } from '../data/webDevelopment';

export default function DomainExpertise() {
  return (
  
     <section className="w-full bg-white lg:flex mb-10 lg:mt-10 ">
        <div className="m-5 ml-8 lg:w-1/2">
          <div className="mt-10 lg:ml-10">
            <h2
              className=" font-semibold
                  text-2xl
                  font-sans
                  md:text-3xl
                  text-black
                  mb-4 
                  md:mt-0 mt-8"
            >
              Our Domain Expertise
            </h2>
          </div>
          <SolPara data={domainExpertData} />
        </div>
        <div className="ml-8 lg:w-1/2 lg:mt-8 lg:mb-20 ">
          <Award data={domainExpertData} />
        </div>
      </section>
   
  )
}





