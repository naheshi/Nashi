const { SlashCommandBuilder } = require('discord.js');
const { Minesweeper, Slots, Flood, Snake } = require('discord-gamecord');

module.exports= {
    data: new SlashCommandBuilder()
    .setName('minigames')
    .setDescription('Nashi minigames UwU')
    .addStringOption(option =>
        option
        .setName('option')
        .setDescription('Choose the game you would like to play :3')
        .setRequired(true)
        .addChoices(
            {name: 'minesweeper', value:'minesweeper'},
            {name: 'slots', value:'slots'},
            {name: 'flood', value:'flood'},
            {name: 'snake', value:'snake'},
            {name:'exit', value:'exit'},
        )),
        async execute(interaction) {
          //Minesweeper
            const MineGame = new Minesweeper({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: 'Minesweeper',
                  color: '#5865F2',
                  description: 'Click on the buttons to reveal the blocks except mines.'
                },
                emojis: { flag: '🚩', mine: '💣' },
                mines: 5,
                timeoutTime: 60000,
                winMessage: 'You won the Game! You successfully avoided all the mines.',
                loseMessage: 'You lost the Game! Beaware of the mines next time.',
                playerOnlyMessage: 'Only {player} can use these buttons.'
              });
              //End Minesweeper
              //Slots
              const SlotsGame = new Slots({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: 'Slot Machine',
                  color: '#5865F2'
                },
                slots: ['🍇', '🍊', '🍋', '🍌']
              });
              //End slots     
              //Flood
              const FloodGame = new Flood({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: 'Flood',
                  color: '#5865F2',
                },
                difficulty: 13,
                timeoutTime: 60000,
                buttonStyle: 'PRIMARY',
                emojis: ['🟥', '🟦', '🟧', '🟪', '🟩'],
                winMessage: 'You won! You took **{turns}** turns.',
                loseMessage: 'You lost! You took **{turns}** turns.',
                playerOnlyMessage: 'Only {player} can use these buttons.'
              });
              //End Flood
              //Snake
              const SnakeGame = new Snake({
                message: interaction,
                isSlashGame: true,
                embed: {
                  title: 'Snake Game',
                  overTitle: 'Game Over',
                  color: '#5865F2'
                },
                emojis: {
                  board: '⬛',
                  food: '🍎',
                  up: '⬆️', 
                  down: '⬇️',
                  left: '⬅️',
                  right: '➡️',
                },
                snake: { head: '🟢', body: '🟩', tail: '🟢', over: '💀' },
                foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
                stopButton: 'Stop',
                timeoutTime: 60000,
                playerOnlyMessage: 'Only {player} can use these buttons.'
              });
              //End Snake              
            if(interaction.options.getString('option') === 'minesweeper') {
                MineGame.startGame();
                MineGame.on('gameOver', result => {
                  });
            } else if(interaction.options.getString('option') === 'slots') {
              SlotsGame.startGame();
              SlotsGame.on('gameOver', result => {
              });
            } else if(interaction.options.getString('option') === 'flood') {
              FloodGame.startGame();
              FloodGame.on('gameOver', result => {
              });
            } else if(interaction.options.getString('option') === 'snake') { 
              SnakeGame.startGame();
              SnakeGame.on('gameOver', result => {
              });
            } else {
              interaction.reply('byeee UnU')
            }
        }
}

