import { ItemType } from "@/app/components/types";

export const HeaderItems: ItemType[] = [
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
