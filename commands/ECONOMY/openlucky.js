module.exports = ({
    name: "openlucky",
    code: `
    $setUserVar[Balance;$sum[$getUserVar[Balance;$authorID];$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]];$authorID]
    $setUserVar[lucky;$sub[$getUserVar[lucky;$authorID];1];$authorID]
    $setUserVar[XP;$sum[$getUserVar[XP;$authorID];$random[3;7]];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[RANDOM]
    $title[Lucky Chest]
    $description[You opened a lucky Chest!
    ]
    $footer[💵 +$$numberSeparator[$randomText[300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;300;500;1000;5000]] | 🗡 +$random[3;7]xp]
    $onlyIf[$getUserVar[lucky;$authorID]>=1;You cant open a chest you don't have! Try purchasing one from the shop.]
    $globalCooldown[3m;To prevent exploitations, a cooldown is in effect for opening all purchasable chests! Try again in \`%time%\`]`
    })