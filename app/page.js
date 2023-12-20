import { ChatBubbleIcon, FileIcon, GlobeIcon, NotionIcon, TextIcon } from "@/components/icons"
import PageSideNav from "@/components/layouts/PageSideNav"
import Navigation from "@/components/layouts/navigation"

const Layout = ({ children }) => {
  return (
    <div className="___layout">
      <Navigation />
      {children}
    </div>
  )
}

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
  const sectionNavLinks = [
    { name: "Files", icon: FileIcon },
    { name: "Text", icon: TextIcon },
    { name: "Website", icon: GlobeIcon },
    { name: "Q&A", icon: ChatBubbleIcon },
    { name: "Notion", icon: NotionIcon, active: true },
  ]

  return (
    <Layout>
      <PageHeader />
      {/* page content */}
      <div>
        <div className="max-w-7xl px-4 lg:mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* side nav */}
            <PageSideNav />
            {/* content */}
            <div className="col-span-12 sm:col-span-8 lg:col-span-10">
              <div className="flex flex-col align-top lg:flex-row lg:space-x-8 lg:align-middle">

                {/* section main */}
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
                          <button className="inline-flex items-center justify-center h-8 transform-none normal-case cursor-pointer rounded leading-6 transition ease-in-out duration-150 shadow-sm text-center focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-violet-500 border border-bg-grey-400 w-fit gap-3 bg-white p-6 font-semibold text-black hover:bg-gray-100 hover:text-black"
                          >
                            <NotionIcon className="fill-black h-6 w-6" />
                            Connect Notion
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
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
    </Layout>
  )
}
