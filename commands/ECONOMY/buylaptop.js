module.exports = ({
name: "buylaptop",
code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$authorID];1000];$authorID]
$setUserVar[laptop;$sum[$getUserVar[laptop;$authorID];1];$authorID]
$onlyIf[$getUserVar[Balance;$authorID]>999;Need $1,000 in your cash, try withrawing it first.]
$thumbnail[$authorAvatar]
$color[RANDOM]
$title[💻 $username]
$description[
Nice! You bought a laptop for $1,000!
]
$footer[This item is used to commit a heist]`
})