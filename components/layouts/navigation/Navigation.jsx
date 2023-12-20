import { MenuButton } from "./NavButtons";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Navigation = () => {
  const SiteLinks = [
    { name: "Help", href: "#" },
    { name: "Account", href: "#", icon: " →" },
  ];

  const pageLinks = [
    { name: "Chatbot", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Dashboard", href: "#" },
    { name: "Sources", href: "#", active: true },
    { name: "Integrations", href: "#" },
    { name: "Embed on site", href: "#" },
    { name: "Share", href: "#" },
    { name: "Delete", href: "#" },
  ];

  const breadcrumbs = [
    { name: "Chatbots", href: "#" },
    { name: "github.io", href: "#" },
  ];

  return (
    <section className="flex flex-col">
      <header className="w-full flex-col rounded-t-3xl border-b lg:flex">
        <section className="z-10 flex flex-row items-center justify-between px-6 py-6 lg:px-8">
          <div className="flex items-center">
            <nav className="flex">
              <div className="flex flex-row items-center space-x-2 sm:space-x-0">
                <div className="flex items-center">
                  <a href="/">
                    <div className="flex flex-row items-center gap-1">
                      <Logo />
                    </div>
                  </a>
                  {breadcrumbs.length > 0 && (
                    <span className="mx-2 hidden text-lg text-gray-300 sm:block">
                      /
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center">
                  {breadcrumbs.map(({ name, href }, index) => {
                    if (index === breadcrumbs.length - 1) {
                      return (
                        <div key={index}>
                          <button className="pointer-events-none block gap-3 lg:hidden">
                            <div className="flex flex-row items-center font-medium transition-all ease-in-out">
                              <h1 className="text-sm font-bold">{name}</h1>
                            </div>
                          </button>
                          <div className="hidden lg:block">
                            <h1 className="text-md font-medium">{name}</h1>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index} className="flex items-center">
                          <a
                            href={href}
                            className="text-sm font-normal sm:text-base"
                          >
                            {name}
                          </a>
                          <span className="mx-2 text-lg text-gray-300 block">
                            /
                          </span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </nav>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <MenuButton />

            {SiteLinks.map(({ name, href, icon }, index) => (
              <a
                className="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-slate-600  outline-0 transition-all duration-75  ease-in-out hover:text-slate-900 lg:block"
                href={href}
                key={index}
              >
                {name}
                {icon && <span>{icon}</span>}
              </a>
            ))}
          </div>
        </section>
        <nav className="no-scrollbar -mt-1 flex flex-row items-center justify-start  gap-7 overflow-auto whitespace-nowrap p-3 font-medium lg:justify-center lg:p-1">
          {pageLinks.map(({ name, href, active }, index) =>
            active ? (
              <a
                className="text-slate-800 relative col-span-1  items-center px-1  pt-1 pb-1 text-sm font-medium"
                key={index}
                href={href}
              >
                {name}
                <div className="bg-chatbase-gradient-light absolute -left-0 top-[2.45rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out lg:top-[1.95rem]"></div>
              </a>
            ) : (
              <a
                className="text-gray-500 hover:text-gray-600 relative col-span-1  items-center px-1  pt-1 pb-1 text-sm font-medium"
                key={index}
                href={href}
              >
                {name}
                <div className="group-hover/link:bg-gray-200 absolute -left-0 top-[2.45rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out lg:top-[1.95rem]"></div>
              </a>
            )
          )}
        </nav>
      </header>
      <MobileNav />
    </section>
  );
};

export default Navigation;
