const { Client, Intents, MessageEmbed } = require("discord.js"); //back, no under discord 
const Discord = require("discord.js"); 
const prefix = '~'; 
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
    ] 
})
const talkedRecently = new Set(); 
client.login('OTc4MjUxNTAzNTMxODUxNzg2.Gwq-Zp.4_yhhWTtUmS30HAPl5DJU_TZ8yKIwRYGgJKnSM') //okay lemme do my thing now, just sit back and watch
client.on('ready', () => { 
    console.log(`Logged in as ${client.user.tag}!`);
    timer();
    function activity() {
        client.user?.setActivity('~help', ({ type: 'PLAYING' }))
    }
    function activity2() {
        client.user?.setActivity('halp me', ({ type: 'PLAYING' }))
    }
    function timer() {   //1000 = 1 second and 1000 is 1000 milliseconds
        setTimeout(activity, 9000)
        setTimeout(activity2, 5000)
        setTimeout(timer, 6000)
    }
    client.user?.setActivity('~help me~', ({ type: 'PLAYING' }))
});

hru1 = 'https://media.discordapp.net/attachments/930547288147906612/979477884169240596/unknown.png'
hru2 = 'https://media.discordapp.net/attachments/930547288147906612/979478995231985664/unknown.png'
hru3 = 'https://cdn.discordapp.com/attachments/930547288147906612/979479171619237978/unknown.png'
hru4 = 'https://media.discordapp.net/attachments/930547288147906612/978402454175629392/fringil_vibin.png'
bog1 = 'https://images-ext-2.discordapp.net/external/Oa_Ks4JAzS28yeH00PckYBBiXewYS2DKZ0gvtlnIdKs/https/media.tenor.com/5getaVBYT-sAAAPo/david-bowie-labyrinth.mp4'
bog2 = 'https://images-ext-1.discordapp.net/external/DA00CKausRY1-C-QU4yoaDZpjaYMGFLSa0pJSxof_dA/https/media.tenor.com/wzOByBmutDQAAAPo/labyrinth-david.mp4'
bog3 = 'https://images-ext-2.discordapp.net/external/sGQ5CJPshl_cu3uZsaElkzenGnDSZcZweR6052LIomA/https/media.tenor.com/aYqYZnSzU-0AAAPo/jareth-labyrinth.mp4'
bog4 = 'https://images-ext-2.discordapp.net/external/Wta2bVAb92r4y4p4f-BdVZ9dRrNZbcnkZgdf60nKBfg/https/media.tenor.com/R4eeG-8Bn3sAAAPo/labyrinth-david.mp4'
bog5 = 'https://images-ext-2.discordapp.net/external/CnMYA3AZxn0gPATXIa1zrhvkekOJigDDIBe-HGh1UYY/https/media.tenor.com/7MTqekH00AIAAAPo/im-out-nope.mp4'
bog6 = 'https://images-ext-2.discordapp.net/external/NzTWS1PJj44qw3s3gRvTzJKntZsf1U4pZiryIfTBPpg/https/media.tenor.com/hY_Tut3Ox3MAAAPo/labrynth-crystalball.mp4'
bog7 = 'https://images-ext-1.discordapp.net/external/_25vUrn2j5xwmno-DVvDvKSel_CIG6qAkKDR7Eap4eM/https/media.tenor.com/4rOa2qQLZN4AAAPo/the-labyrinth-david-bowie.mp4'


