
import { ethers } from 'ethers';
import { INFURA_API_KEY } from '@env';

const getWalletBalance = async (walletAddress) => {
  const provider = new ethers.providers.InfuraProvider('homestead', INFURA_API_KEY);
  const balance = await provider.getBalance(walletAddress);
  return ethers.utils.formatEther(balance);
};

export default getWalletBalance;