"use client";
import { useState } from "react";
import {
  ChatBubbleIcon,
  FileIcon,
  GlobeIcon,
  NotionIcon,
  TextIcon,
} from "@/components/icons";

const SubMenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    className="block h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    ></path>
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    className="block h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

const PageSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const sectionNavLinks = [
    { name: "Files", icon: FileIcon },
    { name: "Text", icon: TextIcon },
    { name: "Website", icon: GlobeIcon },
    { name: "Q&A", icon: ChatBubbleIcon },
    { name: "Notion", icon: NotionIcon, active: true },
  ];

  return (
    <div className="col-span-12 sm:col-span-4 lg:col-span-2">
      <div>
        <div className="md:hidden">
          <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-6 items-center justify-end sm:hidden">
                <div className="left-100 absolute inset-y-0 flex items-center sm:hidden">
                  <button
                    onClick={handleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    {isOpen ? (
                      <>
                        <span className="sr-only">Close main menu</span>
                        <XIcon />
                      </>
                    ) : (
                      <>
                        <span className="sr-only">Open main menu</span>
                        <SubMenuIcon />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="absolute right-0 z-10 mt-0 w-56 origin-top-right scale-100 transform rounded-md bg-white opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <ul className="-mx-2 space-y-1">
                    {sectionNavLinks.map(({ name, icon: Icon }, index) => (
                      <li key={index}>
                        <button className="text-gray-700 hover:bg-gray-50 hover:text-violet-600 group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold  leading-6">
                          {Icon && (
                            <Icon className="fill-gray-400 text-gray-400 group-hover:fill-violet-600 group-hover:text-violet-600 h-6 w-6 shrink-0" />
                          )}
                          {name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </div>

        {/* side nav items */}
        <div className="hidden grow flex-col gap-y-5 overflow-y-auto border-gray-200  bg-white sm:flex ">
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col">
              <li>
                <ul className="space-y-1">
                  {sectionNavLinks.map(({ name, icon: Icon }, index) => (
                    <li key={index}>
                      <button className="text-gray-700 hover:bg-gray-50 hover:text-violet-600 group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold  leading-6">
                        {Icon && (
                          <Icon className="fill-gray-400 text-gray-400 group-hover:fill-violet-600 group-hover:text-violet-600 h-6 w-6 shrink-0" />
                        )}
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageSideNav;
