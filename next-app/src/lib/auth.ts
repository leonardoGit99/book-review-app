import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export type TokenPayload = {
  userId: number;
  name: string;
  iat: number;
  exp: number;
};

export async function getCurrentUser(): Promise<TokenPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return null;

    const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
    const { payload } = await jwtVerify(token, secret);

    return payload as TokenPayload;
  } catch (error) {
    return null;
  }
}
