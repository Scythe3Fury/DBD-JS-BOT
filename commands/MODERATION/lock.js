module.exports = ({
 name: "lock",
 code: `$onlyPerms[manageserver:error msg]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$onlyPerms[manageserver;You don't have permission to use this]
$title[:lock:CHANNEL LOCKED:lock:]
$description[$username has locked this channel]
$color[ff0000]
 `
})