# Web3 Avatars Soft

A lightweight library that generates beautiful soft gradient avatars from Ethereum addresses. Each address produces a unique, visually pleasing gradient that can be used as an avatar or identity representation.

## Demo

Run the demo locally: `npm run dev`

The demo page includes:
- Avatar generation from Ethereum addresses
- Random address generation
- Dark/light mode toggle to view avatars against different backgrounds

## Installation

```bash
npm install web3-avatars-soft
```

## Usage

```typescript
import { generateAvatarGradientFromAddress, generateRandomAddress } from 'web3-avatars-soft';

// Generate CSS styles from an Ethereum address
const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
const styles = generateAvatarGradientFromAddress(address);

// Apply the styles to an element
const avatarElement = document.getElementById('avatar');
avatarElement.style.backgroundImage = styles.backgroundImage;
avatarElement.style.filter = styles.filter;

// Or generate a random Ethereum address and use it
const randomAddress = generateRandomAddress();
const randomStyles = generateAvatarGradientFromAddress(randomAddress);
```

## API

### `generateAvatarGradientFromAddress(address: string)`

Generates CSS styles for creating a gradient avatar from an Ethereum address.

**Parameters:**
- `address` (string): An Ethereum address (0x followed by 40 hexadecimal characters)

**Returns:**
An object containing:
- `backgroundImage` (string): CSS background-image property value with radial gradients
- `filter` (string): CSS filter property for enhanced visual effect

### `generateRandomAddress()`

Generates a random Ethereum address.

**Returns:**
- A random Ethereum address string

## How It Works

The library uses deterministic generation to create unique gradients based on the input Ethereum address:

1. It extracts color information from different parts of the address
2. Transforms these into aesthetically pleasing colors using the chroma-js library
3. Generates a complex CSS gradient using radial gradients at specific positions
4. Applies subtle filters to enhance the visual effect

## License

MIT 