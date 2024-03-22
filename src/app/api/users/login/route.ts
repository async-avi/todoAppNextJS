import loginUser from "@/controllers/user/users.login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { param, password } = body;
    const loginResponse = await loginUser(param, password);
    return NextResponse.json(loginResponse);
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Servers are offline at the moment. Please try again later",
    });
  }
}
