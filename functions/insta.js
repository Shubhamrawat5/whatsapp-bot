const cheerio = require("cheerio");
const axios = require("axios");

module.exports.getInstaVideo = async (url) => {
  try {
    const html = await axios.get(url, {
      headers: {
        "sec-ch-ua":
          '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
        "sec-ch-ua-platform": "Windows",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      },
    });
    console.log(html.status);
    // calls cheerio to process the html received
    const $ = cheerio.load(html.data);
    // searches the html for the videoString
    const videoString = $("meta[property='og:video']").attr("content");
    let videoDirectLink = $('meta[property="og:video"]').attr("content");
    let title = $('meta[property="og:title"]').attr("content");

    return { title, videoDirectLink };
  } catch (err) {
    console.log(err);
    return { title: "", videoDirectLink: "" };
  }
};
