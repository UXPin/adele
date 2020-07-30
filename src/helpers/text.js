export function clearKey(key = '') {
  return encodeURIComponent(
    key
      .replace(/\W+/g, ' ')
      .trim()
      .replace(/\s/g, '-')
      .toLowerCase(),
  );
}
