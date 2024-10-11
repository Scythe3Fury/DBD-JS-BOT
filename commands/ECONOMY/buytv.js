module.exports = ({
    name: "buytv",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];400];$authorID]
    $setUserVar[tv;$sum[$getUserVar[tv;$authorID];1];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>399;Need $400 in your cash, try withrawing first]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[📺 $username]
    $description[
    Nice! You bought a TV for $400!
    ]
    $footer[This item is used to commit a heist]`
    })
    