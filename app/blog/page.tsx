"use client";
import Image from "next/image";
import { useVerify } from "../../lib/hooks";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import ModalForm from "../../components/modals/ModalForm";
import ModalBanner from "../../components/modals/ModalBanner";
import { useAppSelector } from "/redux/hooks";
import { useRouter } from "next/navigation";
import {
  BsCaretDownFill,
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsEyeSlash,
} from "react-icons/bs";
import { FaThumbsUp, FaThumbsDown, FaEyeSlash } from "react-icons/fa";
import { BsReply } from "react-icons/bs";

function Blog() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const [data, setData] = useState([
    {
      id: "",
      blog_id: "",
      title: "",
      content: "",
      date_created: "",
      image_url: "",
      author_first_name: "",
      author_last_name: "",
      comments: null,
    },
  ]);

  const [selectedData, setSelectedData] = useState<any>({
    id: 0,
    blog_id: "",
    title: "",
    content: "",
    date_created: "",
    image_url: "",
    author_first_name: "",
    author_last_name: "",
    comments: null,
  });

  const {
    id,
    blog_id,
    title,
    content,
    date_created,
    image_url,
    author_first_name,
    author_last_name,
    comments,
  } = selectedData;

  const [search, setSearch] = useState<string>("");

  async function getData() {
    const response = await fetch("http://localhost:8000/blogs");
    const data = await response.json();
    return data;
  }
  const fetchdata = async () => {
    const data = await getData();
    setData(data.blogs);
    console.log(data.blogs);
    setSelectedData(data.blogs[0]);
  };
  const verify = useVerify();
  useEffect(() => {
    verify();
    fetchdata();
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <div>
          <ModalForm open={open} setOpen={setOpen} />
        </div>
      ) : (
        <div>
          <ModalBanner open={open} setOpen={setOpen} />
        </div>
      )}

      <div className="absolute w-full -z-5">
        <nav className="flex px-6 py-1 pt-24 shadow-md">
          <div className="mr-auto flex">
            <button
              onClick={() => {
                toggleOpen();
              }}
              className="primary_btn"
            >
              {" "}
              Create
            </button>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for posts..."
              className="w-full sm:min-w-[300px] rounded-md h-10 px-2 py-2 text-sm border-1 border-slate-500"
            />
            <button className="primary_btn">Search</button>
          </div>
        </nav>
        <div className="flex pt-2">
          {/* Left Side Bar */}
          <div>
            <aside
              className="bg-white rounded-lg 
          sm:min-w-[250px] md:min-w-[150px] pt-6 text-sm
           text-blue-700 shadow-lg"
            >
              <h1 className="text-gray-800 font-medium pl-6 pb-4">
                Related Posts
              </h1>
              <div>
                <ul className="cursor-pointer flex flex-col max-w-[300px] md:min-w-[300px] space-y-1">
                  {data.map((item: any, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedData(data[index]);
                        }}
                      >
                        <li className="py-3 px-6 font-poppins border-b-1 border-slate-200 hover:bg-blue-300 hover:underline">
                          {item.title}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
          {/* Content in the middle */}
          <div className="">
            <div className="px-6 pb-6 w-full md:max-w-[1000px]">
              <div>
                <Image
                  src={image_url}
                  alt={"image_"}
                  width={1000}
                  height={1000}
                  quality={75}
                  loading="lazy"
                  className="w-[50%] md:w-full md:h-[300px] object-cover rounded-lg"
                />
              </div>

              <p className=" my-1 font-bold blue_gradient_text text-2xl md:text-3xl md:my-4">
                {title}
              </p>
              <div className="flex font-medium text-slate-500 md:text-sm text-xs">
                <p className="pr-2">
                  Author: {"   "}
                  {author_first_name + " " + author_last_name}
                </p>
                <p>{date_created.slice(0, 10)}</p>
              </div>
              <hr className=" my-0.5 md:my-2 "></hr>
              <p className="text-medium font-regular pr-1 md:pr-12 leading-8 text-left md:text-justify">
                {content}
              </p>
              {/* Comments Section */}
              <div className="my-2">
                <div>
                  <span className="flex items-center gap-3">
                    <h1 className="text-gray-700 text-xl font-bold">
                      Comments
                    </h1>
                    <span className="text-gray-700 pt-1">
                      <BsCaretDownFill />
                    </span>
                  </span>
                </div>
                {/* Comments Main Section */}
                <div>
                  {comments ? (
                    <div className="px-2 mt-2">
                      <span className="font-bold blue_gradient_text">
                        {comments.commenter_first_name +
                          " " +
                          comments.commenter_last_name}
                      </span>
                      <p className="text-sm">{comments.comment}</p>
                      <div className="flex gap-5 text-sm text-blue-500">
                        <span>
                          <BsHandThumbsUp /> Like
                        </span>
                        <span>
                          <BsHandThumbsDown /> Dislike
                        </span>
                        <span>
                          <BsReply /> Reply
                        </span>
                        <span>
                          <BsEyeSlash /> Hide
                        </span>
                      </div>

                      {/* Replies */}
                      {comments.reply && comments.reply.reply ? (
                        <div className="px-2 border-l-2 my-1 border-gray-200">
                          <span className="font-bold text-sm blue_gradient_text">
                            {comments.reply.reply}
                          </span>
                          <div className="flex gap-5 text-sm text-blue-500">
                            <span>
                              <BsHandThumbsUp /> Like
                            </span>
                            <span>
                              <BsHandThumbsDown /> Dislike
                            </span>
                            <span>
                              <BsEyeSlash /> Hide
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <p>No comments</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
