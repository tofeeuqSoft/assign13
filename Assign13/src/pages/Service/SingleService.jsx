import React from "react";

function SingleService({ service }) {
  const { title, description, price, images } = service;
  return (
    <article
      style={{
        maxWidth: "340px",
        width: "100%",
        border: "1px dashed gray",
        padding: "10px",
      }}
      className="m-5"
    >
      <img
        src={images[0]}
        alt=""
        className="img-fluid "
        style={{ maxHeight: "230px", objectFit: "cover" }}
      />
      <h4 className="m-0">{title}</h4>
      <h3>$ {price}</h3>
      <p className="m-0">{description}</p>
    </article>
  );
}

export default SingleService;
