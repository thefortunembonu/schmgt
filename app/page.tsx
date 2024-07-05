"use client";
import Hero from "../components/sections/Hero";
import Mission from "../components/sections/Mission";
import Vision from "../components/sections/Vision";
import Testimonials from "../components/sections/Testimonials";
import Subscribe from "../components/sections/Subscribe";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "/redux/hooks";
import { handleverify } from "/redux/features/authActions";
import Footer from "/components/Footer";
import { getcookie } from "/lib/actions";
import { toggleAuthenticatedTrue } from "/redux/features/authSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const verify = async () => {
    try {
      const token = await getcookie("access");
      if (token !== null) {
        dispatch(handleverify(token));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <main>
      <div className=" font-poppins">
        <Hero />
        <Mission />
        <Vision />
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
}
