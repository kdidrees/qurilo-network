import React from "react";
import ContactButton from "./buttons/ContactButton";
import contactImage from "../assets/Images/appdevelopment/images/contactimg.png";
import Button from "./buttons/Button";
const ContactSection = () => {
  return (
    <section>
      <div className="w-full py-20 mt-8 px-6  bg-secondary bg-black text-white grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
        <div className="flex items-center gap-5 flex-col lg:items-start lg:px-20">
          <h1 className="text-4xl text-center lg:text-start">
            Build an App that Drives User Engagement
          </h1>
          <p className="text-lg text-gray-300 text-center lg:text-start mb-5">
            Want to drive conversions at a quick pace? Let us build an app that
            meets the purpose.
          </p>
          <Button data={"Contact Us"} />
        </div>
        <div className="flex  items-center justify-center">
          <img
            src={contactImage}
            alt="contactImage"
            className="h-[10rem] md:h-[12rem]"
          />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
