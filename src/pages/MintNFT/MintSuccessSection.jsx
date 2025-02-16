import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function MintSuccessSection({ nft, onMintAnother }) {
  const formatNftId = (id) => {
    // Pad the hex string to at least 10 characters
    return '#' + id.toString(16).toUpperCase().padStart(10, '0');
  };

  return (
    <>
      <div className="mt-[156px] flex justify-center self-stretch">
        <div className="container-xs flex justify-center px-14 md:px-5">
          <div className="flex w-[48%] flex-col gap-[26px] rounded-[16px] border border-solid border-teal-400 bg-gray-900_7f p-8 md:w-full sm:p-5">
            <div className="flex flex-col items-center gap-2.5 px-[26px] sm:px-5">
              <div className="flex flex-col items-center rounded-[40px] bg-teal-400_33 p-[22px] sm:p-5">
                <Img src="images/img_frame_teal_400.svg" alt="Image" className="h-[36px]" />
              </div>
              <Heading as="h2" className="text-[24px] font-bold !text-teal-400 md:text-[22px]">
                NFT Minted Successfully!
              </Heading>
              <Text size="textmd" as="p" className="self-end text-[16px] font-normal">
                Your NFT has been created and added to your collection
              </Text>
            </div>

            <div className="flex flex-col gap-4 rounded-[12px] bg-blue_gray-900_7f p-6 sm:p-5">
              <img 
                src={nft.logoUrl} 
                alt={nft.name}
                className="h-[256px] rounded-lg object-cover"
                onError={(e) => {
                  e.target.src = "images/img_img_256x462.png"; // Fallback image
                }}
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col items-start justify-center">
                  <Text as="p" className="text-[14px] font-normal">NFT Name</Text>
                  <Heading size="headingxs" as="h3" className="text-[16px] font-bold">
                    {nft.name}
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="flex self-stretch">
                    <Text as="p" className="text-[14px] font-normal">Description</Text>
                  </div>
                  <Text size="textmd" as="p" className="text-[16px] font-normal !text-blue_gray-100">
                    {nft.description}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center gap-0.5">
                  <Text as="p" className="text-[14px] font-normal">NFT ID</Text>
                  <Text
                    size="textmd"
                    as="p"
                    className="w-[22%] text-[16px] font-normal leading-4 !text-deep_purple-a200 md:w-full"
                  >
                    {formatNftId(nft.nftId)}
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                color="blue_gray_900"
                size="sm"
                variant="fill"
                leftIcon={
                  <Img src="images/img_send.svg" alt="Send" className="my-0.5 h-[16px] w-[14px] object-contain" />
                }
                className="w-full gap-2 rounded-lg px-[34px] sm:px-5"
                onClick={() => {
                  // You can implement share functionality here
                  // For now, let's copy the NFT ID to clipboard
                  navigator.clipboard.writeText(formatNftId(nft.nftId));
                }}
              >
                Share
              </Button>
              <Button
                size="sm"
                color="pink_300_deep_purple_A200"
                leftIcon={
                  <Img
                    src="images/img_frame_white_a700_16x16.svg"
                    alt="Frame"
                    className="mb-1 mt-0.5 h-[16px] w-[16px] object-contain"
                  />
                }
                className="w-full gap-2 rounded-lg px-[34px] font-bold sm:px-5"
                onClick={onMintAnother}
              >
                Mint Another
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}