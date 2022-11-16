import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";

const activeChainId = ChainId.Goerli;

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
};

export default MyApp;
