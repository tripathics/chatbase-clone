import { NextRequest, NextResponse } from "next/server";

export const GET = async (req) => {
  // after authorization, get pages from notion using search API
  const { searchParams } = new URL(req.nextUrl);
  const access_token = searchParams.get('token');

  const notionSearchRes = await fetch('https://api.notion.com/v1/search', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Notion-Version': '2021-08-16',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      filter: {
        value: 'page',
        property: 'object'
      },
      sort: {
        direction: 'ascending',
        timestamp: 'last_edited_time'
      }
    })
  })
  const searchData = await notionSearchRes.json();
  const pageIds = searchData.results.map(page => page.id);

  // for each pageId, get page title and total characters
  let pageData = await Promise.all(pageIds.map(async (pageId) => {
    const notionPageRes = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Notion-Version': '2021-08-16',
        'Content-Type': 'application/json'
      }
    })
    const pageData = await notionPageRes.json();
    const title = pageData.properties.Title?.title[0]?.plain_text || 'Untitled';
    return { title, id: pageId }
  }))
  pageData = pageData.filter(page => page.title !== 'Untitled');
  if (pageData.length === 0) {
    return NextResponse.json({ error: 'No pages found' })
  }

  return NextResponse.json(pageData)
}

export const POST = async (req) => {
  // method not allowed
  return new NextResponse({
    status: 405
  })
}