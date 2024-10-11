module.exports = ({
name:"work",
code: `$author[$username;$authorAvatar]
$description[You Worked As A $randomText[Chef;Janitor;Receptionist;Waiter;Bathroom Attendant;The DJ;Homeless Beggar;Taxi Driver;Bus Driver] And Earned $$random[30;$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1084972];false;320]] In Cash!]
$color[ORANGE]
$setUserVar[Balance;$sum[$getUserVar[Balance];$random[30;$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1084972];false;320]]]]
$cooldown[$replaceText[$replaceText[$checkCondition[$authorID==501401419367055360];true;1s];false;2m];{description:Your Tired And You Have To Wait %time% Before Working Again!} {color:RED}]
`
});