/**
 * Represents shape of a item in Upcoming component
 *
 * @prop {string} name is name of the product
 * @prop {string} image is path of the product's image
 * @prop {number} price is price of pruduct
 * @prop {string} category is Category of the product
 */
export interface ItemType {
  /**
   * Name of the product
   *
   * Example: `میز`
   */
  name: string;

  /**
   * Path of the product's image
   *
   * Example: `/desk.webp|jpg|png`
   */
  image: string;

  /**
   * Price of the product
   *
   * Optional, Example: `3000000`
   */
  price?: number;

  /**
   * Category of the product
   *
   * Example: `ویلا`
   */
  category: string;

  /**
   * Price of the product after off
   *
   * Optional, Example: `2500000`
   */
  offPrice?: number;

  /**
   * Custom class name
   *
   * Optional, Example: `order-first`
   */
  className?: string;
}
