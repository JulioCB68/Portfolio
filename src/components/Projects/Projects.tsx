import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center text-4xl font-bold">
        Projects
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-teal-500"></hr>
      </h1>

      <div className="flex flex-col space-y-28"></div>
    </section>
  );
}
