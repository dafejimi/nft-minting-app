import { Heading } from "../../components";
import CosmicProfile from "../../components/CosmicProfile";
import React, { Suspense, useState, useEffect } from "react";
import { useAccount } from 'wagmi';

const DEFAULT_IMAGE = "/images/img_img.png"; // Updated to match default image
const API_BASE_URL = "accurate-sawfish-dafe-50dc2809.koyeb.app//api/nft";

export default function NFTGallerySection() {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { address } = useAccount();

  useEffect(() => {
    const fetchNFTs = async () => {
      if (!address) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/gallery/${address}`);
        if (!response.ok) {
          throw new Error('Failed to fetch NFTs');
        }
        const result = await response.json();
        
        if (result.success) {
          setNfts(result.data);
        } else {
          throw new Error(result.error || 'Failed to fetch NFTs');
        }
      } catch (err) {
        console.error('Error fetching NFTs:', err);
        setError('Failed to load NFTs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, [address]);

  // Group NFTs into rows of three
  const nftRows = [];
  for (let i = 0; i < nfts.length; i += 3) {
    nftRows.push(nfts.slice(i, i + 3));
  }

  if (!address) {
    return (
      <div className="mt-[110px] flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-[30px] px-6 md:px-5">
          <Heading as="h3" className="text-[24px] font-bold md:text-[22px]">
            Your NFT Gallery
          </Heading>
          <div className="w-full text-center text-gray-600">
            Please connect your wallet to view your NFTs
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[110px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-start gap-[30px] px-6 md:px-5">
        <Heading as="h3" className="text-[24px] font-bold md:text-[22px]">
          Your NFT Gallery
        </Heading>

        {loading ? (
          <div className="w-full text-center">
            <div className="animate-pulse">Loading your NFTs...</div>
          </div>
        ) : error ? (
          <div className="w-full text-center text-gray-600">
            {error}
          </div>
        ) : nfts.length === 0 ? (
          <div className="w-full text-center text-gray-600">
            No NFTs found, please mint your first one using the widget above
          </div>
        ) : (
          <div className="w-full">
            {nftRows.map((row, rowIndex) => (
              <div 
                key={`row-${rowIndex}`} 
                className="mb-6 flex justify-between gap-6 self-stretch md:flex-col"
              >
                {row.map((nft) => (
                  <CosmicProfile
                    key={nft.nftId}
                    userImage={nft.logoUrl}
                    titleText={nft.name}
                    descriptionText={nft.description}
                    className={row.length < 3 ? `w-[32%] md:w-full` : ""}
                  />
                ))}
                {/* Add empty placeholders if row is not complete */}
                {row.length < 3 && Array(3 - row.length).fill(null).map((_, index) => (
                  <div key={`empty-${index}`} className="w-[32%] md:hidden" />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
