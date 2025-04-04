import { generateAvatarGradientFromAddress, generateRandomAddress } from '../index';
import createElement from 'lucide/dist/esm/createElement';
import Sun from 'lucide/dist/esm/icons/sun';
import Moon from 'lucide/dist/esm/icons/moon';

// DOM Elements
const addressInput = document.getElementById('address-input') as HTMLInputElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const randomBtn = document.getElementById('random-btn') as HTMLButtonElement;
const avatar = document.getElementById('avatar') as HTMLDivElement;
const addressDisplay = document.getElementById('address-display') as HTMLDivElement;
const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
const themeIconContainer = document.getElementById('theme-icon-container') as HTMLDivElement;

// Create icon elements
const sunIconElement = createElement(Sun, {
  color: 'currentColor',
  size: 24,
  'stroke-width': 2,
  'aria-hidden': true
});

const moonIconElement = createElement(Moon, {
  color: 'currentColor',
  size: 24,
  'stroke-width': 2,
  'aria-hidden': true
});

// Default address
const defaultAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

// Theme management
function setTheme(theme: 'light' | 'dark'): void {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update icon visibility
  themeIconContainer.innerHTML = '';
  if (theme === 'dark') {
    themeIconContainer.appendChild(moonIconElement);
  } else {
    themeIconContainer.appendChild(sunIconElement);
  }
}

// Initialize theme based on user preference or system preference
function initializeTheme(): void {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// Check if an address is valid Ethereum address
function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// Generate and display avatar for the given address
function generateAvatar(address: string): void {
  if (!isValidAddress(address)) {
    alert('Please enter a valid Ethereum address (0x followed by 40 hexadecimal characters)');
    return;
  }

  const styles = generateAvatarGradientFromAddress(address);
  
  // Apply the styles to the avatar element
  avatar.style.backgroundImage = styles.backgroundImage;
  avatar.style.filter = styles.filter;
  
  // Display the address
  addressDisplay.textContent = address;
  
  // Save to input
  addressInput.value = address;
}

// Event Listeners
generateBtn.addEventListener('click', () => {
  const address = addressInput.value.trim();
  generateAvatar(address);
});

randomBtn.addEventListener('click', () => {
  const randomAddress = generateRandomAddress();
  generateAvatar(randomAddress);
});

// Toggle theme
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Handle input on Enter key
addressInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateBtn.click();
  }
});

// Initialize theme and avatar on load
document.addEventListener('DOMContentLoaded', () => {
  initializeTheme();
  generateAvatar(defaultAddress);
}); 