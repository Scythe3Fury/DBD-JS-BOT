module.exports = ({
name: "avatar",
code: `$color[BLUE]
 $title[$username[$findUser[$message]]'s Avatar]
 $description[**Link as** 
 \n[png\\]($replaceText[$userAvatar[$findUser[$message]];webp;png]) | [webp\\]($replaceText[$userAvatar[$findUser[$message]];png;webp]) | [jpeg\\]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]
 $image[$userAvatar[$findUser[$message]]]`
})