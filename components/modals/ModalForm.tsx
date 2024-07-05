import React, { useState } from "react";
import { useAppSelector } from "/redux/hooks";

export default function ModalForm({ open, setOpen }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toggleOpen = () => setOpen((prev: boolean) => !prev);

  return (
    <>
      {open ? (
        <div className="absolute w-full h-full bg-black/50 z-10 px-96 py-24">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full bg-white rounded-lg mx-auto px-12 py-3 flex flex-col relative"
          >
            <div
              onClick={() => toggleOpen()}
              className=" absolute right-[30px] font-bold cursor-pointer py-2 -px-2  "
            >
              X
            </div>
            <div>
              <h1 className="blue_gradient_text text-center font-bold py-6 text-2xl">
                Create Post
              </h1>

              <div className="mx-4 flex flex-col gap-3 text-sm text-slate-500">
                <input
                  id="form_title"
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  name="form_title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full h-12 px-3 py-2 rounded-lg border-1.5 border-blue-200 focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  id="form_content"
                  placeholder="Write a post..."
                  value={content}
                  name="form_content"
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-72 rounded-lg border-1.5 border-blue-200 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex -space-x-1 ml-1">
              <button
                className="primary_btn"
                onClick={() => {
                  toggleOpen();
                }}
              >
                Publish
              </button>
              <button
                className="outline_sec_btn"
                onClick={() => {
                  setTitle("");
                  setContent("");
                }}
              >
                Discard
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
