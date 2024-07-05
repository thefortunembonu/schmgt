import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard";
import backgroundImage from "../../public/Images/learntogether.jpg";

function Testimonials() {
  const [data, setData] = useState([
    {
      status: "",
      testifier_first_name: "",
      testifier_last_name: "",
      content: "",
    },
  ]);

  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const getTestimonials = async () => {
    const response = await fetch("http://localhost:8000/testimonials", config);
    const data = await response.json();
    setData(data.testimonials);
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100%",
        alignItems: "center",
      }}
      id="testimonials"
      className=""
    >
      <h1 className=" text-center font-bold text-white text-xl md:text-5xl drop-shadow-lg pt-12 ">
        Testimonials
      </h1>
      <div className="flex flex-col flex-wrap lg:flex-row justify-center mx-auto px-12 py-12 gap-y-4 gap-x-3">
        {data.map((item, index) => (
          <TestimonialCard
            key={index}
            content={item.content}
            test_name={
              item.testifier_first_name + " " + item.testifier_last_name
            }
            status={item.status}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
