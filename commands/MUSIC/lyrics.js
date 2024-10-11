module.exports = ({
name: "lyrics",
code: `$title[$songInfo[title]'s Lyrics.] 
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$songInfo[title]; ; %20;-1];lyrics;No Lyrics Found for this song.]]
$footer[Requested by $usertag[$authorID];$authorAvatar]
$suppressErrors[Failed finding lyrics with that song-name.]
$color[163ce4]
$image[$songinfo[thumbnail]]
$onlyIf[$voiceID!=;You can't use this command outside of a voice channel!]
$onlyIf[$queueLength>0;You don't have anything in the queue!]
$onlyIf[$message==;]
$suppressErrors[Lyrics Not Found in This Song]`
})