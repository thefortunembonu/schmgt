"use client";

import { useEffect, useState } from "react";

interface CreatedBy {
  first_name: string;
}

interface Blog {
  blog_id: string;
  title: string;
  content: string;
  date_created: string;
  img: string;
  comments: string;
  created_by: CreatedBy;
}

interface BlogdetailsProps {
  params: {
    blog_id: string;
  };
}

export default function Blogdetails({ params }: BlogdetailsProps) {
  const [data, setData] = useState<Blog[]>([]);

  async function getDataDetails(blog_id: string) {
    try {
      const response = await fetch("http://localhost:8000/blogs/" + blog_id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setData(data.blogs);
      } else {
        console.log("Error fetching data, status code:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getDataDetails(params.blog_id);
  }, [params.blog_id]);

  return (
    <div className="md:mx-48 pt-40">
      {data.map((item, index) => (
        <div key={index}>
          <p className="font-bold blue_gradient_text text-3xl my-4">
            {item.title}
          </p>
          <div className="flex font-semibold text-xl">
            <p className="mx-3">
              <i>Written by </i>
              {item.created_by.first_name}
            </p>
            <p>{item.date_created}</p>
          </div>
          <hr className="my-4"></hr>
          <p className="text-md font-regular text-xl ">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
