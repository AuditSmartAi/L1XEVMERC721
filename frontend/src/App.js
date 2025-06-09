import React from "react";
import { deployAuditNFT } from "./scripts/deploy";

function App() {
  const handleDeploy = async () => {
    const address = await deployAuditNFT();
    if (address) {
      alert("Contract deployed at: " + address);
    }
  };

  return <button onClick={handleDeploy}>Deploy Contract</button>;
}

export default App;
