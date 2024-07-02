import React from "react";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "home" },
  {
    href: "/book-appointment",
    label: "book appointment",
  },
  { href: "/doctors", label: "doctors" },
  { href: "/contact", label: "contact us" },
];

const Navbar = () => {
  return (
    <nav class="container h-20 flex justify-between items-center">
      <div className="">
        <Logo />
      </div>
      <div className="hidden lg:flex gap-16 items-center">
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              label={link.label}
              href={link.href}
              dropdown={link.dropdown}
            />
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <Link
            href="/login"
            className="text-white bg-primary px-3 py-1  rounded-sm"
          >
            Sign in
          </Link>
          <Link
            href="/login"
            className="text-primary inner-border inner-border-primary  px-3 py-1  rounded-sm"
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden">
        <MobileNav links={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
