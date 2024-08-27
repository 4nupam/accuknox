import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import PopUp from "./PopUp";
const Header = ({ onAddToList }) => {
  const [popup, setPopup] = useState(false);
  const popuphandler = () => {
    setPopup(!popup);
  };

  const reloadHandler = () => {
    window.location.reload();
  };
  const handleAdd = (newItems) => {
    onAddToList(newItems);
    popuphandler();
  };
  return (
    <div className="flex items-center justify-between">
      <span className="left text-bold ">CNAPP Dashboard</span>
      <div className="right flex items-center gap-3">
        <button
          className="flex items-center gap-1 p-1 border-2 rounded-md"
          onClick={popuphandler}
        >
          Add Widget <FaPlus />
        </button>
        {popup && <PopUp close={popuphandler} list={[]} setList={handleAdd} />}
        <button className="p-2 border-2 rounded-md" onClick={reloadHandler}>
          <FaRotate />
        </button>
        <button className="p-2 border-2 rounded-md">
          <BsThreeDotsVertical />
        </button>
        <span className="flex items-center gap-2 p-1 border-2 rounded-md ">
          <IoMdTime className="text-white" />
          <select name="" id="" className="bg-transparent outline-none">
            <option value="">Last 2 days</option>
            <option value="">Last Week</option>
            <option value="">Last Year</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default Header;
