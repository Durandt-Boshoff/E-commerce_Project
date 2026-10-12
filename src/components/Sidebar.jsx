import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Exit from "../assets/icons/Exit.svg";
import Logo from "../assets/icons/Logo.svg";
import Menu from "../assets/icons/Menu.svg";
import Store from "../assets/icons/Store.svg";
import Cart from "../assets/icons/Cart.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`
        hidden md:flex
        bg-white
        h-screen
        p-[16px]
        rounded-sm
        flex-col
        justify-between
        transition-all
        duration-300
        ${isOpen ? "w-[134px]" : "w-[72px]"}
      `}
    >
      <div className="flex flex-col gap-[28px]">

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            className="w-[40px] h-[40px]"
            src={Logo}
            alt="Logo"
          />
        </div>

        {/* Menu / Close */}
        <div className="flex items-center justify-center">
          {isOpen ? (
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-[24px]"
              aria-label="Close menu"
            >
              ×
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
              aria-label="Open menu"
            >
              <img
                className="w-[40px] h-[40px]"
                src={Menu}
                alt="Menu"
              />
            </button>
          )}
        </div>

        {/* Store */}
        <Link
        to="/"
        className={`
            flex items-center overflow-hidden cursor-pointer
            transition-all duration-300 ease-in-out
            ${
            isOpen
            ? "w-[102px] h-[40px] gap-2 bg-[#1A1F16] text-white px-3 rounded-lg"
            : "w-[40px] h-[40px] justify-center bg-black rounded-lg"
            }
        `}
        >
        <img
            className="w-[24px] h-[24px] shrink-0"
            src={Store}
            alt="Store"
        />

        <span
            className={`
            whitespace-nowrap text-sm
            transition-all duration-300 ease-in-out
            ${
                isOpen
                    ? "max-w-[60px] opacity-100"
                    : "max-w-0 opacity-0"
                    }
            `}
        >
            Store
        </span>
        </Link>

        {/* Bag */}
        <Link
        to="/cart"
        className={`
            flex items-center overflow-hidden cursor-pointer
            transition-all duration-300 ease-in-out
            ${
            isOpen
                ? "w-[102px] h-[40px] gap-2 px-3"
                : "w-[40px] h-[40px] justify-center"
            }
        `}
        >
        <img
            className="w-[24px] h-[24px] shrink-0"
            src={Cart}
            alt="Bag"
        />

        <span
            className={`
            whitespace-nowrap text-sm text-[#1A1F16]
            transition-all duration-300 ease-in-out
            ${
                isOpen
                ? "max-w-[60px] opacity-100"
                : "max-w-0 opacity-0"
            }
            `}
        >
            Bag
        </span>
        </Link>
      </div>

      {/* Exit / Back */}
      <button
        onClick={() => navigate(-1)}
        className={`
          flex items-center
          cursor-pointer
          rounded-xl
          bg-[#E5252C]
          text-white
          ${
            isOpen
              ? "gap-2 px-2 py-2"
              : "w-[40px] h-[40px] justify-center self-center"
          }
        `}
      >
        <img
          className="w-[24px] h-[24px]"
          src={Exit}
          alt="Exit"
        />

        {isOpen && (
          <span className="text-sm">
            Logout
          </span>
        )}
      </button>
    </div>
  );
}

export default Sidebar;