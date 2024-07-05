import Link from "next/link";
import React from "react";
import backgroundImage from "../../public/Images/hats.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
        id="home"
      >
        <div className="m-2 md:mx-auto text-center text-white ">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 1 }}
            className="font-bold text-5xl md:text-7xl"
          >
            Welcome to <span className="">Knoxx University</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: 0.25 }}
            className="px-2 text-2xl md:font-semibold md:text-3xl"
          >
            Where Knowledge Unleashes Boundless Opportunities!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5"
          >
            <Link href="/register">
              <button className="primary_btn"> Enroll Now</button>
            </Link>
            <Link href="#testimonials">
              <button className="outline_btn"> Testimonials</button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default Hero;
