module.exports = ({
 name: 
 "balance",
 aliases: 
 ["bal","wallet"],
 code: 
`
$author[$username;$authorAvatar]
$addField[📊 Networth;$$sum[$getUserVar[Balance];$getUserVar[Bank]]]
$addField[🏦 Bank;$$getUserVar[Bank]]
$addField[💵 Cash;$$getUserVar[Balance]]
$footer[Checking Account Balance For $username]
$color[RANDOM]
`
});