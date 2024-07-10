import React from "react";
import { IoArrowForward } from "react-icons/io5";

export default function ContactButton() {
  return (
    <>
      <button
        className="flex gap-2 items-center border-2 border-white pl-4 text-xl hover:bg-lightColor-100  hover:border-lightColor-100 transition-all ease-in-out duration-500 font-semibold rounded-full justify-between"
        style={{ width: "max-content" }}
      >
        <span>Contact Us</span>
        <span className="p-4 rounded-full">
          <IoArrowForward />
        </span>
      </button>
    </>
  );
}
