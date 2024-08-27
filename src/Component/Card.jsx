import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ item, index, onDelete }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-72">
      {/* Delete Button */}
      <button
        onClick={() => onDelete(index)}
        className="absolute top-2 p-1 bg-gray-100 rounded-full left-2 text-red-500   hover:text-red-700"
      >
        <MdDeleteOutline size={24} />
      </button>

      {/* Image Section */}
      <img
        src={item.image || "default-image-url"}
        alt={item.data}
        className="w-full h-48 object-center object-contain"
      />

      {/* Card Content */}
      <div className="p-4 bg-gray-200 dark:bg-gray-400">
        <h4 className="font-bold text-xl mb-2 text-black">
         Title:  {item.data || "No Title"}  filter: {item.filter || "No Filter"}
        </h4>
      </div>
    </div>
  );
};

export default Card;
