const axios = require("axios");

module.exports.getNews = async () => {
  try {
    let url = "https://news-pvx.herokuapp.com/";
    const { data } = await axios.get(url);

    let msg = `☆☆☆☆☆💥 Tech News 💥☆☆☆☆☆`;
    let inshorts = data.inshorts;
    let count = 0; //for first 14 news only
    for (let i = 0; i < inshorts.length; ++i) {
      ++count;
      if (count === 15) break;
      msg += `\n\n🌐 ${inshorts[i]}`;
    }
    // msg += `\n\njoin TG@pvxtechnews for daily tech news!`;
    return msg;
  } catch (err) {
    console.log(err);
    return "ERROR";
  }
};
