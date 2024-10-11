module.exports = ({

 name: "play",

 aliases: ["p"],

 code: `

$color[RANDOM]

$thumbnail[$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;thumbnail]]

$title[**__Song Added to Queue__**]

$description[**Succesfully added** \`($message)\` to the **Queue**]

$addField[⏱️| Duration:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration]__**]

$addField[📀 | Views:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;views]__**]

$addField[☕ | Author:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploader_name]__**]

$addField[🕙 Uploaded:;**__$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;uploaded]__**]

$playSong[$message;{title:Error}{description:There was an error while making the request.}{color:RED}]

$onlyIf[$message!=;{title:Error}{description:I need Song name to find a \`song\`...}]

$onlyIf[$voiceID!=;You are Not in VC,Connect and Try Again]

$cooldown[3s;Wait **%time** to use this command again]

`

});
