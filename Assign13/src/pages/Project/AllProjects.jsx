import React from "react";
import SingleProject from "./SingleProject";

function AllProjects({ projectDatas }) {
  return (
    <section className="project d-flex  gap-5 justify-content-evenly flex-wrap mb-5">
      {projectDatas &&
        projectDatas.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
    </section>
  );
}

export default AllProjects;
