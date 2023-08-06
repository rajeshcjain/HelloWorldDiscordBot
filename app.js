const { Client, GatewayIntentBits, Partials, Events } = require("discord.js");
const config = require("./config.json");

//Intenets are the evenst which our bot can receieve from the discor.

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    // GatewayIntentBits.DirectMessages,
    // GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.GuildMember],
});

// const client = new Client({
//   intents: [
//     GatewayIntentBits.GuildMembers,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.DirectMessages,
//     GatewayIntentBits.MessageContent,
//   ],
//   partials: [
//     Partials.Channel,
//     Partials.Message,
//     Partials.User,
//     Partials.GuildMember,
//     Partials.GuildScheduledEvent,
//   ],
// });

client.once(Events.ClientReady, (client) => {
  console.log("Ready! Logged in as " + client.user.tag);
});

client.on(Events.MessageCreate, (msg) => {
  let msgContent = msg.content.toLowerCase();
  console.log("1 " + msgContent);

  if (msg.author.bot == true) {
    console.log("This message is from the bot");
    return;
  }

  if (!msg.author.bot) {
    msg.reply("You are not a bot user");
  }

  if (msgContent === "!help" || msgContent === "!command") {
    msg.reply(
      "This bot operates on the following commands: !help !commands !age !math"
    );
  }

  // basic math return the sum of a few numbers using addition, subtraction, multip. etc.
  if (msgContent === "!math") {
    msg.reply(
      "5 + 2 - 1 * 5 / 2 - 4 + 7 * 3 % 5 = " +
        (5 + 2 - (1 * 5) / 2 - 4 + ((7 * 3) % 5))
    );
  }

  if (msgContent === "!age") {
    msg.reply("The server was started at " + msg.guild.createdAt.toString());
  }

  // Fetch guild members returns a promise.
  msg.guild.members.fetch().then(
    (value) => {
      // console.log(value);
      value.forEach((user) => {
        // print each user's id and the id of the author of the message
        console.log(user.user.id + " " + msg.author.id);
        console.log(user.joinedTimestamp); // print joinedTimestamp
        let date = new Date(user.joinedTimestamp); // Convert milliseconds to actual date and time
        msg.reply(user.user.tag + " joined\n" + date.toString()); // reply with the date and time
      });
    },
    (error) => {
      console.log(error); // prints error if it occurs.
    }
  );
});

// Log in to Discord with your client's token
client.login(config.token);
