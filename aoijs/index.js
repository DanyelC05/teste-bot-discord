const { AoiClient, LoadCommands } = require("aoi.js");

const client = new AoiClient({
  token: "OTc2NjUxMjM0MjcyNDc3MzE0.GAG0Np.sEyVDn_Ylj6GQEgFmPOm7bAv5CnLqGQdm-DlK4",
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