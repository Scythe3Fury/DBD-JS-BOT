module.exports = ({
name: "serverinfo",
aliases: "si",
code: `$title[$serverName[$guildID]]
$description[ 
**:crown:Owner**: 
<@$ownerID>
**🌍Region**: 
$serverRegion
**🔒Verification Level**: 
$serverVerificationLevel
**🎆Boosts**:
$serverBoostCount
**🤖Bots Count**:
$botCount
**:men_with_bunny_ears_partying:Members Count**: 
$membersCount[$guildID;all;no]
**😀Emojis Count**: 
$emojiCount
**:womans_hat:Server Emojis**: 
$serverEmojis] 
$color[RANDOM]`
})