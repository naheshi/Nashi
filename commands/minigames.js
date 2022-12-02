const { SlashCommandBuilder } = require('discord.js');
const { Minesweeper, Slots, Flood, Snake, Hangman, TwoZeroFourEight, FindEmoji, MatchPairs, FastType, GuessThePokemon, Trivia, Wordle, WouldYouRather } = require('discord-gamecord');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('minigames')
    .setDescription('Nashi minigames UwU')
    .addStringOption(option =>
      option
        .setName('option')
        .setDescription('Choose the game you would like to play :3')
        .setRequired(true)
        .addChoices(
          { name: 'minesweeper', value: 'minesweeper' },
          { name: 'slots', value: 'slots' },
          { name: 'flood', value: 'flood' },
          { name: 'snake', value: 'snake' },
          { name: 'hangman', value: 'hangman' },
          { name: '2048', value: '2048' },
          { name: 'find emoji', value: 'find emoji' },
          { name: 'match pairs', value: 'match pairs' },
          { name: 'exit', value: 'exit' },
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
    //Hangman
    const HangmanGame = new Hangman({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Hangman',
        color: '#5865F2'
      },
      hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
      customWord: 'Gamecord',
      timeoutTime: 60000,
      theme: 'nature',
      winMessage: 'You won! The word was **{word}**.',
      loseMessage: 'You lost! The word was **{word}**.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    //End Hangman
    //2048
    const TwoZeroFourEightGame = new TwoZeroFourEight({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: '2048',
        color: '#5865F2'
      },
      emojis: {
        up: '⬆️',
        down: '⬇️',
        left: '⬅️',
        right: '➡️',
      },
      timeoutTime: 60000,
      buttonStyle: 'PRIMARY',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    //End 2048
    //Find Emoji
    const FindEmojiGame = new FindEmoji({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Find Emoji',
        color: '#5865F2',
        description: 'Remember the emojis from the board below.',
        findDescription: 'Find the {emoji} emoji before the time runs out.'
      },
      timeoutTime: 60000,
      hideEmojiTime: 5000,
      buttonStyle: 'PRIMARY',
      emojis: ['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'],
      winMessage: 'You won! You selected the correct emoji. {emoji}',
      loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
      timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    //End Find emoji
    //MatchPairs
    const MatchPairsGame = new MatchPairs({
      message: interaction,
      isSlashGame: true,
      embed: {
        title: 'Match Pairs',
        color: '#5865F2',
        description: '**Click on the buttons to match emojis with their pairs.**'
      },
      timeoutTime: 60000,
      emojis: ['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'],
      winMessage: '**You won the Game! You turned a total of `{tilesTurned}` tiles.**',
      loseMessage: '**You lost the Game! You turned a total of `{tilesTurned}` tiles.**',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });
    //End MatchPairs
    if (interaction.options.getString('option') === 'minesweeper') {
      MineGame.startGame();
    } else if (interaction.options.getString('option') === 'slots') {
      SlotsGame.startGame();
      SlotsGame.on('gameOver', result => {
      });
    } else if (interaction.options.getString('option') === 'flood') {
      FloodGame.startGame();
      FloodGame.on('gameOver', result => {
      });
    } else if (interaction.options.getString('option') === 'snake') {
      SnakeGame.startGame();
      SnakeGame.on('gameOver', result => {
      });
    } else if (interaction.options.getString('option') === 'hangman') {
      HangmanGame.startGame();
      HangmanGame.on('gameOver', result => {
      });
    } else if (interaction.options.getString('option') === '2048') {
      TwoZeroFourEightGame.startGame();
      TwoZeroFourEightGame.on('gameOver', result => {
      });
    } else if (interaction.options.getString('option') === 'find emoji') {
      FindEmojiGame.startGame();
      FindEmojiGame.on('gameOver', result => {
      });
    } else if (interaction.options.getString('option') === 'match pairs') {
      MatchPairsGame.startGame();
      MatchPairsGame.on('gameOver', result => {
      });
    } else {
      interaction.reply('byeee UnU')
    }
  }
}

