import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");
  return (
    <section className="blue_gradient md:p-20 pb-12">
      <div className="px-12 md:px-24 py-8">
        <h1 className="font-bold text-center text-white text-4xl md:text-5xl md:text-white mb-6">
          Join the Knoxx Community
        </h1>
        <p className="text-center text-white text-sm md:text-md md:text-white">
          Become part of a diverse and supportive community that values
          collaboration, inclusivity, and the pursuit of knowledge. At Knoxx,
          you&apos;ll forge lifelong connections, build lasting friendships, and
          create memories that will accompany you on your journey long after
          graduation. Embark on your academic adventure at Knoxx University -
          where knowledge meets inspiration, and the future begins today.
          Welcome to a place where you don&apos;t just earn a degree; you shape
          your destiny. Apply now and unlock a world of possibilities at Knoxx
          University!
        </p>
      </div>

      <form className="px-12 md:px-80 text-center py-2">
        <span className="text-white text-sm md:text-md ">
          {" "}
          To join our community and also receive newsletters, please subscribe
        </span>
        <div className=" flex items-center w-full bg-white mt-2 rounded-lg px-4 py-2 ">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail address"
            className=" w-full border-2 border-blue-300 rounded-xl py-0.5 px-3 text-sm h-12
            focus:ring-1 focus:ring-blue-700 "
          />
          <button className=" primary_btn mx-2"> Subscribe </button>
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
