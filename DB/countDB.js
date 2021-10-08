const { Pool } = require("pg");

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

//create count table if not there
const createCountTable = async () => {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS count(date text, times integer);"
  );
};

module.exports.countToday = async () => {
  let todayDate = new Date()
    .toLocaleString("en-GB", { timeZone: "Asia/kolkata" })
    .split(",")[0];

  await createCountTable();

  //check if today date is present in DB or not
  let result = await pool.query("select * from count where date=$1;", [
    todayDate,
  ]);

  //present
  if (result.rows.length) {
    let times = result.rows[0].times;

    await pool.query("UPDATE count SET times = $1 WHERE date=$2;", [
      result.rows[0].times + 1,
      todayDate,
    ]);
    await pool.query("commit;");
    return times + 1;
  } else {
    await pool.query("INSERT INTO count VALUES($1,$2);", [todayDate, 1]);
    await pool.query("commit;");
    return 1;
  }
};
