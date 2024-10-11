module.exports = ({
    name: "buyhouse",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];100000];$authorID]
    $setUserVar[house;$sum[$getUserVar[house;$authorID];1];$authorID]
    $setUserVar[XP;$sub[$getUserVar[XP;$authorID];500];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>=100000;Need $100,000 in your cash, try withrawing it first.]
    $onlyIf[$getUserVar[XP;$authorID]>=500;You need 500 XP, in which will be deducted after purchase.]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[🏡 $username]
    $description[
    Nice! Stepping up! You bought a House for $100,000!
    **500 XP has been deducted!**
    Coming up in the world I see! The real estate business is in high demand and you can make a difference! Try flipping the house to make a profit and earn more XP.
    ]
    $footer[Usage: $getServerVar[prefix]flip-house]`
    })