import React from "react";
import Product from "@/components/Product";
import { HeaderItems } from "@/utils/Statics/Header";

/**
 * Renders a header for Home page
 * 
 * @returns {JSX.Element}
 */
export default function Header(): JSX.Element {
  return (
    <header className="w-3/4 sm:w-4/5 md:w-full lg:w-3/4 xl:w-7/12 grid grid-cols-4 gap-4 max-sm:grid-cols-1">
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
