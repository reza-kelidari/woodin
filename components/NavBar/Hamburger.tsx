"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamburger() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="sm:hidden">
      <GiHamburgerMenu
        className="size-10 bg-cyan-950 fill-white p-2 rounded-lg "
        onClick={() => setOpened(!opened)}
      />

      <ul
        className={`${
          !opened ? "-translate-y-96" : "translate-y-0"
        } transition-all flex flex-col h-fit rounded-2xl justify-between bg-white dark:bg-zinc-800 shadow-lg w-fit mx-auto px-16 py-8 items-center gap-4 sm:hidden absolute inset-x-0 top-24 text-xl`}
      >
        <li>
          <a href="#" className="hover:text-cyan-700">
            همه محصولات
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-700">
            تماس با ما
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-700">
            درباره ما
          </a>
        </li>
      </ul>
    </div>
  );
}
