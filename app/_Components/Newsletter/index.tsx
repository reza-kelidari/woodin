import React from "react";
import Submit from "./Submit";

/**
 * Renders a newsletter form for Home page
 *
 * @returns {JSX.Element}
 */
export default function Newsletter(): JSX.Element {
  return (
    <section className="flex flex-col gap-4 p-8 rounded-xl bg-zinc-300 dark:bg-zinc-800 max-w-2xl">
      <h3 className="text-xl">عضویت در خبرنامه</h3>
      <p className="text-lg opacity-50">
        با عضویت در خبرنامه‌ی وودین از آخرین تخفیف ها و محصولات ما با خبر شو.
      </p>

      <form className="flex items-center gap-4 mx-auto">
        <input
          type="email"
          name="email"
          className="outline-none text-black px-4 py-2 rounded-xl text-center"
          placeholder="info@example.com"
          dir="ltr"
        />
        <Submit>عضویت</Submit>
      </form>
    </section>
  );
}
