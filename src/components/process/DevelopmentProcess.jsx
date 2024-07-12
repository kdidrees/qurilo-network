import { MdPlayArrow } from "react-icons/md";
import { DevelopmentProcessData } from "../../data/applicationDevelopment";
import Heading from "../heading/Heading";

const DevelomentProcess = () => {
  return (
    <>
      <div className="w-full pt-5 pb-9 bg-white">
       <div className="pt-6">
       <Heading
          title={`Process We Follow`}
          desc={`  Here is a streamlined overview of our custom web app development
          process:`}
        />

       </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-3 mx-16  md:mt-8 mt-4">
          {DevelopmentProcessData.map((devdata, index) => {
            const bgColor = index % 2 === 0 ? "bg-blue" : "bg-red";
            const txtColor = index % 2 === 0 ? "text-white" : "text-black";
            return (
              <>
                <div
                  key={devdata.id}
                  className={`mx-2 ${bgColor} w-full md:my-8 my-2 relative text-center z-10   py-6 px-12 shadow-md rounded-xl`}
                >
                  <div className="absolute flex justify-center items-center -top-4 left-[45%] bg-white rounded-full w-8 h-8">
                    <div className="border-4 rounded-full p-1 w-2 h-2  border-blue"></div>
                  </div>
                  <h1 className={`text-xl font-medium my-4 ${txtColor}`}>
                    Planning
                  </h1>
                  <p className={`md:text-base text-center ${txtColor}`}>
                    {devdata.desc}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DevelomentProcess;
