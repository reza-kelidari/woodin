"use client"

import { formAction } from "@/app/action";
import React, { ReactNode, useState } from "react";

/**
 * Renders a submit button for Newsletter component's
 * form.
 *
 * This button reacts to form submitting, by going disable
 * while waiting for server's response.
 *
 * @returns {JSX.Element}
 */
export default function Submit({ children }: { children: ReactNode }): JSX.Element {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <button
      type="submit"
      disabled={status}
      onClick={async (e) => {
        e.preventDefault();

        setStatus(true);
        await formAction();
        setStatus(false);
      }}
      className="bg-zinc-400 dark:bg-zinc-700 px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
