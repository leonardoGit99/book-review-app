import axios from "axios";
import { baseLocalUrl as api, headers } from "./api.config";
import { ApiResponse } from "@/types/api";
import { NewUser } from "@/types/user";
import { LoginFormData } from "@/app/(routes)/login/page";

export const authUser = async (body: LoginFormData): Promise<ApiResponse<NewUser>> => {
  const { data } = await axios.post<ApiResponse<NewUser>>(`${api}/login`, JSON.stringify(body), { withCredentials: true });
  return data;
}