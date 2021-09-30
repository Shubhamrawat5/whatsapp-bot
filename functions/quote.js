const axios = require("axios");

module.exports.getQuote = async () => {
  let url = "https://zenquotes.io/api/random";
  let { data } = await axios.get(url);
  let quote = data[0].q;
  return quote;
};
