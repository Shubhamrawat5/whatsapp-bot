const axios = require("axios");

module.exports.getInstaVideo = async (url) => {
  // const getInstaVideo = async (url) => {
  let imgDirectLink = "",
    videoDirectLink = "";
  try {
    if (url.includes("?")) url = url.slice(0, url.search("\\?"));
    const res = await axios.get(url + "?__a=1", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "max-age=0",
        "sec-ch-ua":
          '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
        "sec-ch-ua-mobile": "?1",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          'mid=YSEC4AALAAF5bk0tas41HCJDdxtP; ig_did=B2AB4361-90CF-41D5-B36E-03E66EEE1AA1; ig_nrcb=1; fbm_124024574287414=base_domain=.instagram.com; csrftoken=rhAkB2pduDbm5MTbyIofl0UrbR7Jr3AE; ds_user_id=4274094922; sessionid=4274094922%3Ay2mh0rvpQWd74X%3A19; shbid="17689\\0544274094922\\0541661437335:01f71a0599f6f1fdd84afc93ceb82193825b09ee67cdb74f25a8f1b14b2d3acd3cc89283"; shbts="1629901335\\0544274094922\\0541661437335:01f7ad7ac6485740dfe51c33ba803579ce09dad43e3b5dbc1f73c8bc8b41a5f734a9c458"; fbsr_124024574287414=veflxUzvfnSZgJ06Av5OS7EeCnhBb8Qs9bS57QEcvYY.eyJ1c2VyX2lkIjoiMTAwMDAzMDkxMzYxODk1IiwiY29kZSI6IkFRQzlPTzlES0ZDUk5pZ0QwQUZFa1ljeE14ME15MnVtdE5UeXVLdk95R1VibUdMVVdaWm95c1k3cDA5eXNsSmlBbjUtQkh3WWZnNGlwU0lnOWNPUzNVeVdwMU9sa0tLRU51SjBic3hldTRBNFphcDU3QzFkLXdxVVJveXlTREs2eWlYWFg3WXhuaTdseGRvdTEySFgyUFhjbV83Ul9QR2IzU2RMbTMyRUdZYjBNQ1JXSGxMVElfTWdMT0pBT3BpYTV0c3E5ZXBZc19mbG5fSU9PRnZURjhoWlF4MEVpT2c3YU9tb01uZF91b0Q5SHhzX0lreG85dHRuSjc4dWp6NzJsN3I1UEdHMXFWV25pQnVnTVJNczY1c0wtSTVvVmRkM0dZM1Q2MWoySi1VRVdlTy1OSENuVmtqTmNsdDNQUkowZGtSQkd2cGhZdUZ2NVBpWnZoLXRqdUVlIiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUUxNnhEMkh5bHFaQU9sQ0xvbWI2b3NnS0I2dVlNVER4NVl3YlVJb0FZQ2t5ZjdPclZjZ2tpVFVGd1J0SVgxWkFhY1h4Z3dYQ3Z3aEJ6NjhmTWJmRGNrVVBqaUFoaWpxTVpCZzg5QUxpYjYzbXZMZlB5TWRrQkg4NU1BVkt0RXhnb1V2Q0hzd3g0S3V4WE9PTmUzcWZDVmJaQWViSGY5endhWkJyNVd6UCIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjI5OTI1ODA3fQ; rur="LLA\\0544274094922\\0541661461817:01f7d8ba9ccfea9b57dbe7964bccfad9730064d4820485744c887fce9e53db3b4bf43c9f"',
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
    });
    // console.log(res.data);

    if (res.status == 200 && res.data.graphql.shortcode_media.is_video) {
      videoDirectLink = res.data.graphql.shortcode_media.video_url;
    }
    imgDirectLink = res.data.graphql.shortcode_media.display_url;
  } catch (err) {
    console.log(err);
  }
  // console.log({ imgDirectLink, videoDirectLink });
  return { imgDirectLink, videoDirectLink };
};

// getInstaVideo("https://www.instagram.com/p/CV7guhtM1R2/");
