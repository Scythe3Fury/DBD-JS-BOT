module.exports = ({
name: "kick",
code: `$kick[$findUser[$message[1]]]
 $title[KICKED]
 $description[
 Successfully Kicked The User
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[Kicked By $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**❌ I Can't Kick My Self**]
$onlyIf[$findUser[$message[1]]!=$authorID;**❌ You Can't Kick Yourself**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ You Can't Kick Someone With Higher Or The Same Roles As You**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**❌ I Can't Kick Someone With Higher Or The Same Roles As Me**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**❌ Couldn't Find A Member With This ID/Name/Mention In The Server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**❌ I Can't Modify The Server Owner**]
$onlyIf[$message[1]!=;**❌ Please Mention Someone To Kick**]
$onlyBotPerms[kick;**❌ The Bot Doesn't Have Enough Permissions**]
$onlyPerms[kick;**❌ You Don't Have Enough Permission**]`
})