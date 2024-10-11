module.exports = ({
name: "ban",
code: `$ban[$findUser[$message[1]];By $userTag[$authorID] Reason: $sliceMessage[1];7]
$username[$findUser[$message[1]]] **Has Been Banned ✅**
$onlyBotPerms[ban;**⛔ I Don't Have A Ban Perms**]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ Please Give Me User ID Or Mention Someone**]
$onlyPerms[ban;**⛔ You Need A Ban Permission**]`
})