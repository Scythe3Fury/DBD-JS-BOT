module.exports = ({
name: "checkwarn",
code: `$onlyPerms[manageserver:You Don't Have Enough Perms!!]
$argsCheck[>1;Please mention someone!]
$title[Warning check]
$description[<@$mentioned[1]> Has $getUserVar[warn;$mentioned[1]] warnings]
$color[ff00ff]`
})