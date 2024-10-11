module.exports = ({
name: "purge",
code: `$author[Seconds Before Delete;https://cdn.discordapp.com/attachments/786594238439751735/798505464160583760/20210112_175456.gif]
$description[**Done**!! \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;messages\` **We Purged**;1];&$mentioned[1]&;**of last messages of**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
$clear[$message]
$color[RANDOM]
$cooldown[10s;<@$authorID> **You Need To Wait %time% To Use This Command Again**]
$footer[Purge By: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[**Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$noMentionMessage<=500; **You Can Eliminate 2-500 Messages Per Command**]
$onlyIf[$noMentionMessage>=2;**You Can Eliminate 2-500 Messages Per Command**]
$onlyIf[$noMentionMessage!=;** Add A Number To Delete The Messages**, **Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Choose The Number Of Messages To Delete! **Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$message[1]!=;**Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyBotPerms[managemessages;**I Don't Have \`MANAGE_MESSAGES\` Permissions To Use This Command**]
$onlyPerms[managemessages;**You Dont Have This Perm To Delete Messages:** __**Manage Messages**__]
$deleteIn[21s]`
})