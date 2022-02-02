const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTM3MzcwNzg2OTEyNjgyMDY0.Yfawkw.vbwNCZ38nBcaRHMrOZj1XpJIzNQ")

    client.on("ready", () => {
        console.log("Bot ONLINE")
    })

    client.on("messageCreate", (message) => {
        if(message.content == "!saky"){
            message.channel.send("Ciao sono SakyMC. Digita s!list per avere la lista dei comandi.")
        }
    })

    
    client.on("messageCreate", (message) => {
        if(message.content == "s!invito"){
            message.channel.send("https://discord.gg/xE3WHSYF")
        }
    })

    client.on("messageCreate", (message) => {
        if(message.content == "s!serverinfo"){
            var embed = new Discord.MessageEmbed()
            .setDescription("**■▬▬▬▬▬▬◢◤◆◥◣▬▬▬▬▬▬■\n                       ・Saky MC・\n■▬▬▬▬▬▬◥◣◆◢◤▬▬▬▬▬▬■\n             \n╠《🔒》Stanze Private\n╠《🎶》Musica con Molti Bot, Anime\n╠《👮‍♂️》Self-Role\n╠《🎫》Ticket per Assistenza\n╠《◽》Sistema di Ranking\n╠《👨🏿‍🤝‍👨🏾》Partnership e Collaborazioni\n╠《🤝》Staff Accogliente, Disponibile e Attivo\n\n■▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬■\nBuona Permanenza E...\n               Divertiti! \n■▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬■**")
            .setColor("DARK_PURPLE")
            .setThumbnail("https://media.discordapp.net/attachments/935963945502646363/937700386599469096/20220131_142526_0000.png")
            message.channel.send({embeds: [embed]})
        }
        if(message.content == "s!requisiti"){
            var embed = new Discord.MessageEmbed()
            .setDescription("**100 a 300 Ping: No\n300 a 500 Ping: Here1\n500 a 1000 Ping: Everyone Here**")
            .setColor("DARK_PURPLE")
            .setThumbnail("https://media.discordapp.net/attachments/935963945502646363/937700386599469096/20220131_142526_0000.png")
            message.channel.send({embeds: [embed]})
        }
        if(message.content == "s!list") {
            var embed = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("__SakyMC Bot__")
            .setDescription("**s!list**=\nti da tutti i comandi\n**s!invito**=\nti fornisce il link del server\n**s!serverinfo**=\nti da le informazioni del server\n**s!userinfo [utente]=**\nti da le info su un utente, dopo il comando devi pingare su chi vuoi le info\n**s!rules**=\nti fornisce le regole \n**s!requisiti**=\nti fornisce i requisiti partnership\n**s!level [utente]**=\nti mostra i livelli di un utente\n**s!lb (leaderboard)**=\nti mostra la classifica di livellamento del server\n**s!xp add/remove [utente] [amount] (IN ARRIVO)**=\nti mostra i livelli di un utente\n**s!time**=\nti fornisce l'ora\n**s!say**=\nserve per far dire qualcosa al bot\n**s!gaytest [utente]**=\nti dice quanto sei gay (ovviamente non è vero, ti da un numero casuale ogni volta)\n**s!ping**=\nti mostra la tua latenza (ovvero il ping)")
            .setThumbnail("https://media.discordapp.net/attachments/935963945502646363/937700386599469096/20220131_142526_0000.png")
            .setTimestamp();
            message.channel.send({embeds: [embed]})
        }
    })

    client.on("message", (message) => {
        if(message.content == "s!rules") {
            var embed = new Discord.MessageEmbed()
            .setTitle("__Rules!!__")
            .setColor("DARK_PURPLE")
            .setDescription("**Nel momento in cui entrerai e registrerai un account sul server, tutte le regole qui riportate verranno accettate automaticamente dall'utente.\nNon mancare di rispetto allo staff\nNon insultare altri utenti, se hai riscontri segnalali allo staff\nPer non incombere un sanzioni leggi il regolamento completo del server\nRispetta tutti, niente omofobia,bestemmie e razzismo\nSe ricevi una sanzione per te ingiusta, appellarsi aprendo un ticket non te la toglierà, in tal caso la sanzione è veramente ingiusta, segnalalo in dm ad uno Staffer ponendo delle valide prove della tua innocenza,\nL'utente può rifiutare il regolamento in tutta libertà, ma ciò comporterà a sanzioni molto pesanti.\nNota: Il Regolamento è in continuo aggiornamento, è compito dell'utente informarsi sul regolamento vigente, la mancata lettura non può essere usata come scusa per non incombere in sanzioni.**")
            .setThumbnail("https://media.discordapp.net/attachments/935963945502646363/937700386599469096/20220131_142526_0000.png")
            message.channel.send({embeds: [embed]})
        }
    })
    client.on('message', (message) => {
        if(message.content == "s!time"){
            var data = new Date();
            var ora = data.getHours();
            var minuto = data.getMinutes();

            message.channel.send("**Sono le ore:watch::**" + ora + '**:**' + minuto);
        }
    });
    client.on("messageCreate", message => {
        if (message.content.startsWith("s!userinfo")) {
            if (message.content == "s!userinfo") {
                var utente = message.member;
            }
            else {
                var utente = message.mentions.members.first();
            }
            if (!utente) {
                return message.channel.send("Non ho trovato questo utente")
            }
            var elencoPermessi = "";
            if (utente.permissions.has("ADMINISTRATOR")) {
                elencoPermessi = "👑 ADMINISTRATOR";
            }
            else {
                var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "ADMINISTRATOR", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS_AND_STICKERS", "USE_APPLICATION_COMMANDS", "REQUEST_TO_SPEAK", "MANAGE_THREADS", "CREATE_PUBLIC_THREADS", "CREATE_PRIVATE_THREADS", "USE_EXTERNAL_STICKERS", "SEND_MESSAGES_IN_THREADS", "START_EMBEDDED_ACTIVITIES"]
                for (var i = 0; i < permessi.length; i++)
                    if (utente.permissions.has(permessi[i]))
                        elencoPermessi += `- ${permessi[i]}\r`
            }
            var embed = new Discord.MessageEmbed()
                .setTitle(utente.user.tag)
                .setDescription("Tutte le info di questo utente")
                .setThumbnail(utente.user.displayAvatarURL())
                .addField("User id", utente.user.id, true)
                .addField("Status", utente.presence ? utente.presence.status : "offline", true)
                .addField("Is a bot?", utente.user.bot ? "Yes" : "No", true)
                .addField("Account created", utente.user.createdAt.toDateString(), true)
                .addField("Joined this server", utente.joinedAt.toDateString(), true)
                .addField("Permissions", elencoPermessi, false)
                .addField("Roles", utente.roles.cache.map(ruolo => ruolo.name).join("\r"), false)
            message.channel.send({ embeds: [embed] })
        }
    })

    client.on("messageCreate", message => {
        if (message.content == "s!gaytest") {
            var embed1 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed2 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed3 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("** Sei gay al:**")
            .setDescription("****")
            var embed4 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed5 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed6 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed7 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed8 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed9 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed10 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed11 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed12 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed13 = new Discord.MessageEmbed() 
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed14 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed15 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed16 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed16 = new Discord.MessageEmbed() 
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed17 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed18 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed19 = new Discord.MessageEmbed() 
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var embed20 = new Discord.MessageEmbed()
            .setColor("DARK_PURPLE")
            .setTitle("**Sei gay al:**")
            .setDescription("****")
            var messaggi = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10, embed11, embed12, embed13, embed14, embed15, embed16, embed17, embed18, embed19, embed20, embed21, embed22, embed23, embed24, embed25, embed26, embed27, embed28, embed29, embed30]
            message.channel.send({ embeds: [messaggi[Math.floor(Math.random() * messaggi.length)]] });
        }
    })

    client.on("messageCreate", message => {
        if (message.content.startsWith("s!avatar")) {
            if (message.content.trim() == "s!avatar") {
                var utente = message.member;
            }
            else {
                var utente = message.mentions.members.first();
            }
            if (!utente) {
                return message.channel.send("Utente non trovato")
            }
            var embed = new Discord.MessageEmbed()
                .setTitle(utente.user.tag)
                .setDescription("L'avatar di questo utente")
                .setImage(utente.user.displayAvatarURL({
                    dynamic: true,
                    format: "png",
                    size: 512
                }))
            message.channel.send({ embeds: [embed] })
        }
    })