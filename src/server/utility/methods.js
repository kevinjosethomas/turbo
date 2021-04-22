const tlds = require("tlds");
const ipRegex = require("ip-regex");

const whitelist = ["http://", "https://", "localhost"];

exports.checkURL = (rawURL) => {
  let url = rawURL.toLowerCase();

  let whitelisted = false;
  whitelist.map((el) => {
    if (url.startsWith(el) && !url.startsWith(el + " ")) {
      whitelisted = true;
      return;
    }
  });

  if (whitelisted) {
    return true;
  }

  if (ipRegex({ exact: true }).test(url)) {
    return true;
  }

  if (!url.includes(".")) {
    return false;
  }

  const splitURL = url.split(".");
  const tld = splitURL[splitURL.length - 1].split("/")[0].split("?")[0];

  return tlds.includes(tld.toLowerCase());
};
