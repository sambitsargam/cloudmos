"use client";
import { cn } from "@src/utils/styleUtils";
import React from "react";

export function LinkTo({ children, className = "", ...rest }: React.PropsWithChildren<{ className?: string } & React.ButtonHTMLAttributes<{}>>) {
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        className,
        "m-0 inline-flex cursor-pointer border-0 bg-transparent p-0 text-primary underline visited:text-primary-visited disabled:cursor-default disabled:text-gray-500"
      )}
    >
      {children}
    </button>
  );
}
