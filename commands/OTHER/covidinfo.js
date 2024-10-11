module.exports = ({
name: "covidinfo",
aliases: "ci",
code: `$color[$random[111111;999999]]
$description[Covid stats on $message]
$image[https://covid-img.herokuapp.com/country/$replaceText[$message; ;+;-1]]
$footer[COVID-19 STATUS]`
})