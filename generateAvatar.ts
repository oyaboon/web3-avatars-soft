import chroma from "chroma-js";

function addressToColor(address: string, index: number): string {
  const hash = address.slice(2 + index * 6, 8 + index * 6).padEnd(6, "0");
  return `#${hash}`;
}

export function generateAvatarGradientFromAddress(address: string): {
  backgroundImage: string;
  filter: string;
} {
  const colors = Array.from({ length: 5 }, (_, i) =>
    chroma(addressToColor(address, i)).saturate(2).brighten(1.5).hex()
  );

  const positions = [
    "at 10% 20%",
    "at 90% 20%",
    "at 20% 80%",
    "at 80% 80%",
    "at 50% 50%",
  ];

  const backgroundImage = colors
    .map((color, i) =>
      `radial-gradient(${positions[i]}, ${chroma(color).alpha(0.7)} 0%, transparent 100%)`
    )
    .join(", ");

  return {
    backgroundImage,
    filter: "brightness(1) contrast(1.6)",
  };
}
