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
   */
  name: string;

  /**
   * Path of the product's image
   */
  image: string;

  /**
   * Price of the product
   *
   * Optional
   */
  price?: number;

  /**
   * Category of the product
   */
  category: string;

  /**
   * Price of the product after off
   *
   * Optional
   */
  offPrice?: number;

  /**
   * Custom class name
   *
   * Optional
   */
  className?: string;
}
