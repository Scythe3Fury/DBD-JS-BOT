module.exports = ({
    name: "buyhelicopter",
    Aliases: "buyheli",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];20000];$authorID]
    $setUserVar[helicopter;$sum[$getUserVar[helicopter;$authorID];1];$authorID]
    $setUserVar[XP;$sub[$getUserVar[XP;$authorID];350];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>=20000;Need $20,000 in your cash, try withrawing it first]
    $onlyIf[$getUserVar[XP;$authorID]>=350;You need 350 XP, in which will be deducted after purchase.]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[🚁 $username]
    $description[
    Nice! You bought a Helicopter for $20,000!
    **350xp has been deducted!**
    You can strip it for parts to scrap for more money and XP.
    ]
    $footer[Usage: $getServerVar[prefix]scrap-helicopter]`
    })