module.exports = ({
    name: "buyspiteful",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];1000];$authorID]
    $setUserVar[spiteful;$sum[$getUserVar[spiteful;$authorID];1];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[RANDOM]
    $title[Spiteful Chest]
    $description[You bought a Spiteful chest for $1,000!
    **Open it and see what you find!
    Just be warned! It could be spiteful, Goodluck!**
    ]
    $footer[Usage: $getServerVar[prefix]open-spiteful]
    $onlyIf[$getUserVar[Balance;$authorID]>999;Need $1,000 in your cash, try withrawing it first]`
    })