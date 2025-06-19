import React from 'react';
import Review from '../../components/Review';
import { getAllReviews } from '@/services/review';


async function Reviews() {
  const  reviews = await getAllReviews();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-6">
      {reviews && reviews.map((review) => (
        <Review
          id={review.id}
          key={review.id}
          userName={review.name}
          bookTitle={review.book_title}
          rating={review.rating}
          review={review.review}
          mood={review.mood}
        />
      ))}
    </div>
  );
}

export default Reviews;

