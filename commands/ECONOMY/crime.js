module.exports = ({
name: "crime",
code: `$title[**You Committed A Crime!**]
$color[f49842]
$description[You $randomText[Hacked Epic Games;Robbed MC Donalds;Robbed A Person;Hacked EA;Cracked Game;Hacked Donations' Site;Hacked Roblox;Made Exploit For Roblox;Hacked Walmart] And Got $$random[100;1000]]
$setUserVar[Balance;$sum[$getUserVar[Balance];$random[100;1000]]]
$cooldown[1m;Please Wait A Cooldown **%time%**!]`
})