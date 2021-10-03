const { WAConnection, Browsers } = require("@adiwajshing/baileys");
const { color, bgcolor } = require("./lib/color");
const fs = require("fs-extra");
const figlet = require("figlet");
const { uncache, nocache } = require("./lib/loader");
const setting = JSON.parse(fs.readFileSync("./setting.json"));
const welcome = require("./message/group");
baterai = "unknown";
charging = "unknown";

//nocache
require("./noir.js");
nocache("../noir.js", (module) =>
  console.log(
    color("[WATCH]", "yellow"),
    color(`'${module}'`, "cyan"),
    "File is updated!"
  )
);
require("./message/group.js");
nocache("../message/group.js", (module) =>
  console.log(
    color("[WATCH]", "yellow"),
    color(`'${module}'`, "yellow"),
    "File is updated!"
  )
);

const starts = async (noir = new WAConnection()) => {
  noir.logger.level = "warn";
  console.log(
    color(
      figlet.textSync("BOT Rp 10.000", {
        font: "Standard",
        horizontalLayout: "default",
        vertivalLayout: "default",
        width: 80,
        whitespaceBreak: false,
      }),
      "cyan"
    )
  );
  noir.browserDescription = ["HZKYX OS", "Chrome", "3.0.0"];

  // Menunggu QR
  noir.on("qr", () => {
    console.log(
      color("[", "pink"),
      color("!", "red"),
      color("]", "pink"),
      color("Silahkan Scan QR Code Di Atas")
    );
  });

  // Menghubungkan
  fs.existsSync(`./${setting.sessionName}.json`) &&
    noir.loadAuthInfo(`./${setting.sessionName}.json`);
  noir.on("connecting", () => {
    console.log(color("[ NOIR ]", "purple"), color("PROSES PENYAMBUNGAN"));
  });

  //connect
  noir.on("open", () => {
    console.log(
      color("[ HZKYX ]", "purple"),
      color("BOT SUDAH AKTIF SELAMAT MENGGUNAKAN")
    );
  });

  // session
  await noir.connect({
    timeoutMs: 30 * 1000,
  });
  fs.writeFileSync(
    `./${setting.sessionName}.json`,
    JSON.stringify(noir.base64EncodedAuthInfo(), null, "\t")
  );

  // Baterai
  noir.on("CB:action,,battery", (json) => {
    global.batteryLevelStr = json[2][0][1].value;
    global.batterylevel = parseInt(batteryLevelStr);
    baterai = batterylevel;
    if (json[2][0][1].live == "true") charging = true;
    if (json[2][0][1].live == "false") charging = false;
    console.log(json[2][0][1]);
    console.log("Baterai : " + batterylevel + "%");
  });
  global.batrei = global.batrei ? global.batrei : [];
  noir.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    global.batrei.push(batterylevel);
  });

  // welcome
  noir.on("group-participants-update", async (anu) => {
    await welcome(noir, anu);
  });

  noir.on("chat-update", async (message) => {
    require("./noir.js")(noir, message);
  });
};

starts();
