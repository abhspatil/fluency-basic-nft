// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract Fluence is ERC721, Ownable{
    uint public mintingPrice = 0.01 ether;
    uint public TOTAL_SUPPLY = 2;
    uint public currentSupply;
    bool public isMintingLive;

    mapping(address => uint256) public mintedWalletAdrresses;

    constructor() payable ERC721("Fluence", "FLNCE"){
        TOTAL_SUPPLY = 5;
    }

    function toggleMintingGoLive() external onlyOwner{
        isMintingLive = !isMintingLive;
    }

    function setTotalSupply(uint totalSupply) external onlyOwner{
        TOTAL_SUPPLY = totalSupply;
    }

    function getMintings() external view onlyOwner returns (uint256){
        return mintedWalletAdrresses[msg.sender];
    }

    function mint() external payable {
        require(isMintingLive, "OOPS, Minting not live yet");

        require(mintedWalletAdrresses[msg.sender] < 1, "OOPS, Only one minting allowed");
        require(msg.value < mintingPrice, "OOPS, Insufficent or Incorrect Ether");
        require(currentSupply <= TOTAL_SUPPLY, "OPPS, SOLD OUT");

        mintedWalletAdrresses[msg.sender]++ ;
        currentSupply++;
        uint tokenId = currentSupply;
        _safeMint(msg.sender, tokenId);
    }

}