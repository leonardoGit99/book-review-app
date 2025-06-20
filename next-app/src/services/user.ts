import axios from "axios";
import { baseLocalUrl, headers } from "./api.config";
import { ApiResponse } from "@/types/api";
import { LoggedUser, NewUser } from "@/types/user";
import { LoginFormData } from "@/app/(routes)/login/page";
import { RegisterBody, SignUpFormData } from "@/app/(routes)/signup/page";

export const authUser = async (body: LoginFormData): Promise<ApiResponse<NewUser>> => {
  const { data } = await axios.post<ApiResponse<NewUser>>(`${baseLocalUrl}/login`, JSON.stringify(body), { withCredentials: true });
  return data;
}

export const logoutUser = async (): Promise<void> => {
  await axios.post('/api/logout')
}

export const getLoggedUser = async (): Promise<ApiResponse<LoggedUser>> => {
  const { data } = await axios.get<ApiResponse<LoggedUser>>(`${baseLocalUrl}/me`, {
    withCredentials: true,
  });
  return data;
}


export const registerUser = async (body: RegisterBody): Promise<ApiResponse<NewUser>> => {
  const { data } = await axios.post<ApiResponse<NewUser>>(`${baseLocalUrl}/signup`, JSON.stringify(body), { withCredentials: true });
  return data;
}