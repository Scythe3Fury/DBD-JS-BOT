module.exports = ({
name: "embed",
code: `$title[$splitText[1]]
$description[$splitText[2]]
$footer[$splitText[3]]
$textSplit[$message;/]
$argsCheck[>1;Please use \`$getServerVar[prefix]embed title/description/footer\`
$onlyPerms[admin;You need admin permission for this command]
$deleteCommand
$color[GREEN]
$cooldown[10s;Hey dude, wait %time%]`
})
