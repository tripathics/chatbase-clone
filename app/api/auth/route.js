import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const authURL = process.env.NOTION_AUTH_URL;

export const GET = async (req) => {
  return redirect(authURL);
}

export const POST = async (req) => {
  // method not allowed
  return NextResponse({
    status: 405,
    body: "Method Not Allowed",
  })
}