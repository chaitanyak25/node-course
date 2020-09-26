// const dd = require('fs');

// dd.writeFileSync('notes.txt', 'This file was created by Node.js gfd!');
// dd.appendFileSync('notes.txt', ' Chaitanya');

// const name = require('./utils.js');
const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

// console.log(validator.isEmail('test.com'))

// console.log(getNotes());

// console.log(chalk.bgRed.blue.inverse('Hello world!'))

// console.log(process.argv[2]);
// node app.js Chaitanya

yargs.version('2.0.0');

yargs.command({
    command: 'add',
    description: 'To Add Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    description: 'To Remove Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.deleteNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    description: 'To Get List of Notes',
    handler: () => {
        console.log("Notes List");
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    description: 'To Read Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.getNotes(argv.title);
    }
})

yargs.parse()
// node app.js --version
// node app.js --help
// console.log(yargs.argv);

