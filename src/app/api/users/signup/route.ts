import registerUser from "@/controllers/user/users.signup";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, username, password } = body;
    const signUpResponse = await registerUser(email, username, password);
    return NextResponse.json(signUpResponse);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Servers are offline at the moment. Please try again later",
    });
  }
}
