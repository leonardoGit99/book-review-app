export type Review = {
  id: number,
  name: string,
  book_title: string,
  rating: number,
  review: string,
  mood: string
}

export type NewReview = Omit<Review, 'id'>


export type Reviews = Review[]

