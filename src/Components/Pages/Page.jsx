import React from "react";
import Archive from "../HomePage/Archive";
import Shop from "../HomePage/Shop";
import Scholars from "../HomePage/Scholars";

const Page = () => {
  return (
    <>
      <div className="pagerow">
       <Scholars />
      </div>
      <div className="pagerow">
        <Shop />
      </div>
      <div  className="pagerow">
        <Archive />
      </div>
    </>
  );
};

export default Page;
