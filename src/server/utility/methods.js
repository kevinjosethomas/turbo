const tlds = require("tlds");
const ipRegex = require("ip-regex");

const localhost = ["http://", "https://", "localhost"];

exports.checkURL = (rawURL) => {
  let url = rawURL.toLowerCase();

  protocols.map((el) => {
    if (url.startsWith(el) && !url.startsWith(el + " ")) {
      return true;
    }
  });

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
