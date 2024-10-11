module.exports = ({
name: "stop",
code: `Stopped playing $songInfo[title]. $stopSong
$onlyIf[$voiceID!=;To stop music, please join a VC.]`
})