import React from "react";
import Image from "next/image";

function Mission() {
  return (
    <section className=" blue_gradient w-full py-12 px-12 sm:py-20 sm:px-24 pb-2 text-white ">
      <div className="lg:grid lg:grid-cols-2 items-center">
        <div className="lg:px-24 md:py-12">
          <h1 className="text-center text-2xl font-semibold pb-2 lg:text-right">
            {" "}
            Our Mission{" "}
          </h1>
          <p className="text-center text-md md:text-md mb-8 lg:text-right">
            At Knoxx, we believe in the transformative power of education. Our
            commitment to excellence, innovation, and holistic learning sets us
            apart as a beacon of academic brilliance. As you step into the realm
            of Knoxx, you embark on a journey that transcends traditional
            boundaries and opens doors to a world of limitless possibilities.
          </p>
        </div>
        <div className="flex pb-8">
          <div className="w-36 h-36 rounded-full blur-sm bg-blue-700/40 absolute right-[150px] my-3 "></div>
          <div className="w-24 h-24 rounded-full blur-sm bg-yellow-700/30 absolute right-[250px] my-3 "></div>
          <Image
            src={"/Images/grad.jpg"}
            alt={"grad"}
            width={1000}
            height={1000}
            priority={true}
            quality={95}
            className="rounded-lg w-full shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
