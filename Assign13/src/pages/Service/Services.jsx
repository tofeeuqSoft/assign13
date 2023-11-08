import React from "react";
import SingleService from "./SingleService";

function Services({ services }) {
  return (
    <section className="d-flex justify-content-evenly flex-wrap">
      {services.length > 0
        ? services.map((service, index) => {
            return <SingleService key={index.toString()} service={service} />;
          })
        : ""}
    </section>
  );
}

export default Services;
