import React from "react";
import Archive from "../HomePage/Archive";
import Shop from "../HomePage/Shop";
import Scholars from "../HomePage/Scholars";
import Events from "../HomePage/Events";

const Page = () => {
  return (
    <>
     
      <div className="pagerow">
        <Events />
      </div>

      <div className="pagerow">
        <Shop />
      </div>
      
      <div className="pagerow">
        <Archive />
      </div>
      <div className="pagerow">
        <Scholars />
      </div>
      <div className="pagerow">Tours</div>
    </>
  );
};

export default Page;
