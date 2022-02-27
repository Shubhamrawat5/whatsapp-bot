const axios = require("axios");

module.exports.getInstaVideo = async (url) => {
  // const getInstaVideo = async (url) => {
  let imgDirectLink = "",
    videoDirectLink = "";
  try {
    if (url.includes("?")) url = url.slice(0, url.search("\\?"));
    // const res = await axios.get(url + "?__a=1", {
    //   headers: {
    //     accept:
    //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    //     "accept-encoding": "gzip, deflate, br",
    //     "accept-language": "en-US,en;q=0.9",
    //     "cache-control": "no-cache",
    //     cookie:
    //       "ig_did=305179C0-CE28-4DCD-847A-2F28A98B7DBF; ig_nrcb=1; mid=YQBN3wAEAAGfSSDsZYS9nf2a5MHO; fbm_124024574287414=base_domain=.instagram.com; csrftoken=4f5QNVgM7ioSEf7nfJFf3WJiZU7oR3Gz",
    //     pragma: "no-cache",
    //     "sec-ch-ua":
    //       '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
    //     "sec-ch-ua-mobile": "?0",
    //     "sec-ch-ua-platform": "Windows",
    //     "sec-fetch-dest": "document",
    //     "sec-fetch-mode": "navigate",
    //     "sec-fetch-site": "none",
    //     "sec-fetch-user": "?1",
    //     "upgrade-insecure-requests": "1",
    //     "user-agent":
    //       "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    //   },
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body: null,
    //   method: "GET",
    //   mode: "cors",
    // });
    // console.log(res.data.items[0]);
    const res = await axios.get(
      `https://api.neoxr.eu.org/api/ig?url=${url}&apikey=yourkey`
    );

    if (res.data.data[0].type === "mp4") {
      videoDirectLink = res.data.data[0].url;
    } else if (res.data.data[0].type === "jpg") {
      imgDirectLink = res.data.data[0].url;
    }

    // if (res.status == 200 && res.data.items[0].video_versions) {
    //   videoDirectLink = res.data.items[0].video_versions[0].url;
    // }
    // imgDirectLink = res.data.items[0].image_versions2.candidates[0].url;

    // if (res.status == 200 && res.data.graphql.shortcode_media.is_video) {
    //   videoDirectLink = res.data.graphql.shortcode_media.video_url;
    // }
    // imgDirectLink = res.data.graphql.shortcode_media.display_url;
  } catch (err) {
    console.log(err);
  }
  // console.log({ imgDirectLink, videoDirectLink });
  return { imgDirectLink, videoDirectLink };
};

// getInstaVideo("https://www.instagram.com/p/CV7guhtM1R2/");
// getInstaVideo("https://www.instagram.com/reel/CK-c9q-gD-M/");
// getInstaVideo("https://www.instagram.com/reel/CaUqEQal22W/");
