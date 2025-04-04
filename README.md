# Web3 Avatars Soft

A lightweight library that generates beautiful soft gradient avatars from Ethereum addresses. Each address produces a unique, visually pleasing gradient that can be used as an avatar or identity representation.

## Demo

View the live demo: [Web3 Avatars Soft Demo](https://yourusername.github.io/web3-avatars-soft/)

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

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/web3-avatars-soft.git
cd web3-avatars-soft

# Install dependencies
npm install

# Run the demo
npm run dev

# Build the library
npm run build
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Continuous Integration

This project uses GitHub Actions for continuous integration:

- **CI Workflow**: Runs on every push to main and pull requests to ensure the code builds correctly and passes all checks.
- **Publish Workflow**: Automatically publishes the package to npm when a new release is created.
- **GitHub Pages Workflow**: Automatically builds and deploys the demo to GitHub Pages when changes are pushed to the main branch.

## License

MIT 