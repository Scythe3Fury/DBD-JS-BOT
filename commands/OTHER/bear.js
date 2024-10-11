module.exports = ({
name: "bear",
code: `$description[**$jsonRequest[https://no-api-key.com/api/v1/animals/bear;fact]**]
$image[$jsonRequest[https://no-api-key.com/api/v1/animals/bear;image]]`
})