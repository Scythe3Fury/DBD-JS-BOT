module.exports = ({
name: "heist",
code: `$cooldown[5m;Please Wait Before You Heist Again Tnx **%time%**!]
$setUserVar[Balance;$sum[$getUserVar[Balance];$random[1000;10000]]]
$color[RANDOM]
$title[**HEIST**]
$description[$randomText[You And 5 Friends Pulled An EPIC Heist On An International Bank;You And 3 Friends Robbed The First National Bank Of Canada;You And 4 Friends Rob A big International Bank In Philippines, Trip An Alarm] And Make Off With $$random[1000;10000]]`
})