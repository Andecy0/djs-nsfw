const Nsfwbot = require("aoi.js")
const fs = require("fs")
const ms = require("ms")
const Nsfw = new Nsfwbot.Bot({
    token:"TOKEN",
    prefix:"PREFIX"
})
var prefix = "PREFIX"
const Discord = require('discord.js');
const client = new Discord.Client()
const API = require('anime-images-api')
const images_api = new API() 

client.on('message', function(m){
    if (m.content.startsWith(prefix + 'hug')){
        images_api.sfw.hug().then(response => {
            m.channel.send(response.image)
        })    
    }

    if (m.content.startsWith(prefix + 'kiss')){
        images_api.sfw.kiss().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'slap')){
        images_api.sfw.slap().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'punch')){
        images_api.sfw.punch().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'wink')){
        images_api.sfw.wink().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'pat')){
        images_api.sfw.pat().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'kill')){
        images_api.sfw.kill().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'cuddle')){
        images_api.sfw.cuddle().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'wafiu')){
        images_api.sfw.wafiu().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'hentai')){
        images_api.nsfw.hentai().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'boobs')){
        images_api.nsfw.boobs().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'lesbian')){
        images_api.nsfw.lesbian().then(response => {
            m.channel.send(response.image)
        }) 
    }
})

var express = require('express'); 

var app = express(); 

var path = require('path'); 

var PORT = 3000; 

app.get('/', function(req, res){ 

    var options = { 

        root: path.join(__dirname) //root file

    }; 

      

    var fileName = 'index.ejs'; //Web site file

    res.sendFile(fileName, options, function (err) { 

        if (err) { 

            next(err); 

        } else { 

            console.log(fileName, " File entered!"); //login message

        } 

    }); 
}); 

  app.listen(PORT, function(err){ 

    if (err) console.log(err); 

    console.log("Server listening on PORT", PORT); 
}); 

var reader = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./commands/${file}`)
    bot.command({
        name: command.name,
        aliases: command.aliases,
        bkz: command.bkz,
        code: command.code
    })
}

bot.command({
    name:"eval",
    code:`
    $eval[$message]
    $onlyForIDs[$botOwnerID;]
    `
})

bot.status({
    text: "I'm a NSFW bot!",
    type: "WATCHING",
    status: "dnd",
    time: 12
  })

