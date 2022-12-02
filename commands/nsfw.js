const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { NekoBot } = require("nekobot-api");
const neko = new NekoBot();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nk')
        .setDescription('Global')
        .addStringOption(option =>
            option
                .setName('nsfw')
                .setRequired(true)
                .setDescription('NSFW img')
                .addChoices(
                    { name: 'hentai', value: 'hentai' },
                    { name: 'hneko', value: 'hneko' },
                    { name: 'hkitsune', value: 'hkitsune' },
                    { name: 'hanal', value: 'hanal' },
                    { name: 'hthigh', value: 'hthigh' },
                    { name: 'hboobs', value: 'hboobs' },
                    { name: 'hass', value: 'hass' }
                )
        ),
    async execute(interaction) {
        if (!interaction.channel.nsfw) {
            return interaction.reply({ content: "This command only can be execute on nsfw channel!", ephemeral: true });
        } else {
            // Here the nekobot api is used 
            if (interaction.options.getString('nsfw') === 'hentai') {
                const img = await neko.get("hentai");
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(img)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            } else if (interaction.options.getString('nsfw') === 'hneko') {
                const img = await neko.get("hneko");
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(img)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            } else if (interaction.options.getString('nsfw') === 'hkitsune') {
                const img = await neko.get("hkitsune");
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(img)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            }
            else if (interaction.options.getString('nsfw') === 'hanal') {
                const img = await neko.get("hanal");
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(img)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            } else if (interaction.options.getString('nsfw') === 'hthigh') {
                const img = await neko.get("hthigh");
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(img)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            } else if (interaction.options.getString('nsfw') === 'hboobs') {
                const img = await neko.get("hboobs");
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(img)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            } else {
                const img = await neko.get("hass");
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(img)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            } 
            //nekobot api end
        }
    }
}