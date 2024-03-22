import prisma from "@/db/db";
import jwt from "jsonwebtoken";

export default async function registerUser(
  email: string,
  username: string,
  password: string
) {
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    });

    const sign = jwt.sign(newUser.id, process.env.JWT_SECRET!);

    return {
      status: 200,
      id: sign,
    };
  } catch (error: any) {
    return {
      status: 403,
      message: "User with this email already exist, please login",
    };
  }
}
