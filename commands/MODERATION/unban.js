module.exports = ({
name: "unban",
code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$username[$message[1]] **Has Been Unbanned ✅**
$onlyBotPerms[ban;**⛔ I Don't Have A Ban Perms]
$argsCheck[>1;**⛔ Please Provide User ID To Unban**]
$onlyPerms[ban;**⛔ You Need A Ban Permission**]
$suppressErrors[**⛔ I Can't Find That User**]`
})