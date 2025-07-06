// import Search from "@/components/UI/Search";
import { Bars3Icon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import SideBarMenu from "../SidebarMenu/SidebarMenu";
import { useSelector } from "react-redux";
import Link from "next/link";

function MobileNavbar() {
  const router = useRouter();
  const [showSideBar, setShowBar] = useState(false);
  const pcbuild = useSelector((state) => state.pcbuild);

  return (
    <>
      <header className="sticky top-0 inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:hidden block py-4 transition-all">
        <div className="flex items-center w-full justify-between  mb-4">
          <div className="flex items-center space-x-4">
            <div>
              <Bars3Icon className="w-8 cursor-pointer" onClick={() => setShowBar(true)} />
            </div>
            <Link href={"/"} className="flex items-center font-bold">
              Gadget Galaxy
            </Link>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/add-to-cart")}
          >
            {/* <ComputerDesktopIcon className="xl:w-10 w-9 link" /> */}
            <i class="material-icons">shopping_basket</i>
            <div className="absolute -top-2 -right-1 rounded-full text-white bg-blue-light p-1 flex items-center justify-center text-xs font-extrabold">
              {pcbuild?.qty}
            </div>
          </div>
        </div>
        <div>{/* <Search /> */}</div>
      </header>
      <div
        className={`z-40 fixed inset-y-0 left-0 overflow-hidden transition-all duration-300  shadow-2xl  ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        }
          `}
      >
        <SideBarMenu closeSideBar={() => setShowBar(false)} />
      </div>
    </>
  );
}

export default MobileNavbar;
