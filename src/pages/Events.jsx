import React from "react";
import { Helmet } from "react-helmet-async";

const eventsData = [
  {
    id: 1,
    title: "Local Food Festival",
    category: "Local Events",
    date: "July 12, 2025",
    location: "City Park, Dhaka",
  },
  {
    id: 2,
    title: "React Bangladesh Conference",
    category: "Conference",
    date: "July 5, 2025",
    location: "BICC, Dhaka",
  },
  {
    id: 3,
    title: "Creative Design Workshop",
    category: "Workshop",
    date: "May 25, 2025",
    location: "Innovation Hub, Chattogram",
  },
  {
    id: 4,
    title: "Dhaka Football League",
    category: "Sports",
    date: "April 20, 2025",
    location: "National Stadium, Dhaka",
  },
  {
    id: 5,
    title: "Modern Art Exhibition",
    category: "Art Exhibition",
    date: "August 10, 2025",
    location: "Art Gallery, Sylhet",
  },
  {
    id: 6,
    title: "Laravel Bangladesh Conference",
    category: "Conference",
    date: "September 10, 2025",
    location: "Friends Gallery, Dhaka",
  },
  {
    id: 7,
    title: "Khulna Football League",
    category: "Sports",
    date: "July 10, 2025",
    location: "City Park, Khulna",
  },
  {
    id: 8,
    title: "Modern Paint Exhibition",
    category: "Art Exhibition",
    date: "January 10, 2025",
    location: "Art Gallery, Rajshahi",
  },
  {
    id: 9,
    title: "Dgital Art Exhibition",
    category: "Art Exhibition",
    date: "March 10, 2025",
    location: "Art Gallery, Sylhet",
  },
  {
    id: 10,
    title: "BELTA National Conference",
    category: "Conference",
    date: "November 10, 2025",
    location: "BUET,Dhaka",
  },
  {
    id: 11,
    title: "bida investment summit",
    category: "Conference",
    date: "October 10, 2025",
    location: "Sheraton Hotels, Dhaka",
  },
  {
    id: 12,
    title: "JS Bangladesh Conference",
    category: "Conference",
    date: "July 25, 2025",
    location: "Art Gallery, Barisal",
  },
];

const Events = () => {
  return (
    <div className="bg-gray-100 lg:px-16 lg:py-14">
      <Helmet>
        <title>Event Explorer | All Events</title>
      </Helmet>
      <p className="text-center text-gray-600 mb-10 px-4 md:px-6 lg:px-0">
        Discover local events, inspiring conferences, hands-on workshops,
        exciting sports matches, and creative art exhibitions happening near
        you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-4 md:mx-4 lg:mx-1">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold text-pink-500 mb-1">
              {event.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{event.category}</p>
            <p className="text-sm text-gray-700">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Location:</strong> {event.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
