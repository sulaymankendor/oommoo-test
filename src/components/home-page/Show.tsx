"use client";
import Plus from "@/svgs/Plus";
import Star from "@/svgs/Star";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
// import "@/components/home-page/event-style.css";
// import { truncateText } from "../../../utilities/truncateText";

function Show(props: {
  id: number;
  title: string;
  summary: string;
  thumbnailUrl: string;
  numberOfReviews: string;
  typeOfEvent: [string, string, string];
  slug: string;
}) {
  const [showTitleAndSummary, setShowTitleAndSummary] = useState(false);
  return (
    <div
      className="relative
    mb-[27px] mx-[1.5vw] bg-black pb-2 rounded-lg cursor-pointer
    transition-all hover:scale-110
    w-[20vw]
    "
      onMouseOver={() => {
        setShowTitleAndSummary(true);
      }}
      onMouseLeave={() => {
        setShowTitleAndSummary(false);
      }}
    >
      <Link href={`shows/${props.slug}`}>
        <Image
          src={props.thumbnailUrl}
          alt={"kmds"}
          width={255.7}
          height={100}
          className="h-[52vh] rounded-t-lg object-cover"
        />

        <div className="flex items-center mt-1 ml-[0.5vw]">
          <div className="flex items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="font-extrabold text-white text-[1.2vw] ml-[3px]">
            {props.numberOfReviews}
          </p>
        </div>
        <div className="flex items-center justify-around mt-1">
          <p className="font-extrabold text-white text-[1.2vw]">
            {props.typeOfEvent[0]}
          </p>
          <p className="font-extrabold text-white text-[1.2vw]">
            {props.typeOfEvent[1]}
          </p>
          <p className="font-extrabold text-white text-[1.2vw]">
            {props.typeOfEvent[2]}
          </p>
        </div>
      </Link>
      <Button
        variant={"ghost"}
        className="absolute top-1 rounded-full right-2 px-[0.37vw] py-[0.8vh] z-10"
        onClick={() => {
          console.log(props.id);
        }}
        title="add to watchlist"
      >
        <Plus />
      </Button>
      {showTitleAndSummary && (
        <Link href={`shows/${props.slug}`}>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transport opacity-70 rounded-lg transition-all"></div>
          <div className="w-full absolute top-[40vh]">
            <div className="relative ml-2">
              <p className="text-gray-200 capitalize font-bold relative z-10 text-[2.5vh]">
                {props.title}
              </p>
              <p
                className="text-gray-200 relative z-10 text-[1.7vh] font-normal"
                style={{ wordSpacing: "3px" }}
              >
                {props.summary}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Show;
