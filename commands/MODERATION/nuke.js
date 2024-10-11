module.exports = ({
name: "nuke",
code: `$djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' Has Nuked This Channel!  https://i.gifer.com/NCSP.gif')

 })
 .catch(() => d.message.channel.send('I dont have enough perms'))
]`
})