const axios = require("axios");

//return 0 when match over, return -1 when error, otherwise return match details
module.exports.getIplScore = async (matchID, commandName) => {
  try {
    let { data } = await axios.get(
      "https://criapi.vercel.app/score?url=https://www.cricbuzz.com/live-cricket-scores/" +
        matchID
    );

    let title = data.title;
    title = title.slice(0, title.search(","));
    let score = data.current;
    let runrate = data.runrate;
    let lastwicket = data.lastwicket;
    let recentballs = data.recentballs;
    let bowler = data.bowler;
    let bowlerover = data.bowlerover;
    let bowlerruns = data.bowlerruns;
    let bowlerwickets = data.bowlerwickets;
    if (recentballs === "Data Not Found") recentballs = data.lastwicket;

    let d = await axios.get(
      "https://cricket-scorecard-2021.herokuapp.com/scorecard/" + matchID
    );
    data = d.data;

    //is match over?
    if (
      commandName !== "score" &&
      data["result"]["winning_team"] !== "Not Completed"
    )
      return 0;

    let batsman1 = "out ho gaya",
      batsman2 = "out ho gaya";
    let currentInning;
    let alt = true;
    let firstInningRuns, firstInningTeam;

    if (Object.keys(data.Innings2[2]).length === 0) {
      currentInning = "Innings1";
    } else {
      currentInning = "Innings2";
      firstInningRuns = data.Innings1[2].runs + "/" + data.Innings1[2].wickets;
      firstInningTeam = data.Innings1[2].team
        .match(/(\b\S)?/g)
        .join("")
        .toUpperCase();
    }

    let update = currentInning === "Innings2" ? data["result"]["update"] : "";

    data[currentInning][0]["Batsman"].forEach((batsman) => {
      if (batsman.dismissal === "batting") {
        if (alt) {
          let batsmanName = batsman.name;
          if (batsmanName.search(/\(/) !== -1) {
            batsmanName = batsmanName.slice(0, batsmanName.search(/\(/) - 1);
          }
          batsman1 = `${batsmanName}: ${batsman.runs} (${batsman.balls})`;
          alt = false;
        } else {
          let batsmanName = batsman.name;
          if (batsmanName.search(/\(/) !== -1) {
            batsmanName = batsmanName.slice(0, batsmanName.search(/\(/) - 1);
          }
          batsman2 = `${batsmanName}: ${batsman.runs} (${batsman.balls})`;
        }
      }
    });

    let isInningOver = false;

    //inning over
    if (batsman2 === batsman1) isInningOver = true;

    /* MESSAGE :-
    Royal Challengers Bangalore vs Chennai Super Kings

    RCB - 156/6
    CSK - 19/0 (2.1) CRR:  8.77

    🏏 Ruturaj Gaikwad: 11 (7)
    🏏 Faf du Plessis: 11 (11)

    ⚾ Mohammed Siraj* 9-0 (1.1)

    recent balls
    ... 0 1 4 1 1 | 0 6 L1 1 2 0 | 1
    Last Wicket: example 22 (20) 
    chennai super kings need 134 runs
    */

    let message = "";
    //title
    message += `*${title}*
    `;

    //first inning info
    message += firstInningRuns
      ? `
    ${firstInningTeam + " - " + firstInningRuns}`
      : "";

    //current inning info
    message += `
${score} ${runrate}
`;

    //bowler and last wicket info
    message += isInningOver
      ? ""
      : `
🏏 ${batsman1}
🏏 ${batsman2}

⚾ ${bowler} ${bowlerruns}-${bowlerwickets} (${bowlerover})
${batsman2 === "out ho gaya" ? "Last Wicket: " + lastwicket : ""}
_recent balls_
${recentballs}`;

    //match update
    message +=
      update === "" || isInningOver
        ? ""
        : `

${update}`;

    //to know first inning is over
    message += isInningOver
      ? `

    Inning over`
      : "";

    return message;
  } catch {
    return -1;
  }
};
