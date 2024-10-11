module.exports = ({
    name: "buymansion",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];500000];$authorID]
    $setUserVar[mansion;$sum[$getUserVar[mansion;$authorID];1];$authorID]
    $setUserVar[XP;$sub[$getUserVar[XP;$authorID];750];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>=500000;Need $500,000 in your cash, try withrawing it first]
    $onlyIf[$getUserVar[XP;$authorID]>=750;You need 750 XP, in which will be deducted after purchase]
    $thumbnail[$userAvatar[$authorID]]
    $color[RANDOM]
    $title[🏰 $username]
    $description[
    Nice! You bought a Mansion for $500,000!
    **750 XP has been deducted!**
    Now you're just showing off and living it up lol! Try flipping the mansion to make a profit and earn more XP.
    ]
    $footer[Usage: $getServerVar[prefix]flip-mansion]`
    })