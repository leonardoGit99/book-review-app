import { ApiResponse } from "@/types/api";
import { Reviews } from "@/types/review";
import axios from "axios";
import { baseLocalUrl as api, headers } from "./api.config";

export const getAllReviews = async (): Promise<ApiResponse<Reviews>> => {
  const { data } = await axios.get<ApiResponse<Reviews>>(`${api}/reviews`);
  return data;
}