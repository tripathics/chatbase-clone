import PageSideNav from "@/components/layouts/PageSideNav"
import NotionSource from "@/components/sources/notion"

const PageHeader = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-row justify-between px-4">
      <h4 className="my-8 text-3xl font-bold">
        Sources
      </h4>
    </div>
  )
}

export default function Home() {
  return (<>
    <PageHeader />
    <div>
      <div className="max-w-7xl px-4 lg:mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* side nav */}
          <PageSideNav />
          {/* content */}
          <div className="col-span-12 sm:col-span-8 lg:col-span-10">
            <div className="flex flex-col align-top lg:flex-row lg:space-x-8 lg:align-middle">
              <NotionSource />
              {/* other information */}
              <div className="m-auto w-full lg:my-0 lg:w-2/6">
                <div className="rounded border p-4">
                  <div className="text-center font-semibold lg:mb-2">
                    Sources
                  </div>
                  <div className="mb-4 flex flex-col space-y-2">
                    <div className="text-sm text-zinc-700">
                      9 Links (36,997 detected chars)
                    </div>
                  </div>
                  <p className="flex flex-col text-sm">
                    <span className="font-semibold">
                      Total detected characters
                    </span>
                    <span className="flex justify-center">
                      <span className="font-bold">36,997</span>
                      <span className=" text-zinc-500">/ 400,000 limit</span>
                    </span>
                  </p>
                  <button data-variant="flat" className="root-btn mt-4 w-full">
                    Retrain Chatbot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
