import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="mx-auto mt-8 h-0.5 w-full border-0 bg-neutral-200"></hr>
      <div className="mx-auto  flex flex-col p-4 text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Júlio Bento
          <Link href="/" className="hover:underline" />
        </div>
        <div className="mb-1 flex flex-row items-center justify-center space-x-2">
          <a href="https://github.com/hqasmei" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/hqasmei"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/hosnaqasmei/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="cursor-pointer text-neutral-500 transition-transform hover:-translate-y-1 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
