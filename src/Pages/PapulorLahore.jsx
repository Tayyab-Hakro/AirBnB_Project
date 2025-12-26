import React, { useState } from "react";
import { PoperHomeLahore } from "../assets/Customapi";
import { FaArrowRight, FaStar, FaHeart, FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
function PopularLahore({title}) {
  const [StartIndx, SetStartIndx] = useState(0);
  const lastImg = 5;
const navigate = useNavigate();
  const HandleNext = () => {
    SetStartIndx(prev => Math.min(prev + 1, PoperHomeLahore.length - lastImg));
  };

  const HandlePrev = () => {
    SetStartIndx(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="p-4 bg-white">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
         {title} <FaArrowRight className="text-sm" />
        </h1>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={HandlePrev}
            disabled={StartIndx === 0}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-40 hover:bg-gray-300 transition"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={HandleNext}
            disabled={StartIndx + lastImg >= PoperHomeLahore.length}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-40 hover:bg-gray-300 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 gap-6"
          style={{ transform: `translateX(-${StartIndx * (100 / lastImg)}%)` }}
        >
          {PoperHomeLahore.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full md:w-1/2 lg:w-1/5 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Guest favorite
                </div>

                <div className="absolute top-3 right-3 z-10">
                  <FaHeart className="text-white text-xl hover:text-red-500 transition" />
                </div>
 
                <img onClick={() => navigate(`/page/${item.id}`)}
                  src={item.img }
                  alt="Home"
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-3">
                <h2 className="text-lg font-semibold">Apartment in Lahore</h2>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-gray-600">
                    <span className="font-semibold text-black">${item.price}</span> for {item.nights} nights
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-sm text-yellow-500" />
                    <span className="font-medium">{item.rating}.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularLahore;
