module.exports = ({
name: "warn",
code: `$argsCheck[>2;Please Type A Reason!]
$onlyPerms[manageserver;You Don’t Have Enough Perms!]
$title[If You Got Warning Pls Do Not Do It Again!]
$argsCheck[>1;Please mention user!]
$description[Warned: <@$mentioned[1]>

Warn by : $username

Reason : $noMentionMessage]
$color[ff0000]
$setUserVar[warn;$sum[$getServerVar[warn];1];$mentioned[1]]`
})