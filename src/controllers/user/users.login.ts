import prisma from "@/db/db";
import jwt from "jsonwebtoken";

export default async function loginUser(param: string, password: string) {
  try {
    const concernedUserByEmail = await prisma.user.findFirst({
      where: {
        email: param,
      },
    });
    const concernedUserByUsername = await prisma.user.findFirst({
      where: {
        username: param,
      },
    });

    if (concernedUserByEmail) {
      const signEmail = jwt.sign(
        concernedUserByEmail.id,
        process.env.JWT_SECRET!
      );
      return {
        status: 200,
        id: signEmail,
      };
    } else if (concernedUserByUsername) {
      const signUsername = jwt.sign(
        concernedUserByUsername.id,
        process.env.JWT_SECRET!
      );
      return {
        status: 200,
        id: signUsername,
      };
    }
    return {
      status: 403,
      msg: "User does not exist",
    };
  } catch (error: any) {
    return {
      msg: error.message,
    };
  }
}
