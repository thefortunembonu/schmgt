"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { handleLogin } from "../../redux/features/authActions";
import { useAppDispatch, useAppSelector } from "/redux/hooks";
import { toggleLoading } from "/redux/features/authSlice";

function LoginForm() {
  const router = useRouter();
  const [e_mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { loading, isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) router.push("/");

  const LoginFn = async () => {
    const email = e_mail.toLowerCase();
    try {
      await dispatch(handleLogin({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-28 flex gap-1 justify-center bg-white py-12 ">
      <div className="w-1/3 md:flex flex-col justify-center hidden ">
        <h1 className="blue_gradient_text font-poppins font-bold text-4xl">
          Log in to access special features on the app.
        </h1>
        <div className="mt-2 text-medium">
          <p>When you log in, you have access to:</p>
          <ol className="ml-3">
            <li>The School Portal</li>
            <li>Blog Posting</li>
            <li>Other stuff</li>
          </ol>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          LoginFn();
        }}
        className="py-3 px-4 rounded-lg"
      >
        <div className=" justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.0"
            stroke="gray"
            className="w-32 h-32 mx-auto "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <label className="text-slate-700 "> Email Address</label>
        <p>
          <input
            className=" text-slate-700 w-80 h-12 p-3 my-3 bg-slate-100"
            type="email"
            name="email"
            value={e_mail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@knoxxuniversity.edu"
          />
        </p>
        <label className="text-slate-700"> Password</label>
        <p>
          <input
            className="text-slate-700 w-80 h-12 p-3  my-3 bg-slate-100"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </p>
        <div>
          {loading ? (
            <button className="disabled_primary_btn ">Loading...</button>
          ) : (
            <button className="primary_btn">Login</button>
          )}

          <Link href="#" className="text-blue-500 text-sm mx-4">
            Forgot password?
          </Link>
        </div>

        <hr></hr>
        <p className="p-4">
          Do not have an account? please{" "}
          <Link href="/register" className="text-blue-500">
            register.
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
