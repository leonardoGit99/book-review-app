export type Review = {
  id: number,
  name: string,
  book_title: string,
  rating: string,
  review: string,
  mood: string
}

export type NewReview = Omit<Review, 'id'> & {
  user_id: number
}


export type Reviews = Review[]

