"use client";

import MenuIcon from "@/components/icons/menu";
import CloseIcon from "@/components/icons/close";

const handleMenu = (type) => {
  const mobileMenu = document.querySelector("#mobile-menu");
  if (type === "open") {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      mobileMenu.setAttribute("data-state", "open");
    }, 0);
  } else {
    mobileMenu.setAttribute("data-state", "closed");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 500);
  }
};

const MenuButton = () => {
  return (
    <button
      onClick={(e) => handleMenu("open")}
      className="flex flex-row items-start justify-start gap-3 lg:hidden"
    >
      <div className="flex flex-row items-center font-medium transition-all ease-in-out">
        <MenuIcon />
        <span className="sr-only">Open Menu</span>
      </div>
    </button>
  );
};

const CloseButton = () => {
  return (
    <button
      onClick={(e) => handleMenu("close")}
      className="rounded-sm  transition-opacity hover:opacity-100 focus:outline-none   disabled:pointer-events-none data-[state=open]:bg-slate-100   dark:data-[state=open]:bg-slate-700"
    >
      <div className="flex flex-row items-center font-medium transition-all ease-in-out">
        <CloseIcon />
        <span className="sr-only">Close</span>
      </div>
    </button>
  );
};

export { MenuButton, CloseButton };
