# UrssCraftBOT

## Description 

> UrssCraftBOT est un robot codé avec *discord.js@12* pour Discord. Il est le robot d'un serveur entre amis sur Discord.

## Installation

> Le bot est **opensource** ! Vous pouvez cloner le repository librement, et utiliser le code à votre guise. 
> Pour ce faire, clonez le repository à l'aide de 

<code>$git clone https://github.com/ValooGaming/ursscraftbot.git</code>

> puis installez les modules nodejs à l'aide de **npm install**.
> La dernière chose à faire est de créer un fichier <span style="color: grey">.env</span> à la racine du bot et d'intégrer : 

<code>TOKEN=votretoken</code>
<code>PREFIX = '*' (ou autre)</code>
<code>DATABASE=passwordDbMongo</code>
<code>STATUS_CHANNEL_ID=idDuChannelStatus</code>

## Note

> Pour se connecter à MongoDB, il faut modifier le contenu du : 

<code>mongoose.connect("")</code>

> dans index.js, et mettre son propre lien et identifiant. Vous pouvez utiliser ${process.env.DATABASE} pour camoufler votre mot de passe.
