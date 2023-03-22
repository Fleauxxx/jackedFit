import React from "react";
import { useQuery } from '@apollo/client';

import ReviewForm from "../components/ReviewForm";

import { QUERY_REVIEWS } from '../utils/queries';




const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
            {/* {loading ? (
            <div>Loading...</div> */}
          <ReviewForm />
        </div>
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          Checkout Our Reviews <a href="/reviews">Here</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
