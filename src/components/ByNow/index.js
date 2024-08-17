import React from "react";
import { useSelector } from "react-redux";
import BuyCard from "./Buycard";

const Buynow = () => {
  const { product1 } = useSelector((s) => s.addProduct);
  return (
    <div id="buynow">
      <div className="container">
        <div className=" mt-[50px] flex items-center flex-wrap gap-[50px]">
          {product1.map((el) => (
            <BuyCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buynow;
