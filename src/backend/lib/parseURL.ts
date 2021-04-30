import tlds from "tlds";
import ipRegex from "ip-regex";

const whitelist = ["http://", "https://"];

const parseURL = (rawURL: string): string | boolean => {
  // true: is a qualified url itself
  // false: is a search query

  const url = rawURL.toLowerCase();

  let whitelisted = false;
  for (const protocol of whitelist) {
    if (url.startsWith(protocol) && !url.startsWith(protocol + " ")) {
      whitelisted = true;
      break;
    }
  }
  if (whitelisted) {
    return rawURL;
  }

  if (url.startsWith("localhost") && !url.startsWith("localhost ")) {
    return "http://" + rawURL;
  }

  if (ipRegex({ exact: true }).test(url)) {
    return "https://" + rawURL;
  }

  if (!url.includes(".")) {
    return false;
  }

  const split = rawURL.split(".");
  const tld = split[split.length - 1].split("/")[0].split("?")[0];

  if (tlds.includes(tld.toLowerCase())) {
    return "https://" + rawURL;
  } else {
    return false;
  }
};

export default parseURL;
