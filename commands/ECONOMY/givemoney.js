	
module.exports = ({
    name: "givemoney", 
    code: `$setGlobalUserVar[balance;$sum[$getGlobalUserVar[balance;$mentioned[1;yes]];$noMentionMessage];$mentioned[1;yes]]
    $setGlobalUserVar[balance;$sub[$getGlobalUserVar[balance;$authorID];$noMentionMessage];$authorID]
    $color[RANDOM]
    $thumbnail[$userAvatar[$authorID]]
    $title[$username gave $username[$mentioned[1]] money]
    $description[
    $username gave $username[$mentioned[1]] **$noMentionMessage** :dollar:!
    $username[$mentioned[1]] is now holding **$sum[$getGlobalUserVar[balance;$mentioned[1]];$noMentionMessage]** :dollar: in his cash!
    ]
    $onlyIf[$noMentionMessage<=$getGlobalUserVar[balance;$authorID];**⛔ You don't have enough in your cash**]
    $onlyIf[$mentioned[1]!=$authorID;**⛔ You can't give money to yourself**]
    $onlyIf[$mentioned[1]!=;**⛔ Mention someone to give money to and then the amount, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
    $onlyIf[$isBot[$mentioned[1]]!=true;**⛔ You can't give money to a Discord bot**]
    $onlyIf[$isNumber[$noMentionMessage]==true;**⛔ That is not a number, try using this format**: \`$getServerVar[prefix]givemoney <@user> <amount>\`]
    $suppressErrors[Usage: **$getServerVar[prefix]givemoney <@user> <amount>**]`
    })