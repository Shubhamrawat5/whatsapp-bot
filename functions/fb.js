const axios = require("axios");

module.exports.getFbVideo = async (url) => {
  // const getFbVideo = async (url) => {
  let videoDirectLinkFb = "";
  try {
    console.log(url);
    // const res = await axios.get(url, {
    //   headers: {
    //     accept:
    //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    //     "accept-language": "en-US,en;q=0.9",
    //     "sec-ch-ua":
    //       '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua-platform": '"Windows"',
    //     "sec-fetch-dest": "document",
    //     "sec-fetch-mode": "navigate",
    //     "sec-fetch-site": "none",
    //     "sec-fetch-user": "?1",
    //     "upgrade-insecure-requests": "1",
    //     "user-agent":
    //       "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
    //   },
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body: null,
    //   method: "GET",
    //   mode: "cors",
    // });
    const res = await axios.get(
      `https://api.neoxr.eu.org/api/fb?url=${url}&apikey=yourkey`
    );

    // videoDirectLinkFb = res.data.split('hd_src:"')[1].split('",sd_src:"')[0];
    videoDirectLinkFb = res.data.data[0].url;
  } catch (err) {
    console.log(err);
  }
  console.log({ videoDirectLinkFb });
  return { videoDirectLinkFb };
};

// getFbVideo("https://fb.watch/8TZN7ldBKG/");
