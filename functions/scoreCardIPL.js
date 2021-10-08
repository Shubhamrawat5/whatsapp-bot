const axios = require("axios");

module.exports.getScoreCard = async (matchID) => {
  try {
    let { data } = await axios.get(
      "https://cricket-scorecard-2021.herokuapp.com/scorecard/" + matchID
    );
    let firstInningTeam = "",
      secondInningTeam = "",
      firstInningTeamScore = "",
      secondInningTeamScore = "";
    firstInningTeam = data.Innings1[2].team;
    firstInningTeamScore = data.Innings1[2].score;
    let message = `🏏 ${firstInningTeam}\nscore: ${firstInningTeamScore}\n`;
    if (Object.keys(data.Innings2[2]).length) {
      secondInningTeam = data.Innings2[2].team;
      secondInningTeamScore = data.Innings2[2].score;
    }

    data.Innings1[0].Batsman.forEach((player) => {
      message += `\n${player.runs} (${player.balls}) : ${player.name}`;
    });

    if (secondInningTeam) {
      message = `\n\n🏏 ${secondInningTeam}\nscore: ${secondInningTeamScore}\n`;
      data.Innings2[0].Batsman.forEach((player) => {
        message += `\n${player.runs} (${player.balls}) : ${player.name}`;
      });
    }
    return message;
  } catch (err) {
    console.log(err);
    return "";
  }
};