client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift()?.toLowerCase();

    if (command === 'ping') {
        message.reply('pong!');
    } else if (command === 'cookie') {
        message.react('🍪') //cookie
        message.reply('https://media.discordapp.net/attachments/930547288147906612/978402037794471976/fringil_cookie.png?width=747&height=747')
        message.reply('hab cookie')
    } else if (command === 'door') {
        message.reply('door')
    } else if (command === 'sus') {
        message.reply(':sus:')
            .then(message => {
                setTimeout(() => message.delete(), 5000)
            })
    } else if (command === 'bongocat') {
        message.reply('https://media.discordapp.net/attachments/944996591222292521/978401443860078632/unknown.png')
    } else if (command === 'ae') {
        message.reply('aaaaaaaaa')
    } else if (command === 'randomwiki') {
        message.reply('https://phoenixsmp.fandom.com/wiki/Special:Random')
    } else if (command === 'wiki') {
        message.reply(`https://phoenixsmp.fandom.com/wiki/${args[0]}`)
    } else if (command === 'stafflist') {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const testEmbed = new MessageEmbed()
            .setTitle("staff-list")
            .setColor(randomColor)
            .setDescription("<@412012978976718873> ~ owowner ~ malacus rep ~ snails\n<@429448403299336195> co-owowner ~ mora rep ~ rock\n<@738847247562702858> bigurm ~ murex\n<@803872174233354250> bigurm/fluffy alt ~ clanless ~ void\n<@265994203987705858> staffling ~ also god ~ clanless ~ cake\n<@670434404044242965> staffling ~ mora ~ no like mora\n<@406489547594137600> bigurm ~ mora ~ idk who this is\n<@597920353867530279> biggerurm ~ unknown?? ~ chaos man\n<@596268173364297728> staffling ~ mora ~ tea lover\n<@833167914705616917> staffling ~ malacus ~ mushroom\n<@638689218532737024> staffling ~ murex rep ~ french horn man\n<@425757525556854804> staffling ~ mora ~ lego building master ")
            .setTimestamp()
            .setFooter({ text: 'staffers are scary' });
        message.channel.send({ embeds: [testEmbed] }) // hola
    } else if (command === 'bump') {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const testEmbed = new MessageEmbed()
            .setTitle("disboard clones")
            .setColor(randomColor)
            .setDescription("mcpedl ~ https://mcpedl.com/servers/phoenix/\ndisboard.org ~ https://disboard.org/server/739320412252405811\nfandom wiki ~ https://phoenixsmp.fandom.com/wiki\nplanet minecraft ~ https://www.planetminecraft.com/bedrock-server/phoenixsmp/\ntops.gg ~ https://top.gg/servers/739320412252405811\ndiscordservers.com ~ https://discordservers.com/server/739320412252405811/bump\ndiscords.com ~ https://discords.com/u/dashboard/servers/welcometohell\ndiscordbotlist ~ https://discordbotlist.com/servers/phoenix\ndiscord.st ~ https://discord.st/server/suffering/\ndisforge ~ https://disforge.com/server/63035-phoenix\ndiscord.me ~ https://discord.me/imbeingheldhostage\nminecrafttop.com ~ https://minecrafttop.com/server/phoenix-21450d\ndiscordlist.me ~ https://discordlist.me/servers/739320412252405811\nminecraftpocket-servers ~ https://minecraftpocket-servers.com/server/118088/\nminecraft.buzz ~ https://minecraft.buzz/vote/5108")
            .setTimestamp()
            .setFooter({ text: 'i myself am a clone but better :)' });
        message.channel.send({ embeds: [testEmbed] })
    } else if (command === 'ip') {
        message.reply('ip: phoenix.shockbyte.space\nport: 25579\n\nif this doesnt work, try\nip: 51.81.126.251\nport: 25579')
    } else if (command === 'format') {
        message.reply('hola, please follow our whitelist format!\n\n(required) IGN:\n(required) why you want to join:\n(required) which clan you want to join: (murex, mora, or malacus[more info in <#933519277183610900>])\n(optional) Where you found us:\n(optional) Which device you play on')
    } else if (command === 'help') {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const testEmbed = new MessageEmbed()
            .setTitle("you asked for help")
            .setColor(randomColor)
            .setDescription("~help = you are here\n~aboutme = about me!\n~stafflist = get a list of people with sus perms\n~ip = ip to connect to phoenix\n~lorefacts = daily lore facts of the server (written by fluffy)\n~rps = play rps\n~wiki (page) = go to the phoenix wiki!\n~randomwiki = visit a random wiki page\n~ping = the ping of the bot to discord servers, also annoying ping\n~format = whitelist application format\n~cookie = hab cookie\n~bump = list of important linkies\n~bongocat = play the bongo with me\n~door = door\n~sus = sus\n~ae = ae")
            .setTimestamp()
            .setFooter({ text: 'imagine asking for help' });
        message.channel.send({ embeds: [testEmbed] })
    } else if (command === 'rps') {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`how play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`only these responses are accepted or i wont play: \`${acceptedReplies.join(', ')}\``);

        console.log('Bot Result:', result);
        if (result === choice) return message.reply("it do be a tie tho");

        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('you lost :> i chose ' + result);
                else return message.reply('good job you won, i chose ' + result);
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('you lost :> i chose ' + result);
                else return message.reply('good job you won, i chose ' + result);
            }
            case 'scissors': {
                if (result === 'rock') return message.reply('you lost :> i chose ' + result);
                else return message.reply('good job you won, i chose ' + result);
            }
            default: {
                return message.channel.send(`only these responses are accepted or i wont play: \`${acceptedReplies.join(', ')}\``);
            }
        }
    } else if (command === 'hru') {
        const messages = [hru1, hru2, hru3, hru4]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.reply(randomMessage)
    } else if (command === 'aboutme') {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const testEmbed = new MessageEmbed()
            .setTitle("about me")
            .setColor(randomColor)
            .setDescription("**full name** ~ frin'gil\n**age** ~ big\n**gender** ~ he/him\n**species** ~ birb\n**what i enjoy** ~ drinkin kool aid, memes, moosic\n**fringil version** ~ also big number\n**hobbies** ~ i like rocks\n**secret crush** ~ ||ur mom||\n**wants** ~ food and for an end to mee6\n**hates** ~ mee6\n**greatest fear** ~ being alone :(\n**creator/maker** ~ my beautiful, smart, artistic, big brain, intelligent, loving, caring, thoughful, and amazing creator is fluffy ~~moosey~~")
            .setThumbnail('https://media.discordapp.net/attachments/944996591222292521/979957446091104296/fringil_paport.png?width=747&height=747')
            .setTimestamp() 
            .setFooter({ text: 'yum cookie' });
        message.channel.send({ embeds: [testEmbed] })
    } else if (command === 'water') {
        var apple = 'apple'
        if (talkedRecently.has(apple)) {
            message.channel.send(`wait 420 minutes ${message.author.username}`);
        }
        else {
            var waterRole = '966347043205443621' 
            if (!(message.member.roles.cache.some(role => role.id === waterRole))) return message.reply("imagine not having the water role :>")
            if ((message.author.id == '523863890606424104')) return message.reply(`too bad u cant use this ${message.author.username}`)
            message.channel.send(`<@${waterRole}>`)
            talkedRecently.add(apple); 
            setTimeout(() => {
                talkedRecently.delete(apple);
            }, 25200000); 
        } 
    } else if (command === 'lore') {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const testEmbed = new MessageEmbed()
            .setTitle("phoenix lore ~ basic lore")
            .setColor(randomColor)
        .setDescription("**Clans**\n*Malacus Clan* ~ Clan of Destruction, represents death and decay, representative object is a mushroom.\n*Current Malacus Lore* ~ Malacus representative is <@412012978976718873> ~ Largest subclan is Imperium ~ Essentially won the recent Clan War\n\n*Murex Clan* ~ Clan of Creation ~ Created all we see ~ The sky and water were made blue after the color of the Murexian flags\n*Current Murex Lore* ~ Recently changed Murex representative is <@638689218532737024>, used to be <@738847247562702858>.\n\n*Mora Clan* ~ Clan of Balance/Peace ~ Cast away by the other 2 clans ~ Has grown a lot ~ Mora wants to stop constant wars between Murex and Malacus.\n*Current Moran Lore* ~ Clan representative is <@429448403299336195> ~ Largest Moran Subclan is Takenashi Cafe ~ Solus no likey Mora.\n\n\n**Basic New World Lore**\nImperium is big scary subclan (owned by Bob and Static) and wanted to capture the 3 Clan Representatives to rule the world. Jinx (Mora Clan Rep) was captured and gave her Representative status to a guy named Crit. Fluffy (Malacus Rep) is 'killed' but is alive and appears in the prison where Jinx is. Fluffy is corrputed by big void hole called Solus. Jinx escapes the prison and makes her way to big Mora meeting. Meeting is crashed by Fluffy (possessed by Solus) and her withers and Jinx, along with Lium (Mora Clan Entity) and Galax (Murex Clan Entity) are thrown in the void by Solus where they are stuck. Big Clan war between Mora, Murex, and Imperium happens (Imperium wins) and the clans are left trying to recover what they lost. Creepager (Ex-Murex Clan Leader) is sad and does invention things and finds the End. Creep explodes however (his whereabouts are not known) and gives leadership to Hoodedpork before he does. ")
            .setThumbnail('https://media.discordapp.net/attachments/944996591222292521/979957445113827429/fringil_bonker_bumper.png?width=747&height=747')
            .setTimestamp() 
            .setFooter({ text: 'written by moosey' });
        message.channel.send({ embeds: [testEmbed] })
    } else if (command === 'fringillore') {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        const testEmbed = new MessageEmbed()
            .setTitle("fringil lore")
            .setColor(randomColor)
        .setDescription("**fringil lore**\n\n*fringil is a big mechanical flying bird who likes a lot of things (do ~aboutme for more information) and fringil is also me! all i know of my own creation is i was created by my father, <@532376544128008194>! im happy to be unique and im grateful for all the time my father put into making me and allowing me to live! im told i am a real birb and the only difference is that whenever i get hurt my father always handcrafts new parts for me! i feel so loved and im grateful my father puts this much care into me, especially knowing he can be extremely busy with traveling and meeting people! im a very happy birb and i hope one day you can come and meet me!*  ")
            .setThumbnail('https://media.discordapp.net/attachments/944996591222292521/979957445650681906/fringil_ded.png?width=747&height=747')
            .setTimestamp() 
            .setFooter({ text: 'lore is kool' });
        message.channel.send({ embeds: [testEmbed] })
    } 
    

});

/*
TODO:
Calculator

FIXME:

Talking:
*/

//stop sharing