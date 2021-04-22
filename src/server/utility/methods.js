const tlds = require("tlds");

exports.checkURL = (rawURL) => {
  let url = rawURL.toLowerCase();

  if (url.startsWith("https://") || url.startsWith("http://")) {
    return true;
  }

  const splitURL = url.split(".");
  const tld = splitURL[splitURL.length - 1].split("/")[0].split("?")[0];

  return tlds.includes(tld.toLowerCase());
};
