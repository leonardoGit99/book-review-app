import React from 'react';
import ReviewCard from '../components/ReviewCard';

function Reviews() {
  const reviews = [{
    id: 1,
    name: 'review 1'
  },
  {
    id: 2,
    name: 'review 2'
  }]
  return (
    <div className="flex flex-col items-center gap-6 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4  gap-12">
        {reviews.map((review) => (
          <ReviewCard key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;

