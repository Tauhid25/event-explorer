import React from "react";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { id, name, thumbnail, date, location } = event;
  return (
    <div className="bg-white rounded-2xl px-3 py-6">
      <div>
        <img
          className="w-[350px] h-[200px] rounded-lg mx-auto"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="px-8 pt-4">
        <p className="font-semibold text-lg">{name}</p>
        <div className="flex gap-x-3">
          <p>{location}</p>
          <p>{date}</p>
        </div>
        {/* View Details Button */}
        <Link to={`/event-details/${id}`}>
          <button className="w-full rounded-2xl border border-pink-500 text-pink-500 font-medium py-2 mt-2 hover:bg-pink-500 hover:text-white transition duration-200">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
