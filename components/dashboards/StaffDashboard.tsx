import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "/redux/hooks";
import ModalTestimonial from "../modals/ModalTestimonial";
import ModalBlog from "../modals/ModalBlog";

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [t_open, setTOpen] = useState(false);
  const [b_open, setBOpen] = useState(false);
  return (
    <div>
      <div>
        {t_open ? <ModalTestimonial open={t_open} setOpen={setTOpen} /> : null}
        {b_open ? <ModalBlog open={b_open} setOpen={setBOpen} /> : null}
        <div className="flex gap-2 md:gap-48 ">
          <h1 className=" text-2xl md:text-4xl px-2 py-3 font-medium">
            Welcome, {user?.first_name + " " + user?.last_name}
          </h1>
          <div>
            <button
              onClick={() => setBOpen((prev: any) => !prev)}
              className="primary_btn"
            >
              Create Blog
            </button>

            <button
              onClick={() => setTOpen((prev: any) => !prev)}
              className="primary_btn"
            >
              {" "}
              Submit Testimonial
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 px-4">
          <div className="dashcardblue">
            <strong className=" text-sm sm:text-2xl">Info Details</strong>
            <br />
            <p className="text-xs"> Details</p>
          </div>
          <div className="dashcardbluer">
            <strong className="text-sm md:text-2xl ">Students</strong>
            <br />
            <p className="text-xs"> Details</p>
          </div>
          <div className="dashcardbluer">
            <strong className="text-sm sm:text-2xl">Results</strong>
            <br />
            <p className="text-xs"> Details</p>
          </div>
          <div className="dashcardblue ">
            <strong className="text-sm sm:text-2xl">Activities</strong>
            <br />
            <p className="text-xs"> Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultSheet = () => {
  return (
    <div>
      <h1>ResultSheet</h1>
    </div>
  );
};

const StudentData = () => {
  return (
    <div>
      <h1>Student</h1>
    </div>
  );
};

const Messages = () => {
  return (
    <div>
      <h1>Messages</h1>
    </div>
  );
};

const Account = () => {
  return (
    <div>
      <h1>Account</h1>
    </div>
  );
};

const Profile = () => {
  return (
    <section className="bg-white mx-6 sm:mt-2">
      <div className="w-full">
        <h1 className=" font-poppins font-bold px-6 py-2 text-3xl my-2 text-start text-slate-700 ">
          Profile
        </h1>
      </div>
      <div>
        <div className=" flex justify-start items-center">
          <div className=" px-5 mb-3">
            <Image
              className="rounded-lg"
              src="/Images/vr.jpg"
              alt="profile"
              width={200}
              height={200}
            />
          </div>
          <div className="items-center ">
            <div className="mx-2 text-4xl">
              <h2 className="text-xl font-bold blue_gradient_text">
                Onyekachi Methuselah
              </h2>
              <h2 className="text-sm font-semibold text-slate-500">
                Staff ID: A546GT78
              </h2>
            </div>
            <div>
              <button className="primary_btn">Edit</button>
              <button className="outline_sec_btn">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-0.5 border-blue-100"></hr>
      <div className="w-full block md:flex md:space-x-3 md:space-y-2">
        <div className=" my-2  py-4 px-12 font-semibold  font-poppins space-y-4 border-r-1 border-slate-500/20">
          <h1 className="text-2xl text-blue-700">Basic Info</h1>
          <div className="flex flex-cols-2 space-y-2 gap-24 md:block  text-slate-800 text-sm mt-2">
            <div>
              <h2 className="text-slate-600">
                Age: <p className="text-slate-800">24 Years</p>
              </h2>
            </div>
            <div>
              <h2 className="text-slate-600">
                Sex: <p className="text-slate-800"> Male</p>{" "}
              </h2>
            </div>
            <div>
              <h2 className="text-slate-600">
                Date of Birth: <p className="text-slate-800">June 24, 1997</p>
              </h2>
            </div>
          </div>
        </div>

        <div className="m-4  py-4 px-12 font-semibold font-poppins text-sm border-r-1 border-slate-500/20">
          <h1 className="text-2xl  text-blue-700">Contact Details</h1>

          <div className=" space-y-3 mt-2">
            <h2 className="text-slate-600">
              Address:{" "}
              <p className="text-slate-800">Imerienwe Ngor-Okpala L.G.A</p>
            </h2>

            <h2 className="text-slate-600">
              {" "}
              State of Origin: <p className="text-slate-800">Imo State</p>
            </h2>

            <h2 className="text-slate-600">
              Nationality: <p className="text-slate-800">Nigerian</p>{" "}
            </h2>

            <h2 className="text-slate-600">
              Phone Number: <p className="text-slate-800"> 07066912078</p>
            </h2>
          </div>
        </div>
        <div className="m-4 rounded-lg py-4 px-12 font-semibold font-poppins text-sm">
          <h1 className="text-2xl  text-blue-700">Other Details</h1>
          <div className=" space-y-3 mt-2">
            <h2 className="text-slate-600">
              Email Address:{" "}
              <p className="text-slate-800">fortunembonu99@gmail.com</p>{" "}
            </h2>

            <h2 className="text-slate-600">
              Bio: <p className="text-slate-800"> I am a lovable person</p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

function StaffDashboard() {
  const [screen, setScreen] = useState(<Dashboard />);
  const request = 10;

  return (
    <div className="fixed">
      <div className="flex gap-5">
        <div className="fixed">
          <aside className="flex flex-col space-y-1 bg-white rounded-lg sm:min-w-[250px] min-w-[150px] font-bold shadow-lg mt-16">
            <div>
              <span>
                <button
                  onClick={() => setScreen(<Dashboard />)}
                  className="sidebtn"
                >
                  Dashboard
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<Profile />)}
                  className="sidebtn"
                >
                  Profile
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<StudentData />)}
                  className="sidebtn "
                >
                  Students Data
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<ResultSheet />)}
                  className="sidebtn"
                >
                  Result Sheet
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<Messages />)}
                  className="sidebtn"
                >
                  Messages
                  {request !== null && request >= 1 ? (
                    <span className="notbtn">{request}</span>
                  ) : null}
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<Account />)}
                  className="sidebtn !mb-0"
                >
                  Account
                </button>
              </span>
            </div>
          </aside>
        </div>
        <div className="ml-64">{screen}</div>
      </div>
    </div>
  );
}

export default StaffDashboard;
