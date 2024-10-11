module.exports = ({
    name: "buybag",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];250];$authorID]
    $setUserVar[duffle;$sum[$getUserVar[duffle;$authorID];1];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[RANDOM]
    $title[💼 $username]
    $description[
    Nice! You bought a dufflebag for $250!
    ]
    $footer[This item is used to commit a heist]
    $onlyIf[$getUserVar[Balance;$authorID]>249;Need $250 in your cash, try withdrawing it first]`
    })