"use client";
import Search from "@/svgs/Search";
import UserProfilePictureAvatar from "./UserProfilePictureAvatar";
import Link from "next/link";
import LoginButton from "./LoginButton";
import OommooLogo from "@/svgs/OommooLogo";
import WatchlistLogo from "@/svgs/WatchlistLogo";
import { ShowAuthenticationModalContext } from "./HeaderAndAuthModal";

function Header() {
  return (
    <header className="bg-black pt-[5vh] pb-[2vh] fixed right-0 left-0 z-20">
      <div className="flex items-center justify-around w-[91%] mx-auto">
        <Link href={"/"} className="flex items-center flex-col">
          <OommooLogo />
          <p className="font-medium text-white text-[1.8vh] italic w-[13.5vw] text-center">
            One of many. many of One
          </p>
        </Link>
        <div className="flex items-center bg-white w-[53%] rounded-full -mt-4 pl-4">
          <Search />
          <input
            placeholder="Search"
            className="p-[6px] rounded-full outline-none ml-3 w-[90%]"
          />
        </div>
        <Link href="/" className="flex items-center -mt-4">
          <WatchlistLogo />
          <p className="font-bold text-white text-[2.6vh] ml-[0.4vw]">
            Watchlist
          </p>
        </Link>
        <LoginButton />
        {/* <UserProfilePictureAvatar /> */}
      </div>
    </header>
  );
}

export default Header;
