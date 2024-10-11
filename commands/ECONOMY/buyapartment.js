module.exports = ({
    name: "buyapartment",
    Aliases: "buyapart",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];50000];$authorID]
    $setUserVar[apartment;$sum[$getUserVar[apartment;$authorID];1];$authorID]
    $setUserVar[XP;$sub[$getUserVar[XP;$authorID];400];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>=50000;Need $50,000 in your cash, try withrawing it first.]
    $onlyIf[$getUserVar[XP;$authorID]>=400;You need 400 XP, in which will be deducted after purchase.]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[🏫 $username]
    $description[
    Nice! Stepping up! You bought an Apartment for $50,000!
    **400xp has been deducted!**
    The real estate business is in high demand and you can make a difference! Try flipping the apartment to make a profit and earn more XP.
    ]
    $footer[Usage: $getServerVar[prefix]flip-apartment]`
    })