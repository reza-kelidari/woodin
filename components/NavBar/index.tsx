import React from "react";
import Hamburger from "./Hamburger";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between shadow-lg shadow-slate-100 dark:bg-zinc-900 dark:shadow-zinc-900 p-4 fixed w-full z-50">
      <a href="/" className="text-2xl">
        وودین
      </a>
      <ul className="flex items-center gap-4 max-sm:hidden">
        <li className="relative dropdown group">
          <a href="#" className="hover:text-cyan-700">
            همه محصولات
          </a>

          <div className="dropdown-menu absolute hidden group-hover:block">
            <ul className="bg-white dark:bg-zinc-800 p-4 shadow-lg min-w-40 h-auto mt-4 flex flex-col gap-4 rounded-lg">
              <li>
                <a href="#" className="hover:text-cyan-700">
                  دکوراسیون خانگی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-700">
                  دکوراسیون اداری
                </a>
              </li>
            </ul>
          </div>
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

      <Hamburger />
    </nav>
  );
}
