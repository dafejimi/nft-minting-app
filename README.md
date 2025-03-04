# **NFT Minting DApp**
🚀 **A full-stack NFT Minting application built with React, Wagmi, RainbowKit, Viem, Node.js, and MongoDB.** Users can connect their wallets, mint NFTs, and view their NFT gallery.  

---

## **🔗 Live Links**
- 🖥️ **Frontend**: [Deployed Frontend](https://nft-minting-app-lovat.vercel.app/)
- ⚙️ **Backend**: [Deployed API](social-deana-dafe-6dd7000c.koyeb.app/)  
- 🎥 **Demo Video**: [Demo Recording](https://drive.google.com/file/d/1M4TLJu3hfwVrwxqvKVlgqJcsBmaVwiQ3/view?usp=sharing)  
- 🔗 **Backend Repository**: [GitHub Repo](https://github.com/dafejimi/nft-minting-app-backend)  

---

## **📌 Features**
✅ **Connect Wallet** (MetaMask, RainbowKit, Wagmi)  
✅ **Mint NFTs** (Metadata stored in MongoDB, token minted on Sepolia)  
✅ **View NFT Gallery** (Fetch NFTs owned by the connected wallet)  
✅ **Smart Contract Interaction** (Using `useWriteContract` & `useReadContract`)  
✅ **Error Handling & Loading States**  

---

## **🛠️ Tech Stack**
### **Frontend**
- React.js  
- Wagmi + RainbowKit  
- Viem (for smart contract interaction)  
- TailwindCSS  

### **Backend**
- Node.js (Express.js)  
- MongoDB (Mongoose ORM)  
- REST API (NFT storage, retrieval)  

### **Blockchain**
- Ethereum Sepolia Testnet  
- Smart Contract Address: `0x743f49311a82fe72eb474c44e78da2a6e0ae951c`  

---

## **🛠️ API Routes**
### **NFT Minting**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/nft` | Store NFT metadata in MongoDB |
| `GET` | `/api/nft/:nftId` | Retrieve NFT metadata by ID |
| `GET` | `/api/nft/gallery/:userWalletAddress` | Fetch all NFTs owned by a user |

Example Request:
```bash
curl -X POST "[social-deana-dafe-6dd7000c.koyeb.app/api/nft" \
-H "Content-Type: application/json" \
-d '{
  "nftId": 12345,
  "name": "Cool NFT",
  "description": "This is a test NFT",
  "logoUrl": "https://example.com/nft.png",
  "userWalletAddress": "0xYourWalletAddress"
}'
```

---

## **🚀 Getting Started**
### **Frontend Setup**
```bash
git clone https://github.com/yourusername/nft-minting-frontend.git
cd nft-minting-frontend
npm install
npm start
```

### **Backend Setup**
```bash
git clone https://github.com/yourusername/nft-minting-backend.git
cd nft-minting-backend
npm install
npm start
```

---

## **📜 Submission Steps**
✅ **Frontend & Backend Deployed** (Links added above)  
✅ **Loom Video Recorded & Linked**  
✅ **GitHub Repositories Created & Shared**  
✅ **Invited `cytric-jobs` to Repositories**  

---

Made with ❤️ by **[DAFE]** 🚀
