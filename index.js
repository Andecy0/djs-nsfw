const fs = require("fs")
const ms = require("ms")
client.login("TOKEN")
var prefix = "PREFIX"
const Discord = require('discord.js');
const client = new Discord.Client()
const API = require('anime-images-api')
const images_api = new API() 

//help mune embed
const help = new Discord.MessageEmbed()
    .setTitle("Help Menu")
    .setColor("fff")
    .setDescription("Hello ", ${message.author.tag}, "! \n Here are some commands that might come in handy \n **hug**\n" + prefix + "hug \n **kiss**\n" + prefix + "kiss \n **Slap**\n" + prefix + "slap \n" + prefix + "slap \n **Punch** \n" + prefix + "punch \n **Wink** \n" + prefix + "wink \n **Pat** \n" + prefix + "pat \n **kill** \n" + prefix + "kill \n **cuddle** \n" + prefix + "cuddle \n **Wafiu** \n Out Of Using \n \n **NSFW Command** \n **Boobs**\n" + prefix + "boobs \n **Hentai** \n" + prefix + "hentai \n **Lesbian** \n" + prefix + "lesbian")
    .setFooter("Using by "${message.author.tag})

//Commands and response messages
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
    }+

    if (m.content.startsWith(prefix + 'cuddle')){
        images_api.sfw.cuddle().then(response => {
            m.channel.send(response.image)
        }) 
    }

    if (m.content.startsWith(prefix + 'wafiu')){
            m.channel.send("Out of use") 
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

    if (m.content==prefix + "help")
        m.channel.send(help)
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
