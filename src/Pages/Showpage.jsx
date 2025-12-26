import React from "react";
import { useParams } from "react-router-dom";
import {
  Star, Share, Heart, DoorOpen, Utensils,
  Calendar, MapPin, Tv, Wifi, Snowflake, Car, Wind
} from "lucide-react";
import { PoperHomeLahore } from "../assets/Customapi";

function Showpage() {
  const { id } = useParams();

  const item = PoperHomeLahore.find(
    (data) => data.id === Number(id)
  );

  if (!item) return <p className="p-6">Listing not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 font-sans text-[#222222]">

      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl font-semibold">
          | Apartment in Lahore |
        </h1>
        <div className="flex gap-4 text-sm font-semibold underline">
          <button className="flex items-center gap-2">
            <Share size={16} /> Share
          </button>
          <button className="flex items-center gap-2">
            <Heart size={16} /> Save
          </button>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px] rounded-xl overflow-hidden mb-8">
        <div className="col-span-2 row-span-2">
          <img src={item.img} className="w-full h-full object-cover" />
        </div>
        <img src={item.room2} className="w-full h-full object-cover" />
        <img src={item.room3} className="w-full h-full object-cover" />
        <img src={item.room4} className="w-full h-full object-cover" />
        <img src={item.room5} className="w-full h-full object-cover" />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Left */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">
            Entire rental unit in Pakistan
          </h2>
          <p className="text-gray-600">
            {item.guests} guests · {item.bedroom} bedroom · {item.bath} bath
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <Star size={16} fill="black" />
            <span className="font-semibold">{item.rating}.0</span>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-700">
            {item.description}
          </p>
        </div>

        {/* Right (Price Box) */}
        <div>
          <div className="sticky top-24 border rounded-xl p-6 shadow-xl">
            <p className="text-2xl font-semibold">
              ${item.price}
              <span className="text-sm text-gray-500">
                {" "}for {item.nights} nights
              </span>
            </p>

            <button className="w-full mt-6 bg-[#E31C5F] text-white py-3 rounded-lg font-semibold">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showpage;
