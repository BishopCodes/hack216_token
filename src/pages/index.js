'use client';
import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Stack,
} from "@mui/material";

import Web3 from 'web3';

import Card from '../components/Card'

// import Whitelist from "../components/Whitelist";

export default function Home() {
  const [amountToClaim, setAmountToClaim] = useState("");
  const [balance, setBalance] = useState(0);
  const [approval, setApproval] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const [currentAddress, setCurrentAddress] = useState("");

  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  web3.eth.getAccounts().then((addresses) => setCurrentAddress(addresses[0]));
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h1>Your address: {currentAddress}</h1>
      {/* <Whitelist/> */}
      <h2 className={styles.title}>Claim Tokens</h2>
      <p className={styles.explain}>
        Claim ERC20 tokens from the prebuilt{" "}
        <a
          className={styles.pink}
          href="https://portal.thirdweb.com/pre-built-contracts/token-drop"
          target="_blank"
          rel="noreferrer"
        >
          token drop
        </a>{" "}
        contract.
      </p>

      <hr className={styles.divider} />

      <div className={styles.claimGrid}>
        <input
          type="text"
          placeholder="Enter amount to claim"
          onChange={(e) => setAmountToClaim(e.target.value)}
          className={`${styles.textInput} ${styles.noGapBottom}`}
        />
        <Web3Button
          accentColor="#5204BF"
          colorMode="dark"
          contractAddress="0x070CD3393A57968166d6B82699D9b4e4E9fF0bde"
          action={(contract) => contract.erc20.claim(amountToClaim)}
          onSuccess={() => alert("Claimed!")}
          onError={(err) => alert(err)}
        >
          Claim Tokens
        </Web3Button>
      </div>
      <div>
      <Web3Button
          accentColor="#5204BF"
          colorMode="dark"
          contractAddress="0x070CD3393A57968166d6B82699D9b4e4E9fF0bde"
          action={(contract) => contract.balance()}
          onSuccess={(res) => setBalance(res.displayValue)}
          onError={(err) => alert(err)}
        >
          {balance ? ("You have " + balance) : "Click to check balance"}
        </Web3Button>
      </div>
      <div>
      {!balance ? "" :
        <div>
          <h2>You are now elligible for the following Content</h2>
          <p>Display content gated by RISE balance here</p>
        </div>
        }
      </div>
      <div>
      {balance < 5 ? "" :
        <div>
          <h2>Woah!</h2>
          <p>You got 5. You gained access to the super secret stuff!</p>
          <div style={{background: "lightgray"}}>
          <Stack direction="row" sx={{mt: "10px !important"}}>
          <Image src="/thirdweb.svg" alt="Vercel Logo" width={72} height={16} sx={{mt: "10px !important"}} />
                <Typography sx={{ml: 10}}>
                    Test Course
                </Typography>
            </Stack>
            <CardHeader />
            <CardContent>
              <Typography>
                Test Course info
              </Typography>
              <Image src="/studying.webp" alt="Vercel Logo" width={100} height={80}/>
            </CardContent>
                <CardActions >
                    <Stack spacing={2} sx={{ width: "100%" }}>
                      {approval 
                      ? 
                        <Web3Button
                          isDisabled={purchased}
                          accentColor="#5204BF"
                          colorMode="dark"
                          contractAddress="0x070CD3393A57968166d6B82699D9b4e4E9fF0bde"
                          action={(contract) => contract.burnFrom(currentAddress, 5.0)}
                          onSuccess={(res) => {setPurchased(true); setBalance(balance => (balance - 5))}}
                          onError={(err) => alert(err)}
                        >
                          {purchased ? "purchased": "Buy Course - 5 RISE"}
                        </Web3Button>
                      :
                        <Web3Button
                          accentColor="#5204BF"
                          colorMode="dark"
                          contractAddress="0x070CD3393A57968166d6B82699D9b4e4E9fF0bde"
                          action={(contract) => contract.setAllowance(currentAddress, 5)}
                          onSuccess={(res) => setApproval(true)}
                          onError={(err) => alert(err)}
                        >
                          Approve Contract to spend 5 rise
                        </Web3Button>
                      }
                    
                    </Stack>
                </CardActions>
            </div>
        </div>
        }
      </div>
      <div className='p-5'>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48 h-15"
      onClick={() => window.location.assign('https://phoenixid-rise.surge.sh/')}
      >
        Mint an NFT
      </button>
      </div>
    </div>
  );
}