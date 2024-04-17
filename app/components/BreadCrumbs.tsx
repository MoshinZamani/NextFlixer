"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav aria-label="Breadcrumbs" className="mb-4 ml-4">
      <ol className="list-reset flex text-grey-dark">
        <li>
          <Link href="/">Home &gt;</Link>
        </li>
        {segments.map((value, index) => {
          if (!isNaN(parseInt(value))) return null;
          const last = index === segments.length - 2;
          const href = "/" + segments.slice(0, index + 1).join("/");

          return last ? (
            <li key={index} aria-current="page">
              {value}
            </li>
          ) : (
            <li key={index} className="mx-2">
              <Link href={href}>{value} &gt;</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
