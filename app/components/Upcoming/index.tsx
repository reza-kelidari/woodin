import React from "react";
import { ItemType } from "../types";
import Product from "@/components/Product";

export default function Upcoming() {
  const items: ItemType[] = [
    {
      name: "فایل اداری",
      image: "/file-1.webp",
      category: "دکوراسیون اداری",
      price: 3000000,
    },
    {
      name: "کتابخانه",
      image: "/book-shelf-1.webp",
      category: "دکوراسیون خانگی",
      price: 3000000,
    },
    {
      name: "کتابخانه",
      image: "/book-shelf-2.webp",
      category: "دکوراسیون خانگی",
      price: 3000000,
      offPrice: 2500000,
    },
    {
      name: "مبلمان 8 نفره",
      image: "/furniture-1.webp",
      category: "دکوراسیون خانگی",
      price: 13000000,
    },
    {
      name: "صندلی انتظار",
      image: "/paf-1.webp",
      category: "دکوراسیون اداری",
      price: 3000000,
    },
    {
      name: "آلاچیق",
      image: "/garden-1.webp",
      category: "ویلا",
      price: 30000000,
    },
    {
      name: "میز مدیریتی",
      image: "/management-desk-1.webp",
      category: "دکوراسیون اداری",
      price: 13000000,
    },
    {
      name: "میز جلو مبلی",
      image: "/mini-table-1.webp",
      category: "دکوراسیون خانگی",
      price: 3000000,
    },
    {
      name: "میز کامپیوتر",
      image: "/pc-desk-1.webp",
      category: "دکوراسیون اداری",
      price: 3000000,
    },
    {
      name: "میز کامپیوتر",
      image: "/pc-desk-2.webp",
      category: "دکوراسیون اداری",
      price: 3000000,
    },
    {
      name: "میز کامپیوتر",
      image: "/pc-desk-1.webp",
      category: "دکوراسیون اداری",
      price: 3000000,
    },
    {
      name: "تخت کنار استخر",
      image: "/pool-bed-1.webp",
      category: "ویلا",
      price: 3000000,
    },
    {
      name: "تخت کنار استخر",
      image: "/pool-bed-2.webp",
      category: "ویلا",
      price: 3000000,
    },
    {
      name: "تخت کنار استخر",
      image: "/pool-bed-3.webp",
      category: "ویلا",
      price: 3000000,
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl">جدید ترین محصولات</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-w-7xl gap-4">
        {items.map((item, index) => (
          <Product
            key={index}
            name={item.name}
            category={item.category}
            image={item.image}
            price={item.price}
            offPrice={item.offPrice}
          />
        ))}
        <a
          href="#"
          className="grid place-content-center bg-zinc-200 dark:bg-zinc-800 rounded-xl min-h-24"
        >
          مشاهده بیشتر ...
        </a>
      </div>
    </div>
  );
}
