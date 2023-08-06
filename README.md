# HelloWorldDiscordBot

This is a program for devloping the understanding of nodejs and how can you write different bots for discord.
This is a simple program which will let login the bot with the token and then we will be performing different
actions based on the input given by the user.

intents :

There are different classes which are defined under different "GatewayIntentBits".These different classes have different events defined under them.

So Guilds is equal to "server". so this is the top level type which is there and if it is not being defined then non of the events will not come to bot.
apart from these

GatewayIntentBits.GuildMembers -> This is for getting the information on the server members.if not defined then you will not receive the member related events and information.

GatewayIntentBits.GuildMessages -> This is related with all the messages whicgh are posted in the server.if this is not as a part of the list
then non of the messages(GatewayIntentBits.DirectMessages,GatewayIntentBits.MessageContent,) will reach to bot.

Partials is still an open question which need to be understand.
