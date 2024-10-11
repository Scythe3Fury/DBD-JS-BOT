module.exports = ({
name: "wanted",
code: `$argsCheck[>1;Please Mention Someone To Wanted!]
$image[https://api.xzusfin.repl.co/wanted?image=$userAvatar[$mentioned[1]]&style=3]`
})