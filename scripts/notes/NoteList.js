//map over an array and dsisplayy all notes from note.js

import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

const render = (notes) => {
    contentTarget.innerHTML = notes.map((noteObject) => {
        return NoteHTMLConverter(noteObject)
    }).join("");
}

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}


eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})
