import React from "react";
import ecommerceimg from "../../assets/Images/subappdev/solutions/images/ecommerce.png"
import elearningimg from "../../assets/Images/subappdev/solutions/images/elearning.png"
import reservationimg from "../../assets/Images/subappdev/solutions/images/reservation.png"
import contentmanagementimg from "../../assets/Images/subappdev/solutions/images/contentmanagement.png"

export default function Award() {
  return (
    <div className="mt-5">
      
      <div className="flex flex-wrap gap-4 mt-5">
      <div className="grid grid-cols-2 gap-2">
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={ecommerceimg}
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={elearningimg}
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={reservationimg}
      alt=""
    />
  </div>
  <div>
    <img
      className="h-auto max-w-full rounded-lg"
      src={contentmanagementimg}
      alt=""
    />
  </div>
</div>

        
      </div>
    </div>
  );
}