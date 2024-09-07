import React from "react";
import Product from "@/components/Product";
import { ItemType } from "../types";

/**
 * Renders a header for Home page
 *
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
  /**
   * List of Header section's items
   *
   * Usually 5 item
   */
  const HeaderItems: ItemType[] = [
    {
      name: "صندلی های انتظار",
      category: "دکوراسیون اداری",
      image: "paf-1.webp",
    },
    {
      name: "کتابخانه ها",
      category: "دکوراسیون خانگی",
      image: "book-shelf-1.webp",
      customClassName: "sm:col-start-2 sm:col-end-4 max-sm:order-first",
    },
    {
      name: "میز های کامپیوتر",
      category: "دکوراسیون اداری",
      image: "pc-desk-1.webp",
    },
    {
      name: "مبلمان",
      category: "دکوراسیون خانگی",
      image: "furniture-1.webp",
      customClassName: "sm:col-span-2",
    },
    {
      name: "میز های جلو مبلی",
      image: "mini-table-1.webp",
      category: "دکوراسیون خانگی",
      customClassName: "sm:col-span-2",
    },
  ];

  return (
    <header className="w-screen max-sm:px-16 sm:w-4/5 md:w-full lg:w-3/4 xl:w-7/12 grid grid-cols-4 gap-4 max-sm:gap-8 max-sm:flex max-sm:overflow-x-scroll max-sm:snap-proximity max-sm:snap-x">
      {HeaderItems.map((item, index) => (
        <Product
          key={index}
          name={item.name}
          image={item.image}
          category={item.category}
          customClassName={item.customClassName}
        />
      ))}
    </header>
  );
}
