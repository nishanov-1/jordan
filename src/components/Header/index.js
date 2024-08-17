import React from "react";
import log from "..//..//assets/img/logos (1).png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <div className="py-[15px] sticky top-0" id="header">
      <div className="container py-7">
        <div className=" flex items-center justify-between">
          <img src={log} alt="" />
          <div className=" flex items-center gap-11">
            <Link
              to={"/"}
              className=" text-white text-2xl font-black tracking-[3px]"
            >
              HOME
            </Link>

            <Link
              to={"/"}
              className=" text-white text-2xl font-black tracking-[3px]"
            >
              MAN
            </Link>
            <Link
              to={"/"}
              className=" text-white text-2xl font-black tracking-[3px]"
            >
              WOMAN
            </Link>
            <Link
              to={"/"}
              className=" text-white text-2xl font-black tracking-[3px]"
            >
              KIDS
            </Link>
            <Link
              to={"/"}
              className=" text-white text-2xl font-black tracking-[3px]"
            >
              SALE
            </Link>
          </div>
          <div className=" flex items-center  gap-12">
            <a className="text-white text-2xl">
              <FaSearch />
            </a>
            <a className="text-white text-2xl">
              <IoMdCart />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
