import Logo from "./Logo";
import { CloseButton } from "./NavButtons";
import { ChatbotsIcon, HelpIcon, AccountIcon } from "@/components/icons";

const MobileNav = () => {
  const mobileMenuLinks = [
    { name: "Chatbots", href: "#", icon: ChatbotsIcon },
    { name: "Help", href: "#", icon: HelpIcon },
    { name: "Account", href: "#", icon: AccountIcon },
  ];

  return (
    <div
      id="mobile-menu"
      data-state="closed"
      className="hidden fixed p-6 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-zinc-950 inset-y-0 right-0 h-full w-screen data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm z-50 flex min-w-full flex-col items-start justify-start gap-4 rounded-md border bg-white py-5 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
    >
      <h2 className="dark:text-zinc-50 mb-2 flex w-full flex-row items-center justify-between text-sm font-medium text-gray-500">
        <a className="flex-row flex w-full items-center justify-start gap-3 px-2 font-normal text-gray-700 hover:text-gray-900">
          <div className="flex flex-row items-center gap-1">
            <Logo />
          </div>
        </a>
        <CloseButton />
      </h2>
      <div className="mb-2 h-px w-full bg-gray-200"></div>
      {mobileMenuLinks.map(({ name, href, icon }, index) => (
        <a
          key={index}
          className="flex w-full flex-row  gap-3  rounded-md p-2 text-start  text-base  font-semibold outline-0 transition-all ease-in-out hover:bg-slate-100 hover:text-violet-700"
          href={href}
        >
          {icon && icon()}
          <p>{name}</p>
        </a>
      ))}
    </div>
  );
};

export default MobileNav;
