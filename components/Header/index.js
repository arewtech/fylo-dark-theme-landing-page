import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar flex items-center justify-between">
          <div className="logo w-24 text-slate-100">
            <Image
              alt="logo"
              src="/images/logo.svg"
              layout="responsive"
              width="100%"
              height={30}
            />
          </div>
          <ul className="flex items-center gap-x-8 text-slate-100">
            <Link href={"#"}>
              <li className="cursor-pointer text-base text-slate-300 hover:text-slate-50">
                Features
              </li>
            </Link>
            <Link href={"#"}>
              <li className="cursor-pointer text-base text-slate-300 hover:text-slate-50">
                Team
              </li>
            </Link>
            <Link href={"#"}>
              <li className="cursor-pointer text-base text-slate-300 hover:text-slate-50">
                Sign In
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
