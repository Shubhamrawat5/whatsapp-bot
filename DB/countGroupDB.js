const { Pool } = require("pg");

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

//create countgroup table if not there
const createCountGroupTable = async () => {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS countgroup(groupjid text PRIMARY KEY, count integer);"
  );
};

module.exports.getCountGroup = async () => {
  await createCountGroupTable();
  let result = await pool.query(
    "SELECT * FROM countgroup ORDER BY(count) DESC;"
  );
  if (result.rowCount) {
    return result.rows;
  } else {
    return [];
  }
};

module.exports.setCountGroup = async (groupJid) => {
  if (!groupJid.endsWith("@g.us")) return;
  await createCountGroupTable();

  //check if groupjid is present in DB or not
  let result = await pool.query("select * from countgroup where groupjid=$1;", [
    groupJid,
  ]);

  //present
  if (result.rows.length) {
    let count = result.rows[0].count;

    await pool.query("UPDATE countgroup SET count = $1 WHERE groupjid=$2;", [
      count + 1,
      groupJid,
    ]);
    await pool.query("commit;");
    return count + 1;
  } else {
    await pool.query("INSERT INTO countgroup VALUES($1,$2);", [groupJid, 1]);
    await pool.query("commit;");
    return 1;
  }
};
