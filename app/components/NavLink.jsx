"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label, dropdown }) => {
  const path = usePathname();
  return (
    <div className="relative">
      
        <Link
          href={href}
          className={`capitalize text-gray-600  hover:text-primary transition-all cursor-pointer`}
        >
          <span
            className={`${
              path == href
                ? "absolute left-0 top-full h-[2px] bg-primary w-full"
                : ""
            } transition-all`}
          ></span>
          {label}
        </Link>
    </div>
  );
}

export default NavLink;
