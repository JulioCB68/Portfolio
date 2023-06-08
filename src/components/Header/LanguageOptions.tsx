import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { languages } from "@/i18n/options";

const LanguageOptions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="bg-gray-800 hover:bg-gray-700 inline-flex items-center justify-center space-x-2 rounded-md px-4 py-2 text-white outline-0"
        onClick={toggleMenu}
      >
        <span className="flex items-center justify-between text-black dark:text-white ">
          {t("selectYourLanguage")}
          {isOpen ? <FiChevronUp size={23} /> : <FiChevronDown size={23} />}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-4 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 2xl:left-0">
          <div
            className="w-full appearance-none rounded bg-white leading-tight shadow transition delay-150 ease-in-out focus:outline-none "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((languageOptions) => (
              <div
                key={languageOptions.value}
                className="flex cursor-pointer items-center justify-between p-4 hover:bg-slate-100 dark:bg-header hover:dark:bg-slate-100 hover:dark:text-black"
                onClick={() => handleLanguageChange(languageOptions.value)}
              >
                <span>{languageOptions.name}</span>
                <Image
                  src={languageOptions.flag}
                  alt={languageOptions.value}
                  className="h-4 w-4 rounded-full object-cover"
                  width={25}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageOptions;
