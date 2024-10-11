module.exports = ({
    name: "openspiteful",
    Aliases: "open-spiteful",
    code: `$setUserVar[Balance;$sum[$getUserVar[Balance;$authorID];$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]];$authorID]
    $setUserVar[spiteful;$sub[$getUserVar[spiteful;$authorID];1];$authorID]
    $setUserVar[XP;$sum[$getUserVar[XP;$authorID];$random[10;20]];$authorID]
    $thumbnail[$userAvatar[$authorID]]
    $color[RANDOM]
    $title[Spiteful Chest]
    $description[You opened a spiteful Chest!
    ]
    $footer[💵 +$$numberSeparator[$randomText[1;850;860;900;950;1000;1000;1000;1100;1150;1175;1200;1250;1500;5000;10000]] | 🗡 +$random[10;20]xp]
    $onlyIf[$getUserVar[spiteful;$authorID]>=1;You cant open a chest you don't have! Try purchasing one from the shop.]
    $globalCooldown[20m;To prevent exploitations, a cooldown is in effect for opening all purchasable chests! Try again in \`%time%\`]`
    })