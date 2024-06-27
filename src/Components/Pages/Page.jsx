import React from "react";
import Archive from "../HomePage/Archive";
import Shop from "../HomePage/Shop";
import Scholars from "../HomePage/Scholars";
import Events from "../HomePage/Events";
import Home from "../Main/Home";
import QuizHome from "../Quiz/QuizHome";
import Exhibition from "../HomePage/Exhibition";

const Page = () => {
  return (
    <>
      <div className="pagerow">
        <Home />
      </div>

      <div className="pagerow">
        <Events />
      </div>

      <div className="pagerow">
        <Shop />
      </div>
      <div className="pagerow">
        <QuizHome />
      </div>
      <div className="pagerow">
        <Archive />
      </div>
      <div className="pagerow">
        <Scholars />
      </div>
      <div className="pagerow">
        <Exhibition />
      </div>
    </>
  );
};

export default Page;
