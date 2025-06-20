import React from 'react';
import Review from '../../../components/Review';
import { getAllReviews } from '@/services/review';
import { Review as ReviewType } from '@/types/review';
import CustomSheet from '@/components/CustomSheet';


async function Reviews() {
  const { data: reviews } = await getAllReviews();
  return (
    <>
      <div className='mt-6'>
        <CustomSheet
          triggerBtnLabel="Add new review"
          sheetTitle='New review'
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-12">
        {reviews && reviews.map((review: ReviewType) => (
          <Review
            id={review.id}
            key={review.id}
            name={review.name}
            book_title={review.book_title}
            rating={review.rating}
            review={review.review}
            mood={review.mood}
          />
        ))}
      </div>
    </>
  );
}

export default Reviews;

