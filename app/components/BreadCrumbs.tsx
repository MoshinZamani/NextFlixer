import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  function capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumbs" className="text-xs">
      <ol className="list-reset flex text-grey-dark">
        <li>
          <Link href="/">Home</Link>
          {segments.length > 0 && <span>&nbsp;&gt;</span>}
        </li>
        {segments.map((value, index) => {
          // Exclude rendering numeric segments as breadcrumbs
          const isNumeric = !isNaN(parseInt(value));
          if (isNumeric) return null;

          const isLast = index === segments.length - 1;
          const href = "/" + segments.slice(0, index + 1).join("/");

          return value === "watchlist" ? (
            <li key={index} className="mx-2">
              <Link href="/profile">
                &gt;&nbsp;&nbsp;{capitalizeFirstLetter(value)}
              </Link>
            </li>
          ) : (
            <li key={index} className="mx-2">
              <Link href={href}>{capitalizeFirstLetter(value)}</Link>
              {!isLast && isNumeric && <span>&gt;</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
