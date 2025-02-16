import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import DiscoverNFTSection from "./DiscoverNFTSection";
import MintNFTSection from "./MintNFTSection";
import NFTGallerySection from "./NFTGallerySection"
import React from "react";

export default function MintNFTPage() {
  return (
    <>
      <Helmet>
        <title>Mint NFT - Create and Collect Digital Art</title>
        <meta
          name="description"
          content="Enter the world of NFTs with our Mint NFT page. Discover, create, and collect extraordinary digital art and collectibles by artists worldwide."
        />
      </Helmet>
      <div className="w-full border-2 border-solid border-blue_gray-100_01 bg-white-a700">
        <div>
          <div className="pb-[30px] bg-gradient1">
            <div className="flex flex-col gap-[122px] md:gap-[91px] sm:gap-[61px]">
              <Header />
              {/* discover n f t section */}
              <DiscoverNFTSection />
            </div>
            {/* mint n f t section */}
            <MintNFTSection />
            {/* n f t gallery section */}
            <NFTGallerySection />
          </div>
        </div>
      </div>
    </>
  );
}
