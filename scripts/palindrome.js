/**
 * Lowercases a string and strips anything that isn't a letter or digit.
 * @param {string} str
 * @returns {string}
 */
function normalize(str) {
  return str.toLowerCase().replace(/[^0-9a-z]/g, "");
}

/**
 * Checks whether a string reads the same forwards and backwards,
 * ignoring case, punctuation, and spacing.
 * @param {string} str
 * @returns {boolean}
 */
export function isPalindrome(str) {
  const normalized = normalize(str);
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}
