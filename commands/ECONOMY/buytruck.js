module.exports = ({
    name: "buytruck",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];15000];$authorID]
    $setUserVar[truck;$sum[$getUserVar[truck;$authorID];1];$authorID]
    $setUserVar[XP;$sub[$getUserVar[XP;$authorID];300];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>=15000;Need $15,000 in your cash, try withrawing it first]
    $onlyIf[$getUserVar[XP;$authorID]>=300;You need 300 XP, in which will be deducted after purchase]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[🚚 $username]
    $description[
    Nice! You bought a Truck for $15,000!
    **300xp has been deducted!**
    You can strip it for parts to scrap for more money and XP.
    ]
    $footer[Usage: $getServerVar[prefix]scrap-truck]`
    })