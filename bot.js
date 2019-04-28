const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 



const prefix = '$'; 
const adminprefix = "1"; 

const gamestats = [`WELCOME TO SYG`,`WELCOME SYG SERVER`]
var index = 0
var timer = 10 // 
client.on("ready", ()=> {
        setInterval(function(){
        client.user.setGame(`${gamestats[index]}`,'https://www.twitch.tv/syrian__gaming') 
        index++
            if( index >= gamestats.length) index = 0 ;
        }, timer*1000);

});

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`** SYG ÇåáÇ æÓåáÇ Ýíß Ýí ÓíÑÝÑ 
		 ------------------------------
$invites 
| áãÚÑÝÉ ÇáÇÔÎÇÕ ÇáÐí ÏÚæÊåã		 **`)
   message.author.sendEmbed(embed)
   
   }
   });

client.on('message', message => {
  
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» ÇáÓíÑÝÑ :', `${message.guild.name}`)
                .addField('» ÇáãÑÓá : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » ÇáÑÓÇáÉ : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('?? | name :  ',`${member}`)
        .addField('?? | äæÑÊ ÇáÓíÑÝÑ íÇ ÞáÈí' , `Welcome to the server, ${member}`)
        .addField('?? | user :', "**[" + `${member.id}` + "]**" )
                .addField('?| ÇäÊ ÇáÚÖæ ÑÞã',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' ÇáÜÓíÑÝÑ', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
	
	client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
 
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: ÚÏÏ ÇáÇÔÎÇÕ ÇáÐí ÏÚæÊåã åæ**`)

});
}}); 

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms ?? ")
                        .addField('**WebSocket:**',api + " ms ?? ")
         message.channel.send({embed:embed});
                        }
                    });


 
 
 
 

client.login(process.env.BOT_TOKEN);
