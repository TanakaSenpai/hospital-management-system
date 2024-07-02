import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import NavLink from "./NavLink";

const MobileNav = ({ links }) => {
  return (
    <Sheet class="absolute inset-y-0 left-0 flex items-center md:hidden">
      <SheetTrigger>
        <RxHamburgerMenu className="text-lg" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <Logo />
        </SheetTitle>
        <div className="flex flex-col gap-4 my-28 items-center text-lg">
          {links.map((link) => (
            <NavLink
              key={link.href}
              label={link.label}
              href={link.href}
              dropdown={link.dropdown}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
