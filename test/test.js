const Discord = require("discord.js");
let client = new Discord.Client();

const Meska = require("../meska");
console.log(Meska);

let Logger = new Meska.Logger();
console.log(Logger);

Logger.log("MSVJOINER.JS", "Test Message.", true);
Logger.info("MSVJOINER.JS", "Test Message.", true);
Logger.success("MSVJOINER.JS", "Test Message.", true);
Logger.warn("MSVJOINER.JS", "Test Message.", true);
Logger.error("MSVJOINER.JS", "Test Message.", true);

let DiscordClient = new Meska.DiscordClient(client);
console.log(DiscordClient);

let button = new DiscordClient.MessageButton()
  .setStyle("blurple")
  .setLabel("Msvjoiner !")
  .setID("msvjoiner");
console.log(button);

let button1 = new DiscordClient.MessageButton()
  .setStyle("url")
  .setLabel("Msvjoiner !")
  .setURL("https://example.com");
console.log(button1);

let embed = new Discord.MessageEmbed()
  .setTitle("Msvjoiner !")
  .setDescription("Test Message")
  .setTimestamp();
console.log(embed)

client.on("message", async (message) => {
  if (message.content == "!msvjoiner") {
    message.channel.send("Msvjoiner!", {
      buttons: [button, button1],
      embed: embed
    });
  }
});

client.on("clickButton", async (button) => {
  if (button.id === "msvjoiner") {
    button.channel.send("<@" + button.clicker.user.id + "> clicked button!");
    button.clicker.member.roles.add("ROLE_ID")
  }
});

client.login("YOUR_BOT_TOKEN");
