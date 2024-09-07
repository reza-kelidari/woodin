import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="w-full lg:w-3/4 2xl:w-7/12 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
      <a
        href="#"
        className="relative rounded-xl overflow-hidden sm:hover:shadow-lg transition-all group"
      >
        <Image
          src="/paf-1.webp"
          alt="Paf"
          height={250}
          width={500}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-all group"
        />
        <div className="absolute right-2 bottom-2 bg-white dark:bg-zinc-900 py-2 px-4 rounded-lg group-hover:opacity-50 transition-all opacity-75">
          <h3 className="text-lg text-black dark:text-white">صندلی انتظار</h3>
          <h4 className="text-md opacity-50 text-black dark:text-white">
            دکوراسیون اداری
          </h4>
        </div>
      </a>
      <a
        href="#"
        className="sm:col-start-2 sm:col-end-4 relative rounded-xl overflow-hidden order-first sm:order-none sm:hover:shadow-lg transition-all group"
      >
        <Image
          src="/book-shelf-1.webp"
          alt="Furniture"
          height={250}
          width={500}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-all group"
        />
        <div className="absolute right-2 bottom-2 bg-white dark:bg-zinc-900 py-2 px-4 rounded-lg group-hover:opacity-50 transition-all opacity-75">
          <h3 className="text-lg text-black dark:text-white">کتابخانه</h3>
          <h4 className="text-md opacity-50 text-black dark:text-white">
            دکوراسیون خانگی
          </h4>
        </div>
      </a>
      <a
        href="#"
        className="relative rounded-xl overflow-hidden sm:hover:shadow-lg transition-all group"
      >
        <Image
          src="/pc-desk-1.webp"
          alt="PC Desk"
          height={250}
          width={500}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-all group"
        />
        <div className="absolute right-2 bottom-2 bg-white dark:bg-zinc-900 py-2 px-4 rounded-lg group-hover:opacity-50 transition-all opacity-75">
          <h3 className="text-lg text-black dark:text-white">میز کامپیوتر</h3>
          <h4 className="text-md opacity-50 text-black dark:text-white">
            دکوراسیون اداری
          </h4>
        </div>
      </a>
      <a
        href="#"
        className="sm:col-span-2 relative rounded-xl overflow-hidden sm:hover:shadow-lg transition-all group"
      >
        <Image
          src="/furniture-1.webp"
          alt="Furniture"
          height={250}
          width={500}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-all group"
        />
        <div className="absolute right-2 bottom-2 bg-white dark:bg-zinc-900 py-2 px-4 rounded-lg group-hover:opacity-50 transition-all opacity-75">
          <h3 className="text-lg text-black dark:text-white">مبلمان 8 نفره</h3>
          <h4 className="text-md opacity-50 text-black dark:text-white">
            دکوراسیون خانگی
          </h4>
        </div>
      </a>
      <a
        href="#"
        className="sm:col-span-2 relative rounded-xl overflow-hidden sm:hover:shadow-lg transition-all group"
      >
        <Image
          src="/mini-table-1.webp"
          alt="Furniture"
          height={250}
          width={500}
          className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-all group"
        />
        <div className="absolute right-2 bottom-2 bg-white dark:bg-zinc-900 py-2 px-4 rounded-lg group-hover:opacity-50 transition-all opacity-75">
          <h3 className="text-lg text-black dark:text-white">میز جلو مبلی</h3>
          <h4 className="text-md opacity-50 text-black dark:text-white">
            دکوراسیون خانگی
          </h4>
        </div>
      </a>
    </header>
  );
}
