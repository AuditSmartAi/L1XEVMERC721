// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AuditCertificateNFT is ERC721URIStorage, Ownable {
    uint256 public tokenId;

    constructor(address initialOwner) ERC721("AuditCertificate", "AUDITNFT") Ownable(initialOwner) {}

    function issueCertificate(address recipient, string memory metadataURI) external {
        tokenId++;
        _safeMint(recipient, tokenId);
        _setTokenURI(tokenId, metadataURI);
    }
}
