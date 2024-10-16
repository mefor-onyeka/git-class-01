import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav
        className="p-3 items-center shadow-md shadow-blue-700 flex"
        style={{ display: "flex", justifyContent: "space-between " }}
      >
        <h1
          className="font-bold text-2xl text-blue-800"
          style={{ textShadow: "1px 1px 5px " }}
        >
          Jobhires
        </h1>
        <div
          className="flex gap-6 p-4 items-center"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Link>
            <button className="">Home</button>
          </Link>
          <Link>
            <button className="">About</button>
          </Link>
          <Link>
            <button className="">Contact us</button>
          </Link>
          <Link to="/login">
            <button className="rounded-md px-4 py-2 text-blue-700 shadow-md bg-white  shadow-blue-700">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="rounded-md px-4 py-2 bg-blue-700 text-white">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Home;
