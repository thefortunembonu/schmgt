import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <section
      id="footer"
      className=" bottom-0 sm:flex w-full  gap-6 bg-slate-800 items-center"
    >
      <div className=" flex flex-col px-4  text-slate-400 text-sm text-left sm:px-16 py-3">
        <p className="flex items-center text-medium cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2 w-6 h-6"
          >
            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
          </svg>
          Knoxx Education System
        </p>
        <small className="text-sm ml-8">All Rights Reserved. &copy; 2024</small>
      </div>
      <div className="px-4 ml-8 md:flex justify-center flex-col text-slate-400 text-sm py-2 tracking-wider">
        <p>Email: knoxxuniversity@knoxx.edu</p>
        <p>website: www.knoxxuniversity.edu</p>
        <p>Tel: +234 (0) 706 6912 078</p>
      </div>
      <div className="hidden sm:flex md:justify-center space-x-4 mt-2 mb-2 border-l-2 border-gray-500 px-5">
        <Link href="#">
          <img
            className=" w-4 h-4 md:w-4 md:h-4  cursor-pointer"
            src="/SMIconSVG/facebooki.svg"
            alt="facebook"
          />
        </Link>
        <Link href="#">
          <img
            className="w-4 h-4  cursor-pointer"
            src="/SMIconSVG/Xi.svg"
            alt="X"
          />
        </Link>
        <Link href="#">
          <img
            className="w-4 h-4  cursor-pointer"
            src="/SMIconSVG/Instagrami.svg"
            alt="instagram"
          />{" "}
        </Link>
        <Link href="#">
          <img
            className="w-4 h-4  cursor-pointer"
            src="/SMIconSVG/Linkedini.svg"
            alt="Linkedin"
          />
        </Link>
      </div>
    </section>
  );
}

export default Footer;
