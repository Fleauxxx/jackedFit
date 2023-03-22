import React from 'react';
import { useQuery } from '@apollo/client';

import ReviewList from '../components/ReviewList';

import { QUERY_REVIEWS } from '../utils/queries';

const Reviews = () => {
  const { data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ReviewList
              reviews={reviews}
              title="Checkout Our Reviews..."
            />
        </div>
      </div>
    </main>
  );
};

export default Reviews;