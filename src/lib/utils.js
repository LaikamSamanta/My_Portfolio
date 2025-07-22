// lib/utils.js
export function cn(...classes) {
  return classes
    .flat() // flatten arrays if any
    .filter(Boolean) // remove falsy values like undefined, false, ''
    .join(" "); // join with spaces
}
