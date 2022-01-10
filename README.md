# UrssCraftBOT

## Description 

> UrssCraftBOT est un robot codé avec **discord.js@12* pour Discord. Il est le robot d'un serveur entre amis sur Discord.

## Installation

> Le bot est **opensource** ! Vous pouvez cloner le repository librement, et utiliser le code à votre guise. 
> Pour ce faire, clonez le repository à l'aide de **$git clone https://github.com/ValooGaming/ursscraftbot.git**, puis installez les modules nodejs à l'aide de **npm install**.
> La dernière chose à faire est de créer un fichier .env à la racine du bot et d'intégrer : 
> TOKEN=votretoken
> PREFIX = '*' (ou autre)
> DATABASE=passwordDbMongo

## Note

> Pour se connecter à MongoDb, il faut modifier le contenu du : 
> mongoose.connect("") dans index.js, et mettre son propre lien et identifiant. Vous pouvez utiliser ${process.env.DATABASE} pour camoufler votre mot de passe.
