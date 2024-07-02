import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "./Logo";
import NavLink from "./NavLink";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileNav = ({ links }) => {
  return (
    <Sheet class="absolute inset-y-0 left-0 flex items-center md:hidden">
      <SheetTrigger>
        <RxHamburgerMenu className="text-lg" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
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
        <SheetFooter>
          <div className="flex flex-col w-full gap-3">
            <Link href="/auth/sign-in">
              <Button className="w-full">Sign in</Button>
            </Link>
            <Link href="/auth/sign-up">
              <Button variant="outline" className="w-full">Sign up</Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
