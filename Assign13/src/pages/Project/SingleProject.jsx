import React from "react";

function SingleProject({ project }) {
  const { image, name, description } = project;

  return (
    <article
      className="art text-dark p-3"
      style={{ boxShadow: "1px 3px 7px  #aaeacf", borderRadius: "7px" }}
    >
      <img
        src="https://placehold.co/300x200"
        className="img-fluid"
        alt="demo"
      />
      <h4 className="mt-4 mb-2">{name}</h4>
      <p className="mb-4"> {description}</p>
    </article>
  );
}

export default SingleProject;
