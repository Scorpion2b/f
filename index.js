const Discord = require("discord.js");
const bot = new Discord.Client();




bot.on("ready", () => {
    console.log("I am ready!");
    bot.user.setActivity('FranceRPBot | *help');
});

const prefix = "*";

var questions = new Array(),
reponses = new Array(),
temoin = 0;




bot.on("message", (message) => {


	const blacklist = ["PD","CONNARD","BATARD","FOUTRE","VA TE FAIRE","SUCE","","BITE","FILS DE PUTE","ENCULE","SALE NEGRE","SALE NOIR","SALE JUIF","NAZI","SALOPE","SALOP","SALOPARD","TCHOIN","TEPU","PUTE","CATIN","MANGE TES MORT","NIQUE"];

    const argus = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = argus.shift().toLowerCase();
    var msg = message.content.toUpperCase();

    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (message.content.startsWith(prefix + "help"))    {
        message.delete();
        message.channel.send({embed: {
        color:  3447003,
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL
        },
        title: 'Commandes de FranceRPBot:',
        description: 'Liste des commandes pour FranceRPBot',

        fields: [{
            name: "Commande Modérateur",
             value: "[RIEN]"
        },

        {
            name: "Commande generale",
            value: "[RIEN]",
        }

        ],
        timestamp: new Date(),

        footer: {
            icon_url: bot.user.avatarURL,
            text: "© BlackDard"
        }
        }})
    }

    //Liste mot banni
    
    else if(message.author.id === '433646778810630154')
    {
    	return;
    }

     else if(blacklist.some(word => msg.include(word)))
    {
    	message.delete();
    	message.channel.send("``` C\'est mots sont interdit ! ```")
    	return;
    }
    

// Purge
    else if (message.content.startsWith(prefix + 'clean')) { 
        async function purge() {
            message.delete(); 

            if (!message.member.roles.find("name", "Master_Bot")) { 
                message.channel.send('Vous navais pas la permissions de faire ça.'); 
                return; // this returns the code, so the rest doesn't run.
            }

            if (isNaN(args[0])) {
                message.channel.send('Rentrer le nombre de ligne à supprimer. \n Usage: ' + prefix + 'clean <ligne>'); 
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
            console.log(fetched.size + ' messages found, deleting...');

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }
    
        purge();
    message.channel.send('Messages Supprimés.');
    
     

    }
    
    else if (message.content.startsWith("Messages Supprimés"))      {
     setTimeout(nomdetafonction, 5000);
     function nomdetafonction() {
    
    }
        message.delete();
    }



    });

bot.login(process.env.TOKEN);
