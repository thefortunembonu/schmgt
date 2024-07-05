import React, { useState } from "react";
import { BsChatSquareDots } from "react-icons/bs";

const Dashboard = () => {
  const messages = 3;
  return (
    <div>
      <span className="flex space-x-2 items-center pr-40">
        <h1 className="text-4xl px-2 py-3 font-medium mr-auto">
          Welcome, Admin
        </h1>
        <span className="relative text-4xl cursor-pointer hover:scale-105">
          <BsChatSquareDots />
          {messages !== null && messages >= 1 ? (
            <div className="text-white bg-red-500 text-xs rounded-full absolute -top-[10px] -right-[10px] px-2.5 py-1 ">
              {messages}
            </div>
          ) : null}
        </span>
      </span>
      <div className="flex flex-wrap gap-4 px-4">
        <div className="dashcardblue ">
          <strong className="text-sm sm:text-2xl">Info Details</strong>
          <br />
          <p className="text-xs"> Details</p>
        </div>
        <div className="dashcardbluer">
          <strong className="text-sm sm:text-2xl ">Staff</strong>
          <br />
          <p className="text-xs"> Details</p>
        </div>
        <div className="dashcardbluer">
          <strong className="text-sm sm:text-2xl">Students</strong>
          <br />
          <p className="text-xs"> Info Details</p>
        </div>
        <div className="dashcardblue ">
          <strong className="text-sm sm:text-2xl">Activities</strong>
          <br />
          <p className="text-xs"> Info Details</p>
        </div>
      </div>
    </div>
  );
};

const StudentInfo = () => {
  const fetchStudents = [
    {
      id: 1,
      name: "James Showerson",
      sex: "M",
      level: "500L",
      actions: "",
    },
    {
      id: 2,
      name: "Fortune Mbonu",
      sex: "M",
      level: "500L",
    },
    {
      id: 3,
      name: "Tina Jefferson",
      sex: "F",
      level: "300L",
    },
    {
      id: 4,
      name: "Natalie Kamalu",
      sex: "F",
      level: "200L",
    },
    {
      id: 5,
      name: "Johnson Freighter",
      sex: "M",
      level: "100L",
    },
  ];

  const headers = Object.keys(fetchStudents[0]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fetchStudents.map((student, index) => {
            return (
              <>
                <tr key={index} className="shadow-md rounded-md px-6 py-2 ">
                  <div className="flex items-center ">
                    <div className="min-w-[250px]">
                      <h1 className="font-bold">
                        <span className="mx-3">{student.id}</span>
                        {student.name}
                      </h1>
                    </div>
                    <div className="ml-5 min-w-[100px]">
                      <h1 className="font-bold">{student.sex}</h1>
                    </div>
                    <div className="ml-5 min-w-[100px] mr-72">
                      <h1 className="font-bold">{student.level}</h1>
                    </div>
                    <div>
                      <button className="primary_btn">View</button>
                      <button className="warning_btn">Delete</button>
                    </div>
                  </div>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const StaffReport = () => {
  return (
    <div>
      <h1>Staff Reports</h1>
    </div>
  );
};
const DepartmentInfo = () => {
  return (
    <div>
      <h1>Departments</h1>
    </div>
  );
};
const Requests = () => {
  return (
    <div>
      <h1>Requests</h1>
    </div>
  );
};
const Testimonials = () => {
  return (
    <div>
      <h1>Testimonials</h1>
    </div>
  );
};
const Blogs = () => {
  return (
    <div>
      <h1>Blogs</h1>
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

function AdminDashboard() {
  const [screen, setScreen] = useState(<Dashboard />);

  const request = 10;

  return (
    <div>
      <div className="flex gap-5">
        <div className="fixed">
          <aside className="flex flex-col space-y-1 bg-white rounded-lg sm:min-w-[250px] min-w-[150px] font-bold shadow-lg mt-3">
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
                  onClick={() => setScreen(<StudentInfo />)}
                  className="sidebtn"
                >
                  Students
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<StaffReport />)}
                  className="sidebtn"
                >
                  Staff Report
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<DepartmentInfo />)}
                  className="sidebtn"
                >
                  Departments
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<Requests />)}
                  className="sidebtn "
                >
                  Requests{" "}
                  {request !== null && request >= 1 ? (
                    <span className="notbtn">{request}</span>
                  ) : null}
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<Testimonials />)}
                  className="sidebtn "
                >
                  Testimonials
                </button>
              </span>
              <span>
                <button
                  onClick={() => setScreen(<Blogs />)}
                  className="sidebtn"
                >
                  Blogs
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
        <div>
          <div className="ml-72">{screen}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
