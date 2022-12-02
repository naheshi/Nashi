const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const client = require('nekos.life');
const neko = new client();

// comando de 8 ball con imagen incluido
module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('8ball adivinará tu futuro')
        .addStringOption(option =>
            option
                .setName('pregunta')
                .setDescription('Pregunta para 8 ball')
                .setRequired(true)),
    async execute(interaction) {
        let uwu = await neko.eightBall();
        let questionX = interaction.options.getString('pregunta')
        const embed = new EmbedBuilder()
            .setColor('#202225')
            .setTitle(questionX)
            .setImage(uwu.url)
            .setTimestamp()
        await interaction.reply({ embeds: [embed] })
    }
}
