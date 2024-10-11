module.exports = ({
name: "whois",
alises: ["userinfo,ui"],
code: `$argsCheck[>1;Please Mention Someone]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$author[ID • $mentioned[1;yes];$userAvatar[$mentioned[1;yes]]]
$title[Information: ***$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]***]
$description[$addField[Roles:;$userRoles[$mentioned[1;yes]];yes]
$addField[Highiest Role:;<@&$highestRole[$mentioned[1;yes]]>;yes]
$addField[Nickname:;$nickname[$mentioned[1;yes]];yes]
$addField[Registered:;$creationDate[$mentioned[1;yes]]]
$addField[Platform:;$platform[$mentioned[1;yes]];yes]
$addField[Exercise:;$replaceText[$replaceText[$replaceText[$checkCondition[$activity[$mentioned[1;yes]]==]$checkCondition[$activity[$mentioned[1;yes]]==Custom Status]$checkCondition[$activity[$mentioned[1;yes]]!=Custom Status];truefalsetrue;Nada.];falsetruefalse;Estado personalizado.];falsefalsetrue;$activity[$mentioned[1;yes]]];yes]
$addField[User:;$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]];yes]]
$footer[Server: $serverName[$guildID]]
$addTimestamp
$color[BLUE]`
})