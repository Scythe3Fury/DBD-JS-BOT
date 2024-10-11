module.exports = ({
    name: "resetwarn",
    code: `$onlyPerms[manageserver:You Don't Have Enough Perms!!]
    $argsCheck[>1;Please Mention Someone!!]
    $title[ALL WARNINGS HAS BEEN RESETED]
    $description[Removed All Warnings From <@!$mentioned[1]>!]
    $footer[MODERATION]
    $color[56FFE7]
    $setUserVar[warn;0;$mentioned[1]]`
    })