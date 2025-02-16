/* eslint-disable react/prop-types */
import { Text, Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userName = "New",
  userTitle = "Celestial Harmony #004",
  userDescription = "A mesmerizing blend of cosmic elements and digital artistry",
  ...props
}) {
  return (
    <div
      {...props}
      className={`
        ${props.className} 
        flex flex-col w-[32%] md:w-full 
        border border-solid bg-gray-900_7f 
        rounded-[12px]
      `}
    >
      <div className="relative h-[192px] content-center self-stretch">
        <Img
          src="images/img_img.png"
          alt="New"
          className="h-[192px] w-full flex-1 object-cover"
        />
        <Text
          size="textxs"
          as="p"
          className="
            absolute right-[14.69px] top-4 m-auto 
            rounded-[12px] bg-teal-400_33 px-2.5 py-0.5 
            text-[12px] font-normal !text-teal-400
          "
        >
          {userName}
        </Text>
      </div>

      <div className="flex flex-col items-start gap-3.5 self-stretch p-4">
        <Heading size="headingxs" as="h6" className="text-[16px] font-bold">
          {userTitle}
        </Heading>
        <Text as="p" className="mb-4 w-[96%] text-[14px] font-normal leading-[14px]">
          {userDescription}
        </Text>
      </div>
    </div>
  );
}
