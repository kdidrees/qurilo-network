import React from "react";
import Appdevcard from "../components/Card";
import { cardData } from "../data/applicationDevelopment";

export default function DevelopmentServices() {

  return (
    <>
      <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3 mx-16">
        <Appdevcard cardData={cardData} />
      </div>
    </>
  );
}
