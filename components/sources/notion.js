'use client'
import Link from "next/link"
import { NotionIcon } from "../icons"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const NotionSource = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const token = searchParams.get('token');
  const [pageData, setPageData] = useState([]); // [{ title: string, id: string }
  const [loading, setLoading] = useState(true);

  const fetchPages = async (token) => {
    setLoading(true);
    try {
      const pageRes = await fetch(`/api/notion/pages?token=${token}`);
      const pageDataJson = await pageRes.json();

      if (pageDataJson.error) {
        setPageData([]);
      } else {
        setPageData(pageDataJson);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      // request for pages from notion using search api
      fetchPages(token);
    } else {
      setLoading(false);
    }
  }, [token])

  return (
    <div className="max-w-2xl lg:w-4/6">
      <div className="mb-10 rounded border border-gray-200">

        {/* section title */}
        <div className="border-b border-gray-200 bg-white py-4 px-5">
          <h3 className="text-xl font-semibold leading-6 text-gray-900">
            Notion
          </h3>
        </div>

        {/* section content */}
        <div className="p-5">
          <div className="flex flex-col items-center">
            <div className="py-12">
              <Link
                className="inline-flex items-center justify-center h-8 transform-none normal-case cursor-pointer rounded leading-6 transition ease-in-out duration-150 shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-violet-500 border border-bg-grey-400 w-fit gap-3 bg-white p-6 font-semibold text-black hover:bg-gray-100 hover:text-black"
                href='/api/auth'>
                <NotionIcon className="fill-black h-6 w-6" />
                Connect Notion
              </Link>
            </div>
            <div className="font-semibold">
              {error}
            </div>
            {loading ? (
              <div className=" flex h-14 items-center justify-center">
                <span className="loading-dots">
                  <span className="bg-zinc-400"></span>
                  <span className="bg-zinc-400"></span>
                  <span className="bg-zinc-400"></span>
                </span>
              </div>
            ) : pageData.length > 0 && (
              <div className="flex w-full  flex-col items-center">
                <div className="w-full">
                  <div className="my-4 flex items-center">
                    <hr className="w-full border-t border-gray-300" />
                    <span className="whitespace-nowrap px-2 text-gray-600">
                      Imported Pages
                    </span>
                    <hr className="w-full border-t border-gray-300" />
                  </div>
                </div>
                <div className="max-h-[36rem] w-full overflow-auto p-4 pr-6">
                  {pageData.map((page, index) => (
                    <div key={index} className="grid grid-cols-10 pb-4">
                      <div className="col-span-9">
                        <span className="break-words">{page.title}</span>
                        <span className="text-sm text-zinc-500">{"(123 chars)"}</span>
                      </div>
                      <div className="flex items-center justify-end">
                        <button>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" class="ml-1 h-4 w-4 text-red-600"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotionSource;