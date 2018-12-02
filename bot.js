const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Login Successful');
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`ON ${client.guilds.size} Servers ' Code By : noyy ' `);
});


client.on("message", msg => {
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
let args1 = args.join(" ")
var prefix = "#"//البرفكس
if(msg.content.startsWith(prefix + "sar7")) { 
if(!men) msg.reply("منشن عضو");
  if(!args) msg.reply("اكتب الرسالة المطلوبة");
   if (msg.author.bot) return msg.reply("لا يمكنك ان ترسل رسالة لبوت");
msg.channel.send(`تم الارساله الى ${men}`).then(msgS => {
msgS.delete();
let embed = new Discord.RichEmbed()
               .setColor('#000000')
                .setColor('#36393e')
.setDescription(`**صراحة بوت ارسل لك رساله جديده من شخص مجهول**`)
.addField(`وصلت رسالة جديدة يـا `,`${men}`, true)
.addField(`\`\`\`الرسالة : ${args1}\`\`\``,`󠀀󠀀`)
.addField("السيرفر المرسل منه الرساله", `**${msg.guild.name}**`,true)
 .setTimestamp()
  .setFooter(msg.guild.name, msg.guild.iconURL, true)
.setThumbnail(msg.guild.iconURL)
men.sendMessage(embed);
})

}                                              
});


client.on("message", msg => {
let args = msg.content.split(" ").slice(2);
let men = msg.mentions.users.first();
let args1 = args.join(" ")
if(msg.content === `#sar7 ${men} ${args}`) {
msg.delete();
}
});


const adminprefix = "#";
const devs = ['452191687159185409'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setG')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setN')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم الحساب إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setA')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});





client.login("NDgyODc3NjU5ODg2NjQ5MzY3.DuTf7g.DzscY59bybAoqt8q7CQ42VFG5ec");