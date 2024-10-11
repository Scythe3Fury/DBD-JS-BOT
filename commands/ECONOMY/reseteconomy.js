module.exports = ({
name: "reseteconomy",
aliases: "reseteco",
code: `$onlyForIDs[$botOwnerID;error]
$resetUserVar[Balance]
$resetUserVar[Bank]
$title[RESET ECONOMY]
$description[Economy Has Been Reset Successfully]
$footer[RESETED ECONOMY]
$color[RANDOM]`
})