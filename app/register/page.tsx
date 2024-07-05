"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "/redux/hooks";
import { handleRegister } from "/redux/features/authActions";

function RegisterForm() {
  const [e_mail, setEmail] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRepassword] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, registered } = useAppSelector((state) => state.auth);

  const Register = () => {
    const email = e_mail.toLowerCase();
    dispatch(
      handleRegister({ email, first_name, last_name, password, re_password })
    );
  };

  if (registered) router.push("/login");

  return (
    <div className=" flex gap-5 justify-center bg-white py-32 px-2">
      <div className=" border-gray-400/20 px-4 mr-3 border-r-2 w-1/3 md:flex flex-col justify-center hidden ">
        <h1 className="blue_gradient_text font-poppins font-bold text-4xl">
          Register to have access to your Portal.
        </h1>
        <ol className="mt-6">
          <li>If you do not have an account, please ensure to sign up.</li>
          <li>If you do not have an account, please ensure to sign up.</li>
        </ol>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Register();
        }}
        className=" py-2 px-6 rounded-lg"
      >
        <h1 className="text-center font-bold text-2xl mb-4 md:hidden">
          Register
        </h1>
        <label className="text-slate-700 text-sm"> Email Address</label>
        <p>
          <input
            className=" text-slate-700 w-full h-10 p-3 my-3 bg-slate-100"
            type="email"
            value={e_mail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@knoxxuniversity.edu"
          />
        </p>

        <div className="flex gap-3">
          <div className="flex flex-col">
            <label className="text-slate-700 text-sm"> First Name</label>
            <input
              className=" text-slate-700 w-full h-10 p-3 my-3 bg-slate-100"
              type="text"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-slate-700  text-sm"> Last Name</label>
            <input
              className=" text-slate-700 w-full h-10 p-3 my-3 bg-slate-100"
              type="text"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
            />
          </div>
        </div>
        <label className="text-slate-700  text-sm"> Password</label>
        <p>
          <input
            className="text-slate-700 w-full h-10 p-3  my-3 bg-slate-100"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <br />

          <label className="text-slate-700  text-sm"> Confirm Password</label>
          <br />
          <input
            className="text-slate-700 w-full h-10 p-3  my-3 bg-slate-100"
            type="password"
            value={re_password}
            onChange={(e) => setRepassword(e.target.value)}
            placeholder="Confirm password"
          />
        </p>
        <div className="">
          <div className="flex">
            {loading ? (
              <button className="disabled_primary_btn">Loading...</button>
            ) : (
              <button className="primary_btn">Register</button>
            )}
            <div className=" flex text-sm items-center ">
              <span className="pl-3">Already have an account?</span>
              <Link href={"/login"}>
                <span className="text-blue-500 ml-1 sm:ml-2 sm:text-medium">
                  Login
                </span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
