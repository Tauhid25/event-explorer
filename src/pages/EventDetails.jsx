import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const EventDetails = () => {
  const eventsData = useLoaderData();
  const { id } = useParams();
  const singleEvent = eventsData.find((event) => event.id === id);

  const handleReserveSeat = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Congratulation!",
      text: "You have successfully reserved a seat!",
      icon: "success",
    });
  };

  const { name, thumbnail, description, location, date, category, entry_fee } =
    singleEvent || {};
  return (
    <div className=" bg-gray-100 pb-4 md:py-8">
      <div className="bg-white mx-4 px-4 py-4 space-y-4 md:px-8 md:py-6 md:mx-12 md:space-y-8 lg:flex lg:mx-16 lg:px-6 lg:py-10 lg:gap-x-8 rounded-2xl">
        <Helmet>
          <title>Event Explorer | Details</title>
        </Helmet>
        <div className="lg:w-6/12">
          <img className="w-full mx-auto rounded-lg" src={thumbnail} alt="" />
        </div>
        <div className="lg:w-6/12">
          <div className="px-6 mx-auto">
            <h1 className="text-xl md:2xl lg:text-3xl font-bold">{name} </h1>
            <p className="py-2">{description}</p>
            <p className="md:text-lg">Venue : {location}</p>
            <p className="pb-2">Date : {date}</p>
            <div>
              <p>Type : {category}</p>
              <p>Entry Fees : {entry_fee} Taka</p>
            </div>
          </div>
          <div>
            <form onSubmit={handleReserveSeat} className="card-body">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Your Full Name"
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder=" Your Email"
                required
              />

              <div className="pt-4">
                <button
                  type="submit"
                  className="btn lg:w-[40%] bg-pink-500 text-white rounded-lg text-lg py-4 hover:bg-pink-600 transition"
                >
                  Reserve Seat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
