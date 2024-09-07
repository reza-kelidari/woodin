"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

/**
 * Renders a Hamburger menu for Navigation bar, only in
 * small screens (smaller than 640px).
 *
 * This component is a client component, because it's
 * dynamic for changing state of hamburger menu
 *
 * @returns {JSX.Element}
 */
export default function Hamburger(): JSX.Element {
  /**
   * Declares show menu being shown or not
   */
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
          <Link href="#" className="hover:text-cyan-700">
            همه محصولات
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-cyan-700">
            تماس با ما
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-cyan-700">
            درباره ما
          </Link>
        </li>
      </ul>
    </div>
  );
}
