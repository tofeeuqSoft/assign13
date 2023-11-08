import React from "react";
import ImagePage from "./ImagePage";
import Heading from "./Heading";
import AboutMe from "./AboutMe";

function AboutPage() {
  return (
    <div className="container m-5">
      <ImagePage />
      <Heading />
      <AboutMe />
    </div>
  );
}

export default AboutPage;
