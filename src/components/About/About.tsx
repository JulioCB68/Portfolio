import React from "react";
import { useTranslation } from "react-i18next";

import { skills } from "./utils";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <div className="mx-auto my-12 max-w-7xl pb-12 md:pb-48 md:pt-16">
        <h1 className="pb-10 text-center text-4xl font-bold">
          {t("AboutMe")}
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-purple"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              {t("KnowMe")}
            </h1>
            <p>
              {t("about1")}{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Los Angeles, CA.
            </p>
            <br />
            <p>{t("about2")}</p>
            <br />
            <p>{t("about3")}</p>
            <br />
            <p>
              {t("about4")}{" "}
              <span className="font-bold text-purple">{t("about5")}</span>{" "}
              {t("about6")}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-2xl font-bold">{t("Skills")}</h1>
            <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="text-gray-500 mr-2 mt-2 rounded bg-gray px-4 py-2 font-semibold dark:bg-header"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
