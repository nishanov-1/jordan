import React from "react";
import jump from "../../assets/img/jump.png";
import los from "../../assets/img/kross.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const nav = useNavigate();
  return (
    <div
      id="home"
      style={{
        background: `url("${jump}") no-repeat center/cover  `,
        minHeight: "80vh",
      }}
    >
      <div className="container">
        <div className="">
          <div className=" flex items-center justify-between pt-[700px]">
            <div className="">
              <h2 className="text-white text-2xl from-black">
                CHOOSE COLOR :{" "}
              </h2>
              <img src={los} alt="" className=" ml-[-80px]" />
            </div>
            <div className=" flex items-center gap-10 ml-[-30px]">
              <button
                onClick={() => nav("/addProduct")}
                className=" text-black from-black text-2xl bg-white py-[10px] px-[30px] border-2  border-inherit"
              >
                ADD TO CART
              </button>
              <button
                onClick={() => nav("/buynow")}
                className=" text-white from-black text-2xl  bg-transparent py-[10px] px-[30px] border-2  border-inherit"
              >
                BUY NOW
              </button>
            </div>
            <div className="">
              <h2 className="text-white text-2xl from-black">INSPIRATION</h2>
              <p className="text-white text-[15px]">
                Inspired by the design of the latest Air Jordan game shoe,
                <br /> the Jordan Jumpman 2021 helps up-and-coming players{" "}
                <br />
                level up their game.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
