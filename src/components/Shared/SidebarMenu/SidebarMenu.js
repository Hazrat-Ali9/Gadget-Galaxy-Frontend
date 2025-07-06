import Dropdown from "@/components/UI/Dropdown";
import { NavbarCategories, NavbarDropdown } from "@/constants/constants";
import {
  ChevronDownIcon,
  ComputerDesktopIcon,
  HomeIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import onClickOutside from "react-onclickoutside";

function SideBarMenu({ closeSideBar }) {
  const [dropDown, setDropDown] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  SideBarMenu.handleClickOutside = closeSideBar;
  const sideBarClickHandler = (href) => {
    closeSideBar();
    router.push(href);
  };
  const userImage = session?.user?.image || "/img/profile_pic.svg";
  return (
    <div className="relative h-full w-full sideBarMenu bg-white px-8 py-6  font-medium md:hidden">
      <Link href={"/"} className="font-bold">
        Badget Galaxy
      </Link>
      <div className=" h-0.5 my-4 w-full bg-gray-100"></div>
      <div className="my-8">
        {status === "loading" ? (
          <Skeleton circle={true} width={50} height={50} />
        ) : session?.user ? (
          <span
            className="relative"
            onClick={() => setDropDown((value) => !value)}
          >
            <span className="flex items-center cursor-pointer">
              <Image
                src={userImage}
                loading="lazy"
                alt=""
                width="24"
                height="24"
                className="object-contain w-10 h-10 rounded-full mr-1 hover:shadow-md"
              />
              <ChevronDownIcon className="lg:w-6 w-4" />
            </span>
            {dropDown && (
              <div className="absolute top-14 right-1">
                <Dropdown
                  DropdownItem={NavbarDropdown}
                  hideDropDown={() => setDropDown(false)}
                />
              </div>
            )}
          </span>
        ) : (
          <span
            className="link text-blue-light text-lg"
            onClick={() => router.push('/sign-in')}
          >
            Login
          </span>
        )}
      </div>
      <div className="gap-4 hidden flex flex-col">
        <div>
          <span
            onClick={() => sideBarClickHandler("/")}
            className="link inline-flex"
          >
            <HomeIcon className="w-5 mr-6" /> Home
          </span>
        </div>
        <div>
          <span
            onClick={() => sideBarClickHandler("/pc-builder")}
            className="link inline-flex"
          >
            <ComputerDesktopIcon className="w-5 mr-6" /> PC Builder
          </span>
        </div>
        <div>
          <span
            // onClick={() => sideBarClickHandler("/orders")}
            className="link inline-flex relative"
          >
            <ShoppingBagIcon className="w-5 mr-6" /> Categories
            <ul className="absolute left-12 top-10 list-disc w-full">
              {NavbarCategories.map((item) => (
                <li
                  key={item?.id}
                  onClick={() => sideBarClickHandler(`${item?.path}`)}
                  className="link text-sm mb-3 font-medium"
                >
                  {item?.name}
                </li>
              ))}
            </ul>
          </span>
        </div>
        {/* {session && (
          <div>
            <span
              onClick={() => {
                signOut();
              }}
              className="link inline-flex"
            >
              <ArrowLeftOnRectangleIcon className="w-5 mr-6" /> Logout
            </span>
          </div>
        )} */}
      </div>
      <div className="absolute top-2 hidden right-2">
        <XMarkIcon className="w-7" onClick={closeSideBar} />
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => SideBarMenu.handleClickOutside,
};

export default onClickOutside(SideBarMenu, clickOutsideConfig);
