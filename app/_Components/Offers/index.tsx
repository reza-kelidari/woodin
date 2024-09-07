import React from "react";
import { ItemType } from "../types";
import Product from "@/components/Product";

/**
 * Renders a list of items that have offer
 *
 * @returns {JSX.Element}
 */
export default function Offers() {
  const offers: ItemType[] = [
    {
      name: "کتابخانه",
      image: "book-shelf-2.webp",
      category: "دکوراسیون خانگی",
      price: 3000000,
      offPrice: 2500000,
    },
    {
      name: "مبلمان 8 نفره",
      image: "furniture-1.webp",
      category: "دکوراسیون خانگی",
      price: 13000000,
      offPrice: 11500000,
    },
    {
      name: "آلاچیق",
      image: "garden-1.webp",
      category: "ویلا",
      price: 30000000,
      offPrice: 27000000,
    },
    {
      name: "میز کامپیوتر",
      image: "pc-desk-1.webp",
      category: "دکوراسیون اداری",
      price: 3000000,
      offPrice: 2500000,
    },
    {
      name: "تخت کنار استخر",
      image: "pool-bed-3.webp",
      category: "ویلا",
      price: 3000000,
      offPrice: 2700000,
    },
  ];
  return (
    <section className="flex items-center gap-4 snap-proximity snap-x w-full overflow-x-scroll bg-cyan-200 dark:bg-cyan-950 p-8 rounded-xl">
      <a href="#" className="text-2xl sm:text-4xl font-bold min-w-48">
        فروش ویژه
      </a>

      {offers.map((offer, index) => (
        <Product
          name={offer.name}
          image={offer.image}
          category={offer.category}
          key={index}
          price={offer.price}
          offPrice={offer.offPrice}
          customClassName="min-w-48"
        />
      ))}
    </section>
  );
}
