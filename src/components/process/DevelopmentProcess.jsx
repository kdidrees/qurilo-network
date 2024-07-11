import { MdPlayArrow } from "react-icons/md";
import { DevelopmentProcessData } from "../../data/applicationDevelopment";

const DevelomentProcess = () => {
  return (
    <>
      <div className="w-full pt-5 pb-9 bg-[#f5f5f5]">
        <div className="w-[60%] mx-auto pt-10">
          <div className="flex justify-between items-center">
            <div className="border-[1px] border-gray-950  rounded-xl w-[30%]" />
            <div className=" text-black md:text-3xl font-semibold">
              Process We Follow
            </div>
            <div className="border-[1px] border-gray-950 rounded-xl w-[30%]" />
          </div>
        </div>
      </div>
  
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-3 mx-16">
            {DevelopmentProcessData.map((devdata) => {
              return (
                <>
                  <div key={devdata.id} className=" mx-2 bg-white w-full my-8 relative text-center z-10   py-6 px-12 shadow-md rounded-xl">
                    <div className="absolute flex justify-center items-center -top-4 left-[45%] bg-white rounded-full w-8 h-8">
                      <div className="border-4 rounded-full p-1 w-2 h-2  border-[rgba(110,8,84,1)]"></div>
                    </div>
                    <h1 className="text-xl font-medium my-4">Planning</h1>
                    <p className="md:text-base text-center">
                     {devdata.desc}
                    </p>
                    {/* <div className="absolute left-[-9px] xl:flex    hidden justify-center  z-0 -top-9 border-l-[1px] border-r-[1px] w-[19rem] border-t-[1px] border-dashed border-[rgba(110,8,84,1)] h-10 rounded-3xl">
                    <MdPlayArrow
                      className="text-[rgba(110,8,84,1)]  -mt-[0.8rem]"
                      size={25}
                    />
                  </div> */}
                  </div>

              
                </>
              );
            })}
          </div>
     
  
    </>
  );
};

export default DevelomentProcess;
