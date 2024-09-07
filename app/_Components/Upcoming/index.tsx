import React from "react";
import Product from "@/components/Product";
import { UpcomingItems } from "@/utils/Statics/Upcoming";

/**
 * Renders a list of upcoming products in Home page, Using
 * `UpcomingItem` array.
 * 
 * @returns {JSX.Element}
 */
export default function Upcoming(): JSX.Element {
  return (
    <section className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-3xl">جدید ترین محصولات</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-w-7xl gap-4 max-md:w-3/4">
        {UpcomingItems.map((item, index) => (
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
          className="grid place-content-center bg-zinc-200 dark:bg-zinc-800 rounded-xl min-h-24 hover:bg-zinc-400 dark:hover:bg-zinc-700 transition-all"
        >
          مشاهده بیشتر ...
        </a>
      </div>
    </section>
  );
}
