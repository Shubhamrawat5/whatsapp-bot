const axios = require("axios");

module.exports.getQuote = async () => {
  try {
    let url = "https://zenquotes.io/api/random";
    let { data } = await axios.get(url);
    let quote = "💬 " + data[0].q;
    //   console.log(quote);
    return quote;
  } catch (err) {
    console.log(err);
    return "ERROR";
  }
};
