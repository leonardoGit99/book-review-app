"use client";

import React, { useEffect, useState } from 'react';
import Review from '../../../components/Review';
import { getAllReviews } from '@/services/review';
import { Review as ReviewType } from '@/types/review';
import CustomSheet from '@/components/CustomSheet';

function Reviews() {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    getAllReviews().then(({ data }) => setReviews(data));
  }, []);

  return (
    <>
      <div className='mt-6'>
        <CustomSheet
          triggerBtnLabel="Add new review"
          sheetTitle='New review'
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-12">
        {reviews.map((review: ReviewType) => (
          <Review
            id={review.id}
            key={review.id}
            name={review.name}
            book_title={review.book_title}
            rating={review.rating}
            review={review.review}
            mood={review.mood}
            created_at={review.created_at}
          />
        ))}
      </div>
    </>
  );
}

export default Reviews;
