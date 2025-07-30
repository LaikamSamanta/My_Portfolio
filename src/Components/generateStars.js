export function generateBoxShadows(count) {
  const shadows = [];
  const width = window.innerWidth;
  const height = window.innerHeight * 2;

  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const opacity = (Math.random() * 0.5 + 0.5).toFixed(2);
    shadows.push(`${x}px ${y}px rgba(255, 255, 255, ${opacity})`);
  }

  return shadows.join(', ');
}