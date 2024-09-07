import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h3 className="text-4xl">404</h3>
      <h1 className="text-xl">این راه به جایی نمیرسه ...</h1>
      <br />
      <Link href="/" className="hover:text-cyan-700">
        برگشتن به صفحه اصلی
      </Link>
    </div>
  );
}
