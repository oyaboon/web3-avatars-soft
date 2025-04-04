export { generateAvatarGradientFromAddress } from './lib/generateAvatar';

// Add additional utility function to generate random Ethereum address
import { ethers } from 'ethers';

/**
 * Generates a random Ethereum address
 * @returns A random Ethereum address string
 */
export function generateRandomAddress(): string {
  const wallet = ethers.Wallet.createRandom();
  return wallet.address;
} 