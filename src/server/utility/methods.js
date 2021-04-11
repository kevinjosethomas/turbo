const tlds = require("tlds");

exports.checkURL = (url) => {
  const splitURL = url.split(".");
  const tld = splitURL[splitURL.length - 1].split("/")[0].split("?")[0];

  return tlds.includes(tld.toLowerCase());
};
