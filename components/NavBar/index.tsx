import React from "react";
import Hamburger from "./Hamburger";
import Link from "next/link";

/**
 * Renders a Navigation bar for all pages
 *
 * @returns {JSX.Element}
 */
export default function NavBar(): JSX.Element {
  return (
    <nav className="flex items-center justify-between shadow-lg shadow-slate-100 bg-zinc-100 dark:bg-zinc-900 dark:shadow-zinc-900 py-4 px-8 sm:px-16 lg:px-48 fixed w-full z-50">
      <Link href="/" className="text-2xl">
        وودین
      </Link>
      <ul className="flex items-center gap-4 max-sm:hidden">
        <li className="relative dropdown group">
          <Link href="#" className="hover:text-cyan-700">
            همه محصولات
          </Link>

          <div className="dropdown-menu absolute hidden group-hover:block">
            <ul className="bg-white dark:bg-zinc-800 p-4 shadow-lg min-w-40 h-auto mt-4 flex flex-col gap-4 rounded-lg">
              <li>
                <Link href="#" className="hover:text-cyan-700">
                  دکوراسیون خانگی
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-700">
                  دکوراسیون اداری
                </Link>
              </li>
            </ul>
          </div>
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

      <Hamburger />
    </nav>
  );
}
