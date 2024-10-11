const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({

token: "edit this(Bot Token)", 

prefix: "$getServerVar[prefix]"

})

 bot.status({

text: "AETHICS A!help | A!inv",

type: "PLAYING",

time: "12"

})

bot.onMessage()
bot.command({
    name: "<@853118712734154822>",
    aliases: ["<@!853118712734154822>"],
    nonPrefixed: true,
    code: `Hello! my prefix is \`$getServerVar[prefix]\`! you can do \`$getServerVar[prefix]help\` to see my commands! `
})
bot.command({
 name: "Setverify",
 code: `$description[Verification Channel has been set up to <#$mentionedChannels[1;yes]>]
 $color[RANDOM]
 $setServerVar[Verifych;$mentionedChannels[1;yes]]
 $onlyPerms[admin;Only Admin Users with perms can use this{delete:10s}]
$suppressErrors[]`
})
bot.command({
 name: "Verifycode",
 code: `$title[Verification Code]
 $description[\`$randomString[8]\`]
 $color[RANDOM]
 $footer[Aethics Verification]
 $addField[Usage:;Use A!verify And Your Code.]
 $setUserVar[Captcha;$randomstring[8]]
 $onlyIf[$channelID==$getServerVar[Verifych];Wrong Channel Please Try Again.]`
})
bot.command({
 name: "verify",
 usage: "Verify <code>",
 code: `$title[Succesfully Verification]
 $description[You Have Been Successfully Verified In This Server
 You Can Now Access All Channels In This Server, Enjoy!]
 $footer[Aethics Verification]
 $color[RANDOM]
 $giveRole[$authorID;$findRole[Verified Citizen]]
 $takeRole[$authorID;$findRole[Not Verified]]
 $onlyIf[$message==$getUserVar[Captcha];Sorry But This Code You Typed In Is Invalid! :x:]
 $onlyIf[$channelID==$getServerVar[Verifych];Wrong Channel Please Try Again.]
 `
})
bot.command({
name: "ticketsetup",
code: `
$awaitMessages[$authorID;30s;everything;tsp2;Command has been cancelled]
$sendMessage[**Which Category Do you want to make For Ticket System.
Provide the Category ID. 
This Command will be cancelled after** \`30 seconds\`.;no]
$onlyPerms[admin;Only Users with \`ADMIN\` perms can use this{delete:10s}]
$suppressErrors[]`
})
bot.awaitedCommand({
name: "tsp2",
code: `
**✅ Setup ticket is complete**
$setServerVar[ticketchannel;$message]
$onlyIf[$channelExists[$message]==true;Provided Category Doesn't Exist{delete:10s}]
$onlyIf[$isNumber[$message]==true;Please provide Category ID{delete:10s}]`
})
bot.command({
name: "ticket",
code: `
$newTicket[ticket-$username[$authorID];{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!:tickets: Please give the information about your problem or feedback. 
Thanks in advance for being patient}{footer:Use close to close your ticket};$getServerVar[ticketchannel];no;<@$authorID>, I failed to create your ticket! Try again]
$sendMessage[Ticket Successfully opened! Hello, <@$authorID>. Go to **$toLowercase[#$username$discriminator]** to describe your issue!;Something went wrong]`
})
bot.command({
name: "close",
code: `$closeTicket[This is not a ticket]
$onlyIf[$checkContains[$channelName;ticket]==true;This command can only be used in tickets{delete:10s}]
$suppressErrors`
})
bot.command({
 name: "setchatbot",
 code: `$description[ChatBot has been set up to <#$mentionedChannels[1;yes]>]
 $color[RANDOM]
 $setServerVar[Chatbotch;$mentionedChannels[1;yes]]
 $onlyPerms[admin;Only Admin Users with perms can use this{delete:10s}]
$suppressErrors[]`
})
bot.command({
    name: "$alwaysExecute",
    code: `$jsonRequest[https://api.udit.gq/api/chatbot?message=$message&gender=Female&name=Ai;message] $onlyIf[$channelID==$getServerVar[Chatbotch]]`
 })
bot.awaitedCommand({

 name: "music1",

 code: `$description[I'm still playing in <#$voiceID[$clientID]>]

$color[RED]`

})
bot.awaitedCommand({

 name: "music2",

 code: `$description[I still playing in <#$voiceID[$clientID]>]

$color[RED]`

})
bot.deletedCommand({
channel: "$channelID",
code: `$setChannelVar[user_ID;$authorID]
$setChannelVar[user_message;$message]`
})
bot.onMessageDelete()

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {

const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js")) 

for (const commands of folder) {

const command = require(`./commands/${files}/${commands}`) 

bot.command({

name: command.name,
aliases: command.aliases,
nonPrefixed: command.nonPrefixed,
code: command.code

})

}

}

bot.variables({
XP: "0",
Bank: "0",
Wallet: "0",
psuffix: '0',
tv: "0",
duffle: '0',
bag: "0",
smartphone: "0",
laptop: "0",
car: "0",
truck: "0",
helicopter: "0",
apartment: "0",
house: "0",
mansion: "0",
DailyChest: "0",
lucky: "0",
spiteful: "0",
Captcha: "",
Verifych: "",
Chatbotch: "",
muted: "",
ticketchannel: "",
antilink: "false",
warn: "0",
user_message: "",
user_ID: "",
prefix: "A!",
rch: "",
rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
lvl: "0",
exp: "0",
rexp: "40",
rsystem: "0",
Balance: "0",
Bank: "0",
chatbotchannel: "Not Set",
channels: "not set"})
