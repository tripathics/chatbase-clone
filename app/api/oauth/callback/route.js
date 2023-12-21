import { redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

const clientId = process.env.OAUTH_CLIENT_ID
const clientSecret = process.env.OAUTH_CLIENT_SECRET
const redirectUri = process.env.OAUTH_REDIRECT_URI

const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

export const GET = async (request) => {
  const { searchParams } = new URL(request.url)
  if (searchParams.get('error')) {
    return redirect('/?error=' + searchParams.get('error'))
  } else {
    const code = searchParams.get('code')

    const res = await fetch("https://api.notion.com/v1/oauth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${encoded}`,
      },
      body: JSON.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
      }),
    });

    const data = await res.json();
    if (data.error) {
      return redirect('/?error=' + data.error)
    }

    redirect('/?token=' + data.access_token);
  }
};

export const POST = async (request) => {
  // method not allowed
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}