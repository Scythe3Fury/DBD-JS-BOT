module.exports = ({
name: "ship",
code: `$onlyIf[$mentioned[1]!=;Please Mention Someone]
$argsCheck[>2;You Need A 2 People To Ship!]
$title[$username[$mentioned[1]] AND $username[$mentioned[2]]]
$description[$randomText[
$random[0;10]% ⚪⚫⚫⚫⚫⚫⚫⚫⚫⚫ 😭;$random[11;20]% ⚪⚪⚫⚫⚫⚫⚫⚫⚫⚫ 😢;$random[21;30]% ⚪⚪⚪⚫⚫⚫⚫⚫⚫⚫ 😕;$random[31;40]% ⚪⚪⚪⚪⚫⚫⚫⚫⚫⚫ 🙄;$random[41;50]% ⚪⚪⚪⚪⚪⚫⚫⚫⚫⚫ 😊;
$random[51;60]% ⚪⚪⚪⚪⚪⚪⚫⚫⚫⚫ 🥰;
$random[61;70]% ⚪⚪⚪⚪⚪⚪⚪⚫⚫⚫ 😍;
$random[71;80]% ⚪⚪⚪⚪⚪⚪⚪⚪⚫⚫ 🤩;
$random[81;90]% ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚫ 💕;$random[91;100]% ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ 💗]]
$color[RANDOM]
$cooldown[30s;Please Wait **%time%** So You Will Have 1% On Matching Up.]`
})