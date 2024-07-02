import React from "react";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

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
          <Link href="/auth/sign-in">
            <Button>Sign in</Button>
          </Link>
          <Link href="/auth/sign-up">
            <Button variant="outline">Sign up</Button>
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
