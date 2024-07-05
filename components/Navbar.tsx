"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MenuItems } from "./Menuitems";
import Banner from "./Banner";
import { useAppSelector, useAppDispatch } from "/redux/hooks";
import { handlecookiedel } from "../lib/actions";
import { toggleAuthenticatedFalse } from "/redux/features/authSlice";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const dispatch = useAppDispatch();

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  function MobProfileDropdown() {
    return (
      <div className="mobdropdownMenu">
        <>
          {isAuthenticated ? (
            <>
              <Link href={`profile`}>
                <button
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                  className="dropdownbtn"
                >
                  Profile
                </button>
              </Link>
              <button
                className="dropdownbtn"
                onClick={() => {
                  setOpen((prev) => !prev);
                  handlecookiedel();
                  dispatch(toggleAuthenticatedFalse());
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={"login"}>
                <button
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                  className="dropdownbtn"
                >
                  Login
                </button>
              </Link>
              <Link href={"register"}>
                <button
                  onClick={() => {
                    setOpen((prev) => !prev);
                  }}
                  className="dropdownbtn"
                >
                  Register
                </button>
              </Link>
            </>
          )}
        </>
      </div>
    );
  }

  return (
    <>
      <div
        className=" fixed bg-white/90 backdrop-blur-[40px] py-4 md:py-2 gap-2 md:pl-6 top-0
 lg:justify-start flex items-center w-full shadow-lg z-10"
      >
        <div className="flex items-center ">
          <Image
            className="ml-5 mr-2  w-8 h-8 md:w-12 md:h-12 "
            src="/images/Knoxxsvg.svg"
            alt="School Logo"
            width={64}
            height={64}
          />
          <Link
            href={"/"}
            className=" text-xl mr-5 hidden lg:flex md:text-3xl blue_gradient_text font-satoshi font-bold"
          >
            Knoxx University
          </Link>
          <div className="absolute right-[20px] sm:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              className="w-8 h-8 rounded-lg bg-slate-100 shadow-md hover:bg-blue-400"
              onClick={() => {
                handleClick;
                setOpen((prev) => !prev);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {open && MobProfileDropdown()}
        </div>

        <div className="sm:flex px-1 font-poppins font-regular text-sm  text-blue-800 justify-center">
          <ul className="flex  justify-center cursor-pointer ">
            {MenuItems.map((item, index) => (
              <div key={index}>
                <Link href={item.path}>
                  <li
                    onClick={() => {
                      handleClick;
                    }}
                    className="m-1 md:m-3 py-3 px-1 md:px-3 hover:text-blue-950 hover:font-semibold hover:bg-blue-300/30 hover:rounded-lg"
                  >
                    {item.name}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <div className="hidden sm:flex absolute right-[50px]  lg:right-[100px] border-l-2 px-6 border-gray-200">
          {isAuthenticated ? (
            <div className="flex gap-5 text-blue-800 items-center">
              <Link href={"profile"}>
                <p className="uppercase font-bold">
                  {user?.first_name + " " + user?.last_name}
                </p>
              </Link>

              <button
                className="outline_sec_btn"
                onClick={() => {
                  handlecookiedel();
                  dispatch(toggleAuthenticatedFalse());
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-5 text-blue-800">
              <p className=" hover:text-blue-950 hover:font-semibold">
                <Link href={"login"}>
                  {" "}
                  <button>Login</button>
                </Link>
              </p>
              <p className=" hover:text-blue-950 hover:font-semibold">
                <Link href={"register"}>Register</Link>
              </p>
            </div>
          )}
        </div>
      </div>
      <Banner />
    </>
  );
}
