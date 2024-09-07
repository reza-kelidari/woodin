import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-900 p-8 flex justify-between xl:px-64 2xl:px-96 max-sm:flex-col max-sm:gap-8">
      <div className="flex flex-col gap-8">
        <Link href="/" className="text-3xl">
          وودین
        </Link>
        <p className="w-full sm:w-80">
          در فروشگاه وودین شیک ترین و مدرن ترین دکوراسیون خانگی و اداری رو
          براتون فراهم کردیم. در فروشگاه وودین شیک ترین و مدرن ترین دکوراسیون
          خانگی و اداری رو براتون فراهم کردیم.
        </p>
      </div>

      <ul className="flex flex-col gap-2">
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

      <ul className="flex flex-col gap-2" dir="ltr">
        <li>
          <a href="mailto:info@example.com" className="hover:text-cyan-700">
            info@example.com
          </a>
        </li>
        <li>
          <a href="tel:02112345678" className="hover:text-cyan-700">
            021 - 1234 5678
          </a>
        </li>
        <li>
          <a
            href="https://github.com/reza-kelidari/woodin/"
            className="hover:text-cyan-700"
          >
            مشاهده در گیتهاب
          </a>
        </li>
      </ul>
    </footer>
  );
}
