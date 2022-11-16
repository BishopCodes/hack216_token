import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
// import Whitelist from "../components/Whitelist";

export default function Home() {
  const [amountToClaim, setAmountToClaim] = useState("");
  const [balance, setBalance] = useState(0);

  return (
    <div className={styles.container}>
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
          contractAddress="0x68Beb805242D2113341a8338AaF8F55776A825f8"
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
          contractAddress="0x68Beb805242D2113341a8338AaF8F55776A825f8"
          action={(contract) => contract.balance()}
          onSuccess={(res) => setBalance(res.displayValue)}
          onError={(err) => alert(err)}
        >
          {balance ? balance : "Click to check balance"}
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
        </div>
        }
      </div>
    </div>
  );
}
