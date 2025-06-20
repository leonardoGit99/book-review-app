import { getCurrentUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getCurrentUser();
  console.log(user);

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    data: {
      userId: user.userId,
      name: user.name,
      iat: user.iat,
      exp: user.exp
    }
  });
}
