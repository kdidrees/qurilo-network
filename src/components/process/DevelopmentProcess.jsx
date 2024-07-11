import { MdPlayArrow } from "react-icons/md";

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
    <div className="w-full   flex px-20 justify-center  items-center   bg-[#f5f5f5]">
      
      <div className="">
        <div className="flex flex-wrap  my-20 gap-y-8  relative gap-x-4">
          <div>
            <div className="bg-white w-[285px] relative text-center z-20  py-6 px-12 shadow-md rounded-xl">
              <div className="absolute flex justify-center items-center -top-4 left-[45%] bg-white rounded-full w-8 h-8">
                <div className="border-4 rounded-full p-1 w-2 h-2 border-[rgba(110,8,84,1)]"></div>
              </div>
              <h1 className="text-xl font-medium my-4">Planning</h1>
              <p className="text-lg">
                Define the website’s purpose, target audience, and desired UX.
              </p>
            </div>
          </div>
          <div className="absolute left-[12%] xl:flex  hidden justify-center  z-10 -top-9 border-l-[1px] border-r-[1px] w-[19rem] border-t-[1px] border-dashed border-[rgba(110,8,84,1)] h-40 rounded-3xl"><MdPlayArrow className="text-[rgba(110,8,84,1)] -mt-[0.8rem]"  size={25}/></div>
          <div>
            <div className="bg-white relative w-[285px]  text-center z-20 py-6 px-12 shadow-md rounded-xl">
              <div className="absolute flex justify-center items-center -top-4 left-[45%] bg-white rounded-full w-8 h-8">
                <div className="border-4 rounded-full p-1 w-2 h-2 border-[rgba(110,8,84,1)]"></div>
              </div>
              <h1 className="text-xl font-medium my-4">Design</h1>
              <p className="text-lg">
              Our team creates a visual structure and interactive prototype for user feedback.
              </p>
            </div>
          </div>
          <div className="absolute left-[28rem] xl:flex  hidden justify-center z-10 -top-9 border-l-[1px] border-r-[1px] w-[18.7rem] border-t-[1px] border-dashed border-[rgba(110,8,84,1)] h-40 rounded-3xl"><MdPlayArrow className="text-[rgba(110,8,84,1)]  -mt-[0.8rem]"  size={25}/></div>
          <div>
            <div className="bg-white relative w-[285px] z-20  text-center py-6 px-12 shadow-md rounded-xl">
              <div className="absolute flex justify-center items-center -top-4 left-[45%] bg-white rounded-full w-8 h-8">
                <div className="border-4 rounded-full p-1 w-2 h-2 border-[rgba(110,8,84,1)]"></div>
              </div>
              <h1 className="text-xl font-medium my-4">Development</h1>
              <p className="text-lg">
              Our experts build UI and server-side functionality to bring your idea to life.
              </p>
            </div>
          </div>

          <div className="absolute left-[63%] xl:flex  hidden justify-center z-10 -top-9 border-l-[1px] border-r-[1px] w-[19rem] border-t-[1px] border-dashed border-[rgba(110,8,84,1)] h-40 rounded-3xl"><MdPlayArrow className="text-[rgba(110,8,84,1)] -mt-[0.8rem]"  size={25}/></div>
          <div>
            <div className="bg-white relative w-[285px] text-center z-20 py-6 px-12 shadow-md rounded-xl">
              <div className="absolute flex justify-center items-center -top-4 left-[45%] bg-white rounded-full w-8 h-8">
                <div className="border-4 rounded-full p-1 w-2 h-2 border-[rgba(110,8,84,1)]"></div>
              </div>
              <h1 className="text-xl font-medium my-4">Testing</h1>
              <p className="text-lg">
              Our testing team ensures the website functions flawlessly across all devices.
              </p>
            </div>
          </div>


          
        </div>
      </div>


    </div>
    </>
  );
};

export default DevelomentProcess;