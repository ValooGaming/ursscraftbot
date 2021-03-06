require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const chalk = require("chalk")
const fs = require("fs");
const mongoose = require("mongoose")

console.log(Date.now())

client.commands = new Discord.Collection();

mongoose.connect(`mongodb+srv://valoogaming:${process.env.DATABASE}@cluster0.wrdaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

fs.readdir("./commands/", (err, f) => {
    if (err) console.log(err);

    let commands = f.filter(f => f.split(".").pop() === "js")
    if (commands.length <= 0) return console.log(chalk.red("Aucune commande trouvée."));

    commands.forEach((f) => {
        let command = require(`./commands/${f}`);
        console.log(chalk.magenta(`${f}, commande chargée !`));

        client.commands.set(command.help.name, command);
    });
});

fs.readdir("./events/", (error, f) => {
    if(error) console.log(error);
    console.log(chalk.cyan(`${f.length} events en chargement`));
  
    f.forEach((f) => {
        const events = require(`./events/${f}`);
        const event = f.split(".")[0];
  
      client.on(event, events.bind(null, client));
    });
  
  });

client.login(process.env.TOKEN)