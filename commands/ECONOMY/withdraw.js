module.exports = ({
    name: 
     "withdraw",
    aliases: ["with","spend"],
    code: 
`
$setUserVar[Bank;$sub[$getUserVar[Bank];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]]]]
$setUserVar[Balance;$sum[$getUserVar[Balance];$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]]]]

$author[$username;$authorAvatar]
$description[Successfully Withdrew $$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]] Cash From The Bank!]
$color[GREEN]

$onlyIf[$isNumber[$replaceText[$replaceText[$checkCondition[$message==all];true;$getUserVar[Bank]];false;$message[1]]]==true; {author:$username, Thats Not A Number!:$authorAvatar} {color:RED} ]
$onlyIf[$getUserVar[Bank]>0; {author:$username You Dont Have Cash!:$authorAvatar} {color:RED} ]
`
});