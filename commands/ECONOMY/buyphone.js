module.exports = ({
    name: "buyphone",
    code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];500];$authorID]
    $setUserVar[smartphone;$sum[$getUserVar[smartphone;$authorID];1];$authorID]
    $onlyIf[$getUserVar[Balance;$authorID]>499;Need $500 in your cash, try withrawing it first]
    $thumbnail[$authorAvatar]
    $color[RANDOM]
    $title[📱 $username]
    $description[
    Nice! You bought a smartphone for $500!
    ]
    $footer[This item is used to commit a heist]`
    })