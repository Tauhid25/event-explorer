import React from "react";
import { useLoaderData } from "react-router";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  const eventsData = useLoaderData();
  return (
    <div className="bg-gray-100">
      <div className=" rounded-2xl px-4 md:px-8 lg:px-16 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center py-3">Upcoming <span className="text-pink-500">Events</span> 2025</h1>
        <p className="text-center text-gray-600 mb-10">Explore the future of innovation with our upcoming events in AI, Blockchain, EdTech, and more.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event) => (
            <EventCard event={event} key={event.id}></EventCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
