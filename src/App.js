import { ConnectButton, useAccount } from "@web3modal/react";
import Data from './components/Data'

function App() {
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <Data />
      ) : (
        <ConnectButton />
      )}
    </>
  );
}

export default App;
