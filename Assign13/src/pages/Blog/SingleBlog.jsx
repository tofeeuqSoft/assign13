import React from "react";

function SingleBlog({ blog }) {
  const { author, content, title } = blog;
  return (
    <article
      className="bg-white text-whidarkte p-3 mb-3 "
      style={{ width: "350px" }}
    >
      <h2>{title}</h2>
      <h6>{author}</h6>
      <p>{content}</p>
    </article>
  );
}

export default SingleBlog;
