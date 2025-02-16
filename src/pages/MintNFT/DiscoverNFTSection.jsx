import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function DiscoverNFTSection() {
  return (
    <div className="mb-[92px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-center px-14 md:px-5">
        <Heading
          size="headingmd"
          as="h1"
          className="w-[48%] text-center text-[60px] font-bold leading-[60px] md:w-full md:text-[52px] sm:text-[46px]"
        >
          Discover & Collect Extraordinary NFTs
        </Heading>

        <Text
          size="textlg"
          as="p"
          className="mt-10 w-[50%] self-center text-center text-[20px] font-normal leading-5 !text-blue_gray-100 md:w-full"
        >
          Enter the world of digital art and collectibles. Explore unique NFTs created by artists worldwide.
        </Text>

        <div className="mt-[58px] flex gap-3.5">
          <Button
            shape="round"
            color="pink_300_deep_purple_A200"
            leftIcon={
              <Img
                src="images/img_frame_white_a700.svg"
                alt="Frame"
                className="mb-1.5 h-[16px] w-[16px] object-contain"
              />
            }
            className="min-w-[192px] gap-2 rounded-[12px] font-bold"
          >
            Start Creating
          </Button>

          <Button
            variant="fill"
            shape="round"
            leftIcon={
              <Img
                src="images/img_overflowmenu.svg"
                alt="Overflow Menu"
                className="my-0.5 h-[16px] w-[16px] object-contain"
              />
            }
            className="min-w-[180px] gap-2 rounded-[12px] border border-solid border-blue_gray-800"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
