import React, { useState } from "react";
import { useAppSelector } from "/redux/hooks";
import { getcookie } from "/lib/actions";

export default function ModalBlog({ open, setOpen }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState<any>(null);
  const toggleOpen = () => setOpen((prev: boolean) => !prev);

  const postBlog = async () => {
    try {
      const access = await getcookie("access");
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("img", img);

      const response = await fetch("http://localhost:8000/blogs/post_blog/", {
        method: "POST",
        headers: {
          Authorization: "JWT " + access,
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {open ? (
        <div className="fixed md:w-[1200px] w-full px-6 rounded-lg bg-gray-500/30 lg:px-48 py-12">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="min-w-[300px] max-w-[400px] max-h-[500px] bg-white rounded-lg mx-auto  px-4 lg:px-12 py-3 flex flex-col relative"
          >
            <div
              onClick={() => toggleOpen()}
              className=" absolute right-[30px] font-bold cursor-pointer py-2 -px-2  "
            >
              X
            </div>
            <div>
              <h1 className="blue_gradient_text text-center font-bold py-6 text-2xl">
                Create Blog
              </h1>

              <div className="mx-4 flex flex-col gap-3 text-sm text-slate-500">
                <input
                  id="title"
                  type="text"
                  placeholder="Enter Title"
                  value={title}
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full h-12 px-3 py-2 rounded-lg border-1.5 border-blue-200 focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  id="content"
                  placeholder="Write your blog"
                  value={content}
                  name="content"
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-40 rounded-lg border-1.5 border-blue-200 px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />

                <input
                  id="img"
                  type="file"
                  name="img"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="w-full h-12 px-3 py-2  rounded-lg border-1.5 border-blue-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex -space-x-1 ml-1">
              <button
                className="primary_btn"
                onClick={() => {
                  postBlog();
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
