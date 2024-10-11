module.exports = ({
    name: "profile",
    code: `$onlyIf[$isBot[$mentioned[1;yes]]!=true;**⛔ Discord bots dont have profiles**]
    $thumbnail[$userAvatar[$mentioned[1;yes]]]
    $title[Economy profile]
    $color[RANDOM]
    $description[
    **__User/ID__**:
    <@$mentioned[1;yes]>
    $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]
    (\`$mentioned[1;yes]\`)
     
    **__Chests__**:
    **$getUserVar[DailyChest;$mentioned[1;yes]]** | Daily
    **$getUserVar[lucky;$mentioned[1;yes]]** | Lucky
    **$getUserVar[spiteful;$mentioned[1;yes]]** | Spiteful
     
    **__Flow__**:
    \`💵\` **$$numberSeparator[$getUserVar[Balance;$mentioned[1;yes]]]**
    \`🏦\` **$$numberSeparator[$getUserVar[Bank;$mentioned[1;yes]]]**
    \`📊\` **$$numberSeparator[$sum[$getUserVar[Balance;$mentioned[1;yes]];$getUserVar[Bank;$mentioned[1;yes]]]]**
    \`🗡\` **$numberSeparator[$getUserVar[XP;$mentioned[1;yes]]]**xp
     
    **__Assets__**:
    \`💼\` ($getUserVar[duffle;$mentioned[1;yes]]) Bags
    \`📺\` ($getUserVar[tv;$mentioned[1;yes]]) TVs
    \`📱\` ($getUserVar[smartphone;$mentioned[1;yes]]) Smartphones
    \`💻\` ($getUserVar[laptop;$mentioned[1;yes]]) Laptops
    \`🚗\` ($getUserVar[car;$mentioned[1;yes]]) Cars
    \`🚚\` ($getUserVar[truck;$mentioned[1;yes]]) Trucks
    \`🚁\` ($getUserVar[helicopter;$mentioned[1;yes]]) Helicopters
    \`🏫\` ($getUserVar[apartment;$mentioned[1;yes]]) Apartments
    \`🏡\` ($getUserVar[house;$mentioned[1;yes]]) Houses
    \`🏰\` ($getUserVar[mansion;$mentioned[1;yes]]) Mansions
    ]`
    })