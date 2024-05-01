import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WhatsAppChat } from "./WhatsAppChat";

const Ragistration = () => {
  const [user, setUser] = useState({
    FullName: "",
    email: "",
    password: "",
    mobile: "",
  });
  const handleSignup = () => {
    console.log(user);
    axios
      .post("http://localhost:3000/createUser", user)
      .then((res) => {
        console.log("Response from server:", res.data);
        setUser({
          FullName: "",
          email: "",
          password: "",
          mobile: "",
        });
      })
      .catch((error) => {
        console.error("Error During Registration", error);
      });
  };
  return (
    <div>
      <section
        className="bg-gray-50 dark:bg-gray-900"
        style={{ backgroundColor: "black" }}
      >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            style={{ color: "whitesmoke" }}
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Group Chat
          </a>
          <div
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            style={{ height: "600px" }}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>

              <div style={{ height: "50px" }}>
                <label
                  htmlhtmlFor="FullName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  style={{ height: "30px" }}
                  type="text"
                  name="FullName"
                  id="FullName"
                  value={user.FullName}
                  onChange={(e) =>
                    setUser({ ...user, FullName: e.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name"
                  required=""
                />
              </div>

              <div style={{ height: "50px" }}>
                <label
                  htmlhtmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your mobile
                </label>
                <input
                  style={{ height: "30px" }}
                  type="tel"
                  name="mobile"
                  id="mobile"
                  value={user.mobile}
                  onChange={(e) => setUser({ ...user, mobile: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your PhoneNumber"
                  required=""
                />
              </div>
              <div style={{ height: "50px" }}>
                <label
                  htmlhtmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  style={{ height: "30px" }}
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  autoComplete="off"
                />
              </div>
              <div style={{ height: "50px" }}>
                <label
                  htmlhtmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  style={{ height: "30px" }}
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  autoComplete="off"
                />
              </div>
              <Link to="/sign">
                <button
                  //  disabled={loading ? true : false}
                  style={{ height: "35px", backgroundColor: "black",marginTop:"30px" }}
                  type="submit"
                  onClick={handleSignup}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </Link>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/sign"
                  style={{ height: "35px" }}
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppChat/>
    </div>
  );
};

export default Ragistration;
