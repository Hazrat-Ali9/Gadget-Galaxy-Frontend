import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Dropdown from "../../UI/Dropdown";

import { NavbarCategories, NavbarDropdown } from "@/constants/constants";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";

function Navbar() {
  const router = useRouter();
  const [dropDown, setDropDown] = useState(false);
  const [categoriesDropDown, setCategoriesDropDown] = useState(false);
  const { data: session, status } = useSession();
  const userImage = session?.user?.image || "/img/profile_pic.svg";

  return (
    <div>
      <SubNavbar />
      <MainNavbar/>
    </div>
  );
}

export default Navbar;
