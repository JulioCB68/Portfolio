"use client"; // This is a client component

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";

import { NAV_ITEMS } from "./utils";
import LanguageOptions from "./LanguageOptions";

export default function Navbar() {
  const { t } = useTranslation();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow dark:bg-header sm:px-10">
      <div className="mx-auto max-w-7xl justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">jc.dev</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-700 focus:border-gray-400 rounded-md p-2 outline-none focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.page}
                    className={
                      "block text-neutral-900 hover:text-neutral-500  dark:text-neutral-100 lg:inline-block"
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    {t(item.label)}
                  </Link>
                );
              })}
              <LanguageOptions />
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="rounded-xl bg-slate-100 p-2"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="rounded-xl bg-slate-100 p-2"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
