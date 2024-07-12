// import Title from './Title'
import { blogData } from "../../data/applicationDevelopment";
import BlogCards from "./BlogCards";
import Heading from "../heading/Heading";

const Blogs = () => {
  return (
    <div className="my-9 md:mt-24">
      {/* <Title heading="Blog Posts" subheading="Want to learn about technological stuff? Go ahead and educate yourself."/> */}
      <Heading
        title={`Blog Posts`}
        desc={`Want to learn about technological stuff? Go ahead and educate yourself.`}
      />
      <div className="grid md:mt-16 mt-8 w-[85%] mx-auto lg:grid-cols-4 grid-cols-1 gap-5 ">
        <div className="col-span-2 ">
          <BlogCards data={blogData[0]} type="bigCard" />
        </div>
        <div className="col-span-2 lg:flex flex-col gap-y-5 hidden  ">
          {blogData.slice(1, 3).map((data, index) => (
            <BlogCards key={index} data={data} type="smallCard" />
          ))}
        </div>
        <div className="col-span-2 lg:hidden flex flex-col gap-y-5   ">
          {blogData.slice(1, 3).map((data, index) => (
            <BlogCards key={index} data={data} type="bigCard" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
