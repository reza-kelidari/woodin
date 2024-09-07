import { ItemType } from "@/app/_Components/types";
import Image from "next/image";
import React from "react";

export default function Product({
  name,
  image,
  category,
  customClassName,
  price,
  offPrice,
}: ItemType) {
  return (
    <a
      href="#"
      className={
        customClassName +
        " relative min-w-48 max-sm:snap-center rounded-xl overflow-hidden sm:hover:shadow-lg transition-all group"
      }
    >
      <Image
        src={image}
        alt={name}
        height={250}
        width={500}
        className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-all group"
      />
      {price && (
        <div
          className={`${
            offPrice
              ? "bg-green-800 text-white"
              : "bg-white dark:bg-zinc-900"
          } flex flex-col gap-2 absolute left-2 top-2   py-1 px-2 text-sm rounded-lg group-hover:opacity-50 transition-all opacity-75`}
        >
          <span className={offPrice ? "line-through" : ""}>
            {price.toLocaleString("fa-ir")} تومان
          </span>
          {offPrice && <span>{offPrice.toLocaleString("fa-ir")} تومان</span>}
        </div>
      )}

      <div className="absolute right-2 bottom-2 bg-white dark:bg-zinc-900 py-2 px-4 rounded-lg group-hover:opacity-50 transition-all opacity-75">
        <h3 className="text-lg text-black dark:text-white">{name}</h3>
        <h4 className="text-md opacity-50 text-black dark:text-white">
          {category}
        </h4>
      </div>
    </a>
  );
}
