const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const client = require('nekos.life');
const neko = new client();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('nlife')
        .setDescription('UwU')
        .addSubcommand(subcommand =>
            subcommand
                .setName('neko')
                .setDescription('NekoLife'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('waifu')
                .setDescription('NekoLife'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('slap')
                .setDescription('NekoLife'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('avatar')
                .setDescription('NekoLife')),
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.options.getSubcommand() === 'neko') {
            async function neko1() {
                const GIF = await neko.neko();
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(GIF.url)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            }
            neko1();
        } else if (interaction.options.getSubcommand() === 'slap') {
            async function slap1() {
                const GIF = await neko.slap();
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(GIF.url)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            }
            slap1();
        } else if (interaction.options.getSubcommand() === 'avatar') {
            async function avatar() {
                const GIF = await neko.avatar();
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(GIF.url)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            }
            avatar();
        }
        else {
            async function waifu() {
                const GIF = await neko.waifu();
                const embed = new EmbedBuilder()
                    .setColor('#202225')
                    .setImage(GIF.url)
                    .setTimestamp()
                await interaction.reply({ embeds: [embed] })
            }
            waifu();
        }
    },
}
