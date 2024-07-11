import { MdPlayArrow } from "react-icons/md";
import { DevelopmentProcessData } from "../../data/applicationDevelopment";

const DevelomentProcess = () => {
  return (
    <>
      <div className="w-full pt-5 pb-9 bg-second">
        <div className=" text-black md:text-3xl text-xl md:mt-4 font-sans font-semibold text-center">
          Process We Follow
        </div>

        <p className="text-center mt-2">
          Here is a streamlined overview of our custom web app development
          process:
        </p>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-3 mx-16 md:mt-4 mt-8">
          {DevelopmentProcessData.map((devdata) => {
            return (
              <>
                <div
                  key={devdata.id}
                  className=" mx-2 bg-white w-full md:my-8 my-2 relative text-center z-10   py-6 px-12 shadow-md rounded-xl"
                >
                  <div className="absolute flex justify-center items-center -top-4 left-[45%] bg-white rounded-full w-8 h-8">
                    <div className="border-4 rounded-full p-1 w-2 h-2  border-black"></div>
                  </div>
                  <h1 className="text-xl font-medium my-4">Planning</h1>
                  <p className="md:text-base text-center">{devdata.desc}</p>
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
