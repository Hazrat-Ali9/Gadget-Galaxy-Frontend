import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import onClickOutside from "react-onclickoutside";

function Dropdown({ hideDropDown, DropdownItem }) {
  const router = useRouter();
  Dropdown.handleClickOutside = hideDropDown;

  return (
    <div className="font-medium w-36 bg-white text-sm rounded shadow overflow-hidden border border-gray-100">
      {DropdownItem.map((item) => {
        if (item.name === "Logout") {
          return (
            <div
              key={item.id}
              className="dropDownOption"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </div>
          );
        }

        return (
          <div
            key={item.id}
            className="dropDownOption border-b border-gray-200"
            onClick={() => router.push(`/${item.path}`)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
