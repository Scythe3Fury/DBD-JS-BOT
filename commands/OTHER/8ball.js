module.exports = ({
name: "8ball",
code: `$argsCheck[>1; Be sure to write something to ask the 8-Ball!]
🎱$jsonRequest[https://no-api-key.com/api/v1/magic8ball;response]`
})