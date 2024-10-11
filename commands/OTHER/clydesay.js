module.exports = ({
name: "clydesay",
aliases: "cs",
code: `$argsCheck[>1;Please give a message!]
$image[https://ctk-api.herokuapp.com/clyde/$replaceText[$message; ;%20;-1]]`
})