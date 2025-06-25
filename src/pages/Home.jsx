import React from "react";
import UpcomingEvents from "../components/UpcomingEvents";
import SuccessfulEvents from "../components/SuccessfulEvents";
import ClientReview from "../components/ClientReview";
import Banner from "../components/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Event Explorer | Home</title>
      </Helmet>
      <Banner></Banner>
      <UpcomingEvents></UpcomingEvents>
      <SuccessfulEvents></SuccessfulEvents>
      <ClientReview></ClientReview>
    </div>
  );
};

export default Home;
