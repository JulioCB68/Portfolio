"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const { t } = useTranslation();

  const [text] = useTypewriter({
    words: [t("Title"), "FrontEndDeveloper.tsx", "<Software Engineer />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="home">
      <div className=" animate-fadeIn animation-delay-2 mx-auto my-10 flex max-w-7xl flex-col items-center justify-center py-16 text-center sm:py-32 md:flex-row md:space-x-4 md:pb-72 md:pt-52 md:text-left">
        <div className="md:mr-16 md:mt-2 md:w-1/5 ">
          <Image
            src="/foto.png"
            alt="Profile image"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-4/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
            <span>{text}</span>
            <Cursor cursorColor="#F7ABDA" />
          </h1>
          <p className="mb-6 mt-4 text-lg md:text-2xl">
            {t("description1")}{" "}
            <span className="font-semibold text-purple">
              {t("description2")}
            </span>
            {t("description3")}
          </p>

          <Link
            href="#projects"
            className="rounded bg-purple px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-purpleDark"
          >
            {t("Projects")}
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <Link href="#about">
          <HiArrowDown size={35} className="animate-bounce text-purple" />
        </Link>
      </div>
    </section>
  );
}
