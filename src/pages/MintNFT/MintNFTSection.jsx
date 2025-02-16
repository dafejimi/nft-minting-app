import React, { useState } from "react";
import { Button, Img, Input, Text, TextArea, Heading } from "../../components";
import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import axios from 'axios';
import MintSuccessSection from "./MintSuccessSection";

/* global BigInt */  // Add this line to tell ESLint that BigInt is a global object

const CONTRACT_ADDRESS = '0x743f49311a82fe72eb474c44e78da2a6e0ae951c';
const API_BASE_URL = 'accurate-sawfish-dafe-50dc2809.koyeb.app//api/nft'; // e.g., http://localhost:3001/api/nft

export default function MintNFTSection() {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    logoUrl: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [mintSuccess, setMintSuccess] = useState(false);
  const [mintedNFT, setMintedNFT] = useState(null);

  // Contract write function for minting
  const { data: mintResult, writeContract: mint } = useWriteContract({
    address: CONTRACT_ADDRESS,
    abi: [
      {
        name: "mint",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
          { name: "tokenId", type: "uint256" },
          { name: "metadataUrl", type: "string" }
        ],
        outputs: []
      }
    ],
    functionName: "mint"
  });
  

  // Contract read function for checking ID
  const { data: checkIdResult, refetch: checkId } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: [
      {
        name: 'checkId',
        type: 'function',
        stateMutability: 'view',
        inputs: [{ name: 'tokenId', type: 'uint256' }],
        outputs: [{ type: 'bool' }]
      }
    ],
    functionName: 'checkId'
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      throw new Error('NFT name is required');
    }
    if (!formData.description.trim()) {
      throw new Error('Description is required');
    }
    if (!formData.logoUrl.trim()) {
      throw new Error('Image URL is required');
    }
    try {
      new URL(formData.logoUrl);
    } catch {
      throw new Error('Invalid image URL');
    }
  };

  const generateUniqueId = async () => {
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
      try {
        const randomId = Math.floor(Math.random() * 1000000) + 1;
        const result = await checkId({
          args: [BigInt(randomId)]
        });
        
        // Check the result from the contract
        if (!result.data) {
          return randomId;
        }
        attempts++;
      } catch (err) {
        console.error('Error checking NFT ID:', err);
        throw new Error('Failed to check NFT ID');
      }
    }
    throw new Error('Failed to generate unique NFT ID after multiple attempts');
  };

  const handleInputChange = (e) => {
    if (!e || !e.target) {
      console.error("handleInputChange was called without a valid event object", e);
      return;
    }
  
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMint = async () => {
    if (!address) {
      setError('Please connect your wallet first');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      // Validate form
      validateForm();

      // Generate unique NFT ID
      const nftId = await generateUniqueId();

      // Store metadata in backend
      const metadataResponse = await axios.post(`${API_BASE_URL}`, {
        name: formData.name,
        description: formData.description,
        logoUrl: formData.logoUrl,
        nftId,
        userWalletAddress: address
      });

      if (!metadataResponse.data.success) {
        throw new Error('Failed to store NFT metadata');
      }

      // Mint NFT
      const metadataUrl = `${API_BASE_URL}/${nftId}`;
      if (!mint) {
        throw new Error("Mint function is not initialized properly.");
      }
      
      const mintTransaction = await mint({ args: [BigInt(nftId), metadataUrl] });
      
      if(!mintTransaction) console.log("TX Failed");

      // Set success state with minted NFT data
      setMintedNFT({
        name: formData.name,
        description: formData.description,
        logoUrl: formData.logoUrl,
        nftId: nftId.toString(16).toUpperCase() // Convert to hex for display
      });
      setMintSuccess(true);

      // Clear form
      setFormData({
        name: '',
        description: '',
        logoUrl: ''
      });

    } catch (err) {
      let errorMessage = 'Failed to mint NFT';
      
      if (err.message.includes('user rejected transaction')) {
        errorMessage = 'Transaction was rejected. Please try again.';
      } else if (err.message.includes('insufficient funds')) {
        errorMessage = 'Insufficient funds to complete the transaction';
      } else if (err.code === 'NETWORK_ERROR') {
        errorMessage = 'Network error. Please check your connection.';
      }
      
      setError(errorMessage);
      console.error('Minting error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetMint = () => {
    setMintSuccess(false);
    setMintedNFT(null);
    setError('');
  };


  // If minting was successful, show success section
  if (mintSuccess && mintedNFT) {
    return <MintSuccessSection 
      nft={mintedNFT}
      onMintAnother={handleResetMint}
    />;
  }

  // Original mint form JSX
  return (
    <div className="mt-16 flex justify-center">
      <div className="container-xs flex justify-center px-14 md:px-5">
        <div className="flex w-[48%] justify-center md:w-full">
          <div className="flex w-full flex-col gap-[22px] rounded-[16px] border border-solid border-blue_gray-900 bg-gray-900_7f p-[30px] sm:p-5">
          <div className="flex">
            <Heading as="h2" className="text-[24px] font-bold md:text-[22px]">
              Mint Your NFT
            </Heading>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Text as="p" className="text-[14px] font-normal">
                  NFT Name
                </Text>
              </div>
              <Input
                shape="round"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter NFT name"
                className="rounded-lg border px-3.5"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex">
                <Text as="p" className="self-end text-[14px] font-normal">
                  Description
                </Text>
              </div>
              <TextArea
                shape="round"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your NFT"
                className="rounded-lg !border !border-blue_gray-800 px-4 text-blue_gray-200"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <Text as="p" className="text-[14px] font-normal">
                Image URL
              </Text>
              <Input
                shape="round"
                name="logoUrl"
                value={formData.logoUrl}
                onChange={handleInputChange}
                placeholder="Enter image URL"
                className="self-stretch rounded-lg border px-3.5"
              />
            </div>
            {error && (
              <div className="rounded-lg bg-red-500/10 p-3 text-red-500 text-sm">
                {error}
              </div>
            )}
            <Button
              color="pink_300_deep_purple_A200"
              onClick={handleMint}
              disabled={isLoading}
              leftIcon={
                <Img
                  src="images/img_frame_white_a700_16x16.svg"
                  alt="Frame"
                  className="mb-1 mt-0.5 h-[16px] w-[16px] object-contain"
                />
              }
              className="gap-2 self-stretch rounded-lg font-bold"
            >
              {isLoading ? 'Minting...' : 'Mint NFT'}
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
