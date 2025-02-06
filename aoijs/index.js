const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: DISCORD_BOT_TOKEN,
  prefix: ".",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "2fa58969880435404400a04157f751af",
  }
});

const loader = new LoadCommands(client);
loader.load(client.cmd, "./commands")