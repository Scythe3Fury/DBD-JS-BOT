module.exports = ({
    name: 
     "deposit",
    aliases: ["dep","save"],
    code: 
`
$setUserVar[Balance;$sub[$getUserVar[Balance];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]]]]
$setUserVar[Bank;$sum[$getUserVar[Bank];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]]]]

$author[$username;$authorAvatar]
$description[Successfully Deposited $$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]] Cash Into The Bank!]
$color[GREEN]

$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Balance]];false;$message[1]]]==true; {author:$username, Thats Not A Number!:$authorAvatar} {color:RED} ]
$onlyIf[$getUserVar[Balance]>0; {author:$username You Dont Have Cash!:$authorAvatar} {color:RED} ]
`
});