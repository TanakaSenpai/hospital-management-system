"use client";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import SignedIn from "@/app/public/components/SignedIn";
import NotSignedIn from "@/app/public/components/NotSignedIn";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

// import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const navLinks = [
  { href: "/public", label: "home" },
  {
    href: "/public/book-appointment",
    label: "book appointment",
  },
  { href: "/public/doctors", label: "doctors" },
  { href: "/public/contact", label: "contact us" },
];

const Navbar = () => {

  const [userName, setUserName] = useState("");
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.displayName;
      setUserName(name)
    } else {
    }
  });

  const router = useRouter();

  const handleLogout = () => {
    signOut(auth);
    Cookies.remove("userId")
    location.reload();
  }
  const uid = Cookies.get('userId');
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
        <NotSignedIn>
          <div className="flex gap-6 items-center">
            <Link href="/public/auth/sign-in">
              <Button>Sign in</Button>
            </Link>
            <Link href="/public/auth/sign-up">
              <Button variant="outline">Sign up</Button>
            </Link>
          </div>{" "}
        </NotSignedIn>
        <SignedIn>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2">
              Hello,{" "}
              <span className="text-primary flex items-center gap-2">
                {userName} <FaChevronDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <button onClick={handleLogout}>Logout</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SignedIn>
      </div>
      <div className="flex lg:hidden">
        <MobileNav links={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
