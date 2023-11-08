import React from "react";
import SingleBlog from "./SingleBlog";

function AllBlog({ blogs }) {
  return (
    <section className="d-flex flex-wrap justify-content-between ">
      {blogs &&
        blogs.map((blog, index) => {
          return <SingleBlog key={index.toString()} blog={blog} />;
        })}
    </section>
  );
}

export default AllBlog;
