import React, { useState } from "react";
import Image from "next/image";

interface Props {
  content: String;
  test_name: String;
  status: String;
}

function TestimonialCard({ content, test_name, status }: Props) {
  return (
    <div className=" grid w-full sm:w-[400px] h-56 shadow-lg px-6 py-4 text-slate-700 bg-zinc-50/90 rounded-2xl">
      <div className="text-left text-[0.9rem] overflow-hidden grid-rows-2">
        &quot; {content} &quot;
      </div>

      <div className="flex items-center w-full px-2 py-2">
        <div className="px-2">
          <Image
            src={"/Images/lady.jpg"}
            alt={"image"}
            height={200}
            width={200}
            className="rounded-full w-8 h-8 border-2  border-slate-100"
          />
        </div>

        <div className="text-sm">
          <strong> {test_name} </strong>
          <span
            className="mx-0.5
          "
          >
            | <em>{status}</em>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
