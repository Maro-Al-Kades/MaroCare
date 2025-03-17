"use server";

import { connectToDatabase } from "@/database/mongodb";
import User from "@/models/user.schema";

export async function GET(request: Request) {
  await connectToDatabase();

  const users = await User.find({});

  return new Response(JSON.stringify(users), {
    status: 200,
  });
}
