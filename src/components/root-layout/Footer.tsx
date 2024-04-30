import FacebookLogo from "@/svgs/FacebookLogo";
import GoogleLogo from "@/svgs/GoogleLogo";
import OommooLogo from "@/svgs/OommooLogo";
import XLogo from "@/svgs/XLogo";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black p-8">
      <div>
        <Link href={"/"} className="flex items-start flex-col">
          <OommooLogo />
          <p className="font-medium text-white text-[1.81vh] ml-1 italic w-[13.5vw]">
            One of many. many of One
          </p>
        </Link>
      </div>
      <div className="flex items-center flex-col bg-[#D9D9D91A] w-[47%] mx-auto px-4 pt-2 pb-5 rounded-[30px] border-[0.1px] border-neutral-800">
        <p className="text-white text-[21px] font-bold">
          Follow us on Social Media
        </p>
        <div className="flex justify-between items-center w-[63%] mt-4">
          <FacebookLogo width="w-[30px]" height="w-[30px]" />
          <XLogo width="w-6" height="h-6" />
          <GoogleLogo />
          <FacebookLogo width="w-[30px]" height="w-[30px]" />
          <XLogo width="w-6" height="h-6" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-8">
        <p className="text-white text-[18px] font-semibold">Your activity</p>
        <p className="text-white text-[18px] font-semibold">Your watchlist</p>
        <p className="text-white text-[18px] font-semibold">Your ratings</p>
        <p className="text-white text-[18px] font-semibold">FAQs</p>
        <p className="text-white text-[18px] font-semibold">
          Conditions of use
        </p>
        <p className="text-white text-[19px] font-semibold">Privacy policy</p>
      </div>
      <div className="mt-8">
        <p className="text-white text-center text-lg">
          <span>&#169;</span> 2024 OommoO, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
