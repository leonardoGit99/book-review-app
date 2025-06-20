import { ApiResponse } from "@/types/api";
import { NewReview, Reviews } from "@/types/review";
import axios from "axios";
import { baseLocalUrl as api, headers } from "./api.config";
import { ReviewFormData } from "@/components/CustomSheet";

// Get all
export const getAllReviews = async (): Promise<ApiResponse<Reviews>> => {
  const { data } = await axios.get<ApiResponse<Reviews>>(`${api}/reviews`);
  return data;
}

// Add new review
export const createReview = async (body: ReviewFormData): Promise<ApiResponse<NewReview>> => {
  const { data } = await axios.post<ApiResponse<NewReview>>(`${api}/reviews`, JSON.stringify(body), { headers });
  return data;
}

