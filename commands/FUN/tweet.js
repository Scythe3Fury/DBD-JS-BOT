module.exports = ({
name: "tweet",
aliases: "twt",
code: `$deletecommand
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message; ;+;-1]]`
})