/* -------------------------------- BIRTHDAY -------------------------------- */
let usedDate = new Date()
  .toLocaleString("en-GB", { timeZone: "Asia/kolkata" })
  .split(",")[0];

const checkTodayBday = async (todayDate) => {
  console.log("CHECKING TODAY BDAY...", todayDate);
  todayDate = todayDate.split("/");
  let d = todayDate[0];
  d = d.startsWith("0") ? d[1] : d;
  let m = todayDate[1];
  m = m.startsWith("0") ? m[1] : m;
  let url = "https://pvxgroup.herokuapp.com/api/bday";
  let { data } = await axios.get(url);
  let bday = [];

  data.data.forEach((member) => {
    if (member.month == m && member.date == d) {
      bday.push(
        `${member.name.toUpperCase()} (${member.username.toUpperCase()})`
      );
      console.log(`Today is ${member.name} Birthday!`);
    }
  });
  if (bday.length) {
    let bdayComb = bday.join(" & ");
    conn.sendMessage(
      pvxcommunity,
      `*─「 🔥 <{PVX}> BOT 🔥 」─* \n\nToday is ${bdayComb} Birthday 🍰 🎉🎉`,
      MessageType.text
    );
  } else {
    console.log("NO BIRTHDAY!");
    conn.sendMessage(
      pvxcommunity,
      `*─「 🔥 <{PVX}> BOT 🔥 」─* \n\nThere is no Birthday today!`,
      MessageType.text
    );
  }
  await conn.groupUpdateSubject(pvxcommunity, "<{PVX}> COMMUNITY ❤️");
};

const postTechNews = async (count) => {
  if (count > 20) {
    //20 times already posted news came
    return;
  }
  console.log(`TECH NEWS FUNCTION ${count} times!`);

  let url = "https://news-pvx.herokuapp.com/";
  let { data } = await axios.get(url);
  delete data.about;

  let newsWeb = [
    "gadgets-ndtv",
    "gadgets-now",
    "xda-developers",
    "inshorts",
    "beebom",
    "india",
    "mobile-reuters",
    "techcrunch",
    "engadget",
  ];

  let randomWeb = newsWeb[Math.floor(Math.random() * newsWeb.length)]; //random website
  let index = Math.floor(Math.random() * data[randomWeb].length);

  let news = data[randomWeb][index];
  let techRes = await storeNewsTech(news);
  if (techRes) {
    console.log("NEW TECH NEWS!");
    conn.sendMessage(pvxtech, `📰 ${news}`, MessageType.text);
  } else {
    console.log("OLD TECH NEWS!");
    postTechNews(count + 1);
  }
};

const postStudyInfo = async (count) => {
  if (count > 20) {
    //20 times already posted news came
    return;
  }
  console.log(`STUDY NEWS FUNCTION ${count} times!`);
  let feed;
  // let random = Math.floor(Math.random() * 2);
  feed = await parser.parseURL(
    "https://www.thehindu.com/news/national/feeder/default.rss"
  );

  let li = feed.items.map((item) => {
    return { title: item.title, link: item.link };
  });

  let index = Math.floor(Math.random() * li.length);

  let news = li[index];

  let techRes = await storeNewsStudy(news.title);
  if (techRes) {
    console.log("NEW STUDY NEWS!");
    conn.sendMessage(pvxstudy, `📰 ${news.title}`, MessageType.text, {
      detectLinks: false,
    });
  } else {
    console.log("OLD STUDY NEWS!");
    postStudyInfo(count + 1);
  }
};

setInterval(() => {
  console.log("SET INTERVAL.");

  let hour = Number(
    new Date()
      .toLocaleTimeString("en-GB", {
        timeZone: "Asia/kolkata",
      })
      .split(":")[0]
  );
  //8 to 24 ON
  if (hour >= 8) {
    postTechNews(0);
    postStudyInfo(0);
    // setTimeout(() => {
    // }, 1000 * 60 * 1);
  }

  let todayDate = new Date().toLocaleDateString("en-GB", {
    timeZone: "Asia/kolkata",
  });

  if (usedDate !== todayDate) {
    usedDate = todayDate;
    checkTodayBday(todayDate);
  }
}, 1000 * 60 * 20); //20 min
