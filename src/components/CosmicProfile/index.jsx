/* eslint-disable react/prop-types */
import { Text, Heading, Img } from "./..";
import React from "react";

export default function CosmicProfile({
  userImage = "images/img_img.png",
  titleText = "Cosmic Dreams #001",
  descriptionText = "A journey through digital dimensions",
  ...props
}) {
  return (
    <div
      {...props}
      className={`
        ${props.className} flex flex-col w-[32%] md:w-full border-blue_gray-900 
        border border-solid bg-gray-900_7f rounded-[12px]
      `}
    >
      <Img
        src={userImage}
        alt="Cosmic"
        className="h-[192px] w-full object-cover"
      />
      <div className="flex flex-col items-start gap-2.5 self-stretch px-4 py-3.5">
        <Heading size="headingxs" as="h6" className="text-[16px] font-bold">
          {titleText}
        </Heading>
        <Text as="p" className="text-[14px] font-normal">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
}
