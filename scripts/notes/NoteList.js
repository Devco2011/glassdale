//map over an array and dsisplayy all notes from note.js

import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js";

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

const render = (notes, suspects) => {

    contentTarget.innerHTML = notes.map((noteObject) => {
        noteObject.suspectObj = suspects.find(suspect => {
            return suspect.id === parseInt(noteObject.suspectId)
        })
        return NoteHTMLConverter(noteObject)
    }).join("");
}

export const NoteList = () => {
    getNotes()
        .then(getCriminals)
        .then(() => {
            const notes = useNotes();
            const suspects = useCriminals()
            render(notes, suspects)

        })



    eventHub.addEventListener("noteStateChanged", () => {
        const newNotes = useNotes()
        render(newNotes, useCriminals)
    })
}

