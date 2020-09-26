const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })
    if (duplicateNotes.length > 0) {
        console.log("Duplicate data");
    } else {
        let obj = {
            "title": title,
            "body": body
        };
        notes.push(obj);
        saveNotes(notes);
        console.log("Notes Saved");
    }
}

const loadNotes = () => {
    try {
        const dataStream = fs.readFileSync("notes.json");
        const dataString = dataStream.toString();
        return JSON.parse(dataString);
    }
    catch (e) {
        return [];
    }
}

const getNotes = (title) => {
    debugger
    const notes = loadNotes();
    const dataFilter = notes.find((note)=>note.title === title)
    if (dataFilter) {
        console.log(dataFilter.body);
    } else {
        console.log("Notes not found");
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}
const listNotes = (title) => {
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(element.title);
    });
}

const deleteNotes = (title) => {
    const notes = loadNotes();
    const dataFilter = notes.filter((note) => {
        return note.title !== title;
    });
    if (notes.length > dataFilter.length) {
        saveNotes(dataFilter);
        console.log(chalk.green.bgBlue.inverse("Notes Removed"));
    } else {
        console.log(chalk.red.bgBlue.inverse("Notes Not found"));
    }
}

module.exports = {
    "addNotes": addNotes,
    "getNotes": getNotes,
    "deleteNotes": deleteNotes,
    "listNotes": listNotes
};