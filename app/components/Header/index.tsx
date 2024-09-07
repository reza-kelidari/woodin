import Image from "next/image";
import React from "react";
import { ItemType } from "../types";
import Product from "@/components/Product";

export default function Header() {
  const items: ItemType[] = [
    {
      name: "صندلی های انتظار",
      category: "دکوراسیون اداری",
      image: "/paf-1.webp",
    },
    {
      name: "کتابخانه ها",
      category: "دکوراسیون خانگی",
      image: "/book-shelf-1.webp",
      className: "sm:col-start-2 sm:col-end-4 max-sm:order-first",
    },
    {
      name: "میز های کامپیوتر",
      category: "دکوراسیون اداری",
      image: "/pc-desk-1.webp",
    },
    {
      name: "مبلمان",
      category: "دکوراسیون خانگی",
      image: "/furniture-1.webp",
      className: "sm:col-span-2",
    },
    {
      name: "میز های جلو مبلی",
      image: "/mini-table-1.webp",
      category: "دکوراسیون خانگی",
      className: "sm:col-span-2",
    },
  ];

  return (
    <header className="w-full lg:w-3/4 2xl:w-7/12 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
      {items.map((item, index) => (
        <Product
          key={index}
          name={item.name}
          image={item.image}
          category={item.category}
          className={item.className}
        />
      ))}
    </header>
  );
}
