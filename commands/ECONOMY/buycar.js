module.exports = ({
    name: "buycar", 
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];10000];$authorID]
    $setUserVar[car;$sum[$getUserVar[car;$authorID];1];$authorID]
    $setUserVar[XP;$sub[$getUserVar[XP;$authorID];250];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>=10000;Need $10,000 in your cash, try withrawing it first.]
    $onlyIf[$getUserVar[XP;$authorID]>=250;You need 250 XP, in which will be deducted after purchase.]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[🚗 $username]
    $description[
    Nice! You bought a Car for $10,000!
    **250xp has been deducted!**
    You can strip it for parts to scrap for more money and XP.
    ]
    $footer[Usage: $getServerVar[prefix]scrap-car]`
    })