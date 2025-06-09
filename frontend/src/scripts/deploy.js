import { ethers } from "ethers";
import ContractArtifact from "../artifacts/contracts/ERC721.sol/AuditCertificateNFT.json";

export async function deployAuditNFT() {
  if (!window.ethereum) {
    alert("MetaMask not installed");
    return;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const abi = ContractArtifact.abi;
    const bytecode = ContractArtifact.bytecode;

    const factory = new ethers.ContractFactory(abi, bytecode, signer);

    const userAddress = await signer.getAddress();
    const contract = await factory.deploy(userAddress); // passing constructor arg

    console.log("Deploy tx hash:", contract.deploymentTransaction().hash);

    await contract.waitForDeployment();
    console.log("Deployed at:", contract.target);

    return contract.target; // Contract address
  } catch (error) {
    console.error("Deployment failed:", error);
    alert("Deployment error: " + error.message);
  }
}
