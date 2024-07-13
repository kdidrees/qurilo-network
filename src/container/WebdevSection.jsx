import React from "react";
import Subdev from "../components/subdev/Subdev";

export default function WebdevSection() {
  return (
    <>
      <section>
        <div className="lg:flex hidden justify-center ">
          <img
            src="https://www.codeflies.com/wp-content/uploads/2019/12/web-development.jpg"
            alt=""
          />
        </div>

        <Subdev />
      </section>
    </>
  );
}
