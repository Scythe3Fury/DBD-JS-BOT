module.exports = ({
 name: "unlock",
 code: `$onlyPerms[manageserver:error msg]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$onlyPerms[manageserver;You don't have permission to use this]$title[:unlock:CHANNEL UNLOCKED:unlock:]
$description[$username has unlocked this channel]
$color[ff0000]
 `
})