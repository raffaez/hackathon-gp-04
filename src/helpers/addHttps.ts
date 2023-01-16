export function addHttps(url: string) {
  if (url.substring(0, 4) !== 'http') {
    return 'https://' + url;
  }
  return url;
}
