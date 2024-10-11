module.exports = ({
name: "botinfo",
aliases: "bi",
code: `$author[Bot Info;$userAvatar[$clientID]]
$color[FF5100]
$addField[**Bot Created By:**;\`\`\`
Scythe#0640
\`\`\`]
$addField[**Server Count**;\`\`\`
$serverCount/100
\`\`\`]
$addField[**UpTime**;\`\`\`
$uptime
\`\`\`]
$addField[**Ping**;\`\`\`
BotPing: $ping
Ram Usage: $round[$ram] mb
\`\`\`;yes]
$addField[**Want To Invite Me?**;[Click Here\\](https://discord.com/api/oauth2/authorize?client_id=802611167221907527&permissions=604892353&redirect_uri=https%3A%2F%2Fwww.discord.gg%2FuDDNZgqBxS&response_type=code&scope=guilds.join%20bot%20applications.commands)`
})