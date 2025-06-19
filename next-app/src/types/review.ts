export type Review = {
  id: number,
  userName: string,
  bookTitle: string,
  rating: number,
  review: string,
  mood: string
}

export type NewReview = Omit<Review, 'id'>


export type Reviews = Review[]

