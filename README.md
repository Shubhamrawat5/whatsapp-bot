## Whatsapp Bot - Node Js - Heroku - Baileys

**_Requirements :_**

- Heroku account
- Heroku CLI
- Git

# Instructions:- :rocket:

## Git Setup

### Download and install git from (https://git-scm.com/downloads)

## Heroku Setup

1. Create account on heroku. (https://signup.heroku.com/)

2. After login on heroku dashboard create an app on heroku (https://dashboard.heroku.com/apps)

3. In the 'Resources' tab search for 'Heroku Postgres' in Add-ons and add it to your heroku app.

4. In the 'Deploy' section download Heroku CLI or from (https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

## Heroku CLI

1. After downloading and installing Heroku CLI in your system login to heroku cli using `heroku login` in command prompt or powershell.
2. Add ffmpeg (_for sticker support_) in your heroku app using `heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git -a <your-app-name>`
3. After adding ffmpeg now add 'Heroku Buildpack for Node.js' using `heroku buildpacks:add https://github.com/heroku/heroku-buildpack-nodejs.git -a <your-app-name>`
4. Now add 'Heroku Buildpack for tesseract' using `heroku buildpacks:add https://github.com/pathwaysmedical/heroku-buildpack-tesseract`
5. Now download or clone the whatsapp-bot repo by `git clone https://github.com/Shubhamrawat5/whatsapp-bot.git`
6. Now enter in whatsapp-bot directory using `cd whatsapp-bot` in command prompt or terminal.
7. Create the remote region using `heroku git:remote -a <your-app-name>`
8. Now push the local repo in your heroku app using `git push heroku master`
9. Now after the deploy process is completed use `heroku logs -a <your-app-name> --tail` to get real time logs from heroku app.
10. In real time logs it will automatically ask you for login using qr code just simple scan the qr code using your whatsapp web section, and you are done.

Now Bot will start working!!

# Features:- :rocket:

## Default prefix : `!`

## Commands :

|  Public Commands  |                Description                |  Alias  |
| :---------------: | :---------------------------------------: | :-----: |
|      `!help`      |          Display public commands          |         |
|     `!helpr`      |        Display restricted commands        |         |
|      `!add`       |            Add member to group            |         |
|      `!kick`      |          kick member from group           |         |
|      `!mute`      |              Mute the group               |         |
|     `!unmute`     |             Unmute the group              |         |
|     `!delete`     |           Delete message of bot           |   !d    |
|    `!sticker`     | Create sticker from different media types |   !s    |
|     `!block`      |  To block particular commands for group   |         |
|     `!toimg`      |         Create image from sticker         |         |
|      `!text`      |        Get text extract from image        |         |
|      `!song`      |       Get any song in good quality        |         |
|     `!insta`      |      Get insta reels or post videos       |   !i    |
|      `!ytv`       |          Download youtube videos          |         |
|      `!yta`       |          Download youtube audio           |         |
|    `!technews`    |           Get latest Tech news            |         |
|    `!pvxlink`     |          Get group links of PVX           |         |
|     `!drive`      |       Get GDrive files direct link        |         |
|     `!quote`      |            Give a random quote            |         |
|     `!gender`     |        Get gender from first name         |         |
|     `!alive`      |          Check bot is ON or OFF           |   !a    |
| `!cricketcommand` |       Get list of cricket commands        |   !cc   |
|     `!score`      |            Give Cricket score             |         |
|   `!scorecard`    |          Give Cricket scorecard           | !sc !sb |
|     `!startc`     |        Start Cricket score updated        |         |
|     `!stopc`      |        Stop Cricket score updated         |         |
|  `!votecommand`   |         Get list of vote commands         |   !vc   |
|   `!startvote`    |           Start voting in group           |         |
|      `!vote`      |             Vote for a choice             |         |
|   `!checkvote`    |      Check status of current voting       |   !cv   |
|    `!stotvote`    |        Stop voting and see result         |         |
|    `!donation`    |           Get Donation details            |         |
|      `!pvxg`      |     Get message counter of PVX groups     |         |
|      `!pvxm`      | Get message counter of PVX group members  |         |
|     `!source`     |            Get the bot source             |         |
|      `!dev`       |          Get the contact of dev           |         |

<hr>

|   Owner Commands   |             Description             | Alias |
| :----------------: | :---------------------------------: | :---: |
|      `!helpr`      |     Display restricted commands     |       |
|      `!test`       | execute code with whatsapp directly |       |
|     `!tagall`      |      Tag all members in group       |       |
|    `!pvxstats`     |       Get stats of PVX groups       |       |
|   `!groupbackup`   |       Take group backup in DB       |       |
|   `!deleteauth`    |  Delete auth DB to get new qr scan  |       |
|      `!count`      | Get stats of number of command used |       |
|       `!tg`        |       Make TG to WA stickers        |       |
|       `!stg`       |       Stop TG to WA stickers        |       |
|    `!blacklist`    |        Get blacklist numbers        |       |
|  `!blacklistadd`   |       Add number to blacklist       | !bla  |
| `!blacklistremove` |    Remove number from blacklist     | !blr  |

- CRICKET SCORES:

  > Put match id in starting of group description.

  > Get match ID from cricbuzz url, like https://www.cricbuzz.com/live-cricket-scores/37572/mi-vs-kkr-34th-match-indian-premier-league-2021 so match ID is `37572`

- Block any command for particular group

  > Give command name (with comma seperated and without spaces) to be blocked in first line of group description like `score,add,quote`

  > If matchId is to be added in description along with blocked commands then add in starting of first line, like `82621,score,add,quote`

- Other than 91 numbers are not allowed

  > Put `only91` text in first line of description of group to instant ban every number joined other than 91 indian numbers

- GROUP DESCRIPTION EXAMPLE:

   <img src="https://i.ibb.co/2Z8t9Qm/IMG-20211006-154704.jpg" width="400"/>

  > Always put match ID in starting of first line!

  > `91only` is command name and `only91` is to ban

# Run locally:- :rocket:

Run atleast one time in heroku to letall dataCreate a `.env` file for enviromental variables in directory with variables

    myNumber = "your-number-to-receive-all-updates"
    clientID = ""
    serverToken =""
    clientToken = ""
    encKey = ""
    macKey = ""

Get values from Heroku database

1. Go to heroku dashboard resources
2. Click Heroku Postgres
3. Click dataclips
4. Give any name and run command `SELECT * FROM auth`

   There you'll see all data and set the enviromental variables

# Note:- :rocket:

Since heroku uses:- Dyno sleeping in which if an app has a free web dyno, and that dyno receives no web traffic in a 30-minute period, it will sleep. In addition to the web dyno sleeping, the worker dyno (if present) will also sleep. and if a sleeping web dyno receives web traffic, it will become active again after a short delay (assuming your account has free dyno hours available)
You can use (http://kaffeine.herokuapp.com) to ping the heroku app every 30 minutes to prevent it from sleeping.

# References:- :rocket:

- [@Baileys](https://github.com/adiwajshing/Baileys)
- [@WA-STICKER-FORMATTER](https://github.com/Alensaito1/wa-sticker-formatter)
- Initial code taken from [Karma](https://github.com/karmaisgreat/simple-whatsapp-bot).

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Shubhamrawat5/whatsapp-bot)
