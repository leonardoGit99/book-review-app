import axios from "axios";
import { baseLocalUrl as api, headers } from "./api.config";
import { ApiResponse } from "@/types/api";
import { LoggedUser, NewUser } from "@/types/user";
import { LoginFormData } from "@/app/(routes)/login/page";

export const authUser = async (body: LoginFormData): Promise<ApiResponse<NewUser>> => {
  const { data } = await axios.post<ApiResponse<NewUser>>(`${api}/login`, JSON.stringify(body), { withCredentials: true });
  return data;
}

export const logoutUser = async (): Promise<void> => {
  await axios.post('/api/logout')
}

export const getLoggedUser = async (): Promise<ApiResponse<LoggedUser>> => {
  const { data } = await axios.get<ApiResponse<LoggedUser>>(`${api}/me`, {
    withCredentials: true,
  });
  return data;
}