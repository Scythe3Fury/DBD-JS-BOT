module.exports = ({
name: "beg",
code: `$title[**Begging**]
$color[RANDOM]
$footer[Requested by $username]
$addTimestamp
$setUserVar[Balance;$sum[$getUserVar[Balance];$random[50;500]]]
$description[You Begged $randomText[on the streets;in the city;at a house;at a park] and $randomText[Jeff Bezos;Cool Stickman;John Cena;Some Guy felt bad for you and;an idiot] Gave You $$random[50;500]]
$cooldown[30s;Please Wait A Cooldown **%time%**!]`
})