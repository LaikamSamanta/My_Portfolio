export function generateBoxShadows(count) {
  const shadows = [];
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    shadows.push(`${x}px ${y}px #FFF`);
  }

  return shadows.join(', ');
}