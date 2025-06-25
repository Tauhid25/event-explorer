import React from "react";
import bannerImage1 from "../assets/banner-img-1.jpg";
import bannerImage2 from "../assets/banner-img-2.jpg";

const Banner = () => {
  return (
    <section className="text-center bg-gray-100 px-4 py-4 md:px-8 md:py-6 lg:px-16 lg:py-10">
      <div className="bg-white rounded-2xl shadow-md p-1">
        <div className="bg-gradient-to-b from-gray-100 to-white rounded-2xl px-4 md:px-8 py-6 md:py-10">
          {/* Heading */}
          <h1 className="text-xl md:text-2xl lg:text-3xl leading-tight font-bold">
            Discover Local <span className="text-pink-500">Events</span>,
            Conferences, <span className="text-pink-700">Workshops</span>,{" "}
            <br className="hidden md:block" />
            Sports & Art <span className="text-pink-500">Exhibitions</span>.
          </h1>

          {/* Description */}
          <p className="text-gray-700 mt-6 mb-8 text-base md:text-lg max-w-4xl mx-auto">
            Our platform helps you find and explore upcoming local events in
            your area. Browse by category, view event details, and share
            feedback—all in one place. Stay informed and never miss what's
            happening nearby.
          </p>

          {/* Search Box */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
            <input
              className="bg-white w-full lg:w-5/12 sm:w-80 px-4 py-2 rounded-2xl border border-gray-300 shadow-sm"
              type="text"
              placeholder="Search events..."
            />
            <button className="bg-pink-500 text-white px-3 py-1 md:text-lg md:px-6 md:py-2 rounded-3xl hover:bg-pink-600 transition duration-200">
              Search Now
            </button>
          </div>
          {/* Images */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <img
              src={bannerImage1}
              alt="Banner visual 1"
              className="rounded-lg md:rounded-xl lg:rounded-2xl sm:max-w-sm md:max-w-md lg:h-[270px]"
            />
            <img
              src={bannerImage2}
              alt="Banner visual 2"
              className="rounded-lg md:rounded-xl lg:rounded-2xl sm:max-w-sm md:max-w-md lg:h-[270px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
