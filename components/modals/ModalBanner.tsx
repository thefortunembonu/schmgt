import React from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "/redux/hooks";
import Link from "next/link";

export default function ModalBanner({ open, setOpen }: any) {
  const toggleOpen = () => setOpen((prev: boolean) => !prev);

  return (
    <>
      {open ? (
        <div
          onClick={() => toggleOpen()}
          className="absolute w-full h-full bg-black/50 z-10 px-24 py-24 md:px-60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-white rounded-lg mx-auto px-6 md:px-12 py-3 flex flex-col relative text-slate-500"
          >
            <div
              onClick={() => toggleOpen()}
              className="absolute right-[30px] font-bold cursor-pointer py-2 -px-2"
            >
              X
            </div>
            <h1 className="text-center font-medium text-gray-700 text-xl">
              Disclaimer!
            </h1>
            <h2 className="text-md my-8 text-red-500 px-6 py-3 bg-red-100 rounded-lg">
              You must be authenticated to create a post.
            </h2>
            <div className="flex flex-wrap gap-5 justify-center items-center mb-2">
              <span
                onClick={() => {
                  toggleOpen();
                }}
                className=" text-blue-500 py-3 px-4 cursor-pointer bg-blue-50 rounded-full hover:bg-blue-100 hover:text-blue-600 hover:scale-105"
              >
                Go back
              </span>

              <Link href={"login"}>
                <span className="py-3 px-4 cursor-pointer bg-blue-50 rounded-full hover:bg-blue-100 hover:text-blue-600 hover:scale-105">
                  Continue to login
                </span>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
