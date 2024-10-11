module.exports = ({
    name: "buylucky",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];250];$authorID]
    $setUserVar[lucky;$sum[$getUserVar[lucky;$authorID];1];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>249;Need $250 in your cash, try withrawing it first.]
    $thumbnail[$userAvatar[$authorID]]
    $color[RANDOM]
    $title[Lucky Chest]
    $description[You bought a lucky chest for $250!
    Open it and press your luck for a chance to get the $5,000 lucky pot! Goodluck!
    ]
    $footer[Usage: $getServerVar[prefix]open-lucky]`
    })