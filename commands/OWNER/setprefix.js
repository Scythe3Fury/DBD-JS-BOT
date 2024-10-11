module.exports = ({
name: "setprefix",
code: `$setServerVar[prefix;$message]
Prefix set to \`$message\`
$onlyPerms[admin;You need admin permission for this command]
`})
