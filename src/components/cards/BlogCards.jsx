// import BlogButton from "../buttons/BlogButton";
import Datebanner from "../datebanner/Datebanner";

const BlogCards = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "bigCard": {
        return (
          <div className="relative group border-[1px] h-full border-gray-200">
            <div className="overflow-hidden">
              <img
                src={data.image}
                alt=""
                className="group-hover:scale-105 transition-transform duration-500 w-full h-[21rem]"
              />
            </div>

            <Datebanner date={data.date}/>
            <h2 className="mt-12 cursor-pointer px-4 text-2xl hover:text-darkBlue leading-6">{data.title}</h2>
            <p className="text-[18px] px-4 font-normal text-gray-500 my-6">{data.subtitle}</p>
             {/* <BlogButton/> */}
          </div>
        );
      }
      case "smallCard": {
        return (
          <div className="group">
            <div className="border-[1px] relative flex border-gray-200">
            <div className="overflow-hidden w-full">
              <img
                src={data.image}
                alt=""
                className="group-hover:scale-105 transition-transform duration-500 w-full h-full"
              />
            </div>

              <Datebanner  date={data.date}/>
              <div>
                {" "}
                <h2 className="mt-12 cursor-pointer px-4 text-2xl hover:text-darkBlue leading-6">{data.title}</h2>
                <p className="text-[18px] px-4 font-normal text-gray-500 my-6">{data.subtitle}</p>
                 {/* <BlogButton/> */}
              </div>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default BlogCards;