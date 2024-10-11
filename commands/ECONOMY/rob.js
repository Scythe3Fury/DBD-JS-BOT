module.exports = ({
name: "rob",
code: `$setUserVar[Balance;$sub[$getUserVar[Balance;$mentioned[1]];$random[1;$getUserVar[Balance;$mentioned[1]]]];$mentioned[1]]
$setUserVar[Balance;$sum[$getUserVar[Balance];$random[1;$getUserVar[money;$mentioned[1]]]]]
$title[ROB]
$color[$random[000000;999999]]
$description[$username Robbed
$username[$mentioned[1]]
$randomText[At Gun Point;With A Knife;Abusive Words..;A Rock] And Got $random[1;$getUserVar[Balance;$mentioned[1]]]]
$cooldown[30s; You Need To Wait Atleast %time% Before Doing This Again!!]
$onlyIf[$getUserVar[Balance;$mentioned[1]]>99;That User Doesn't Have Enough Money!]
$onlyIf[$getUserVar[Balance]>99; You Need At Least $100 To Rob Someone!]
$onlyIf[$mentioned[1]!=;> Please Mention Someone To Rob!!]`
})