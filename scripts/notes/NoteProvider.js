/*
hold on to array of notes
usedNotes - makes copy of array of notes and returns
get all notes from DB
add a note to the DB
*/

let notes = [];

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const useNotes = () => {
    return notes.slice();
}

export const saveNote = noteObj => {
    return fetch("http://localhost:8088/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObj)
    })
        .then(() => {
            return getNotes()
        })
        .then(dispatchStateChangeEvent)
}
// button click
// To delete: reference a specific note by id
// Remove from api
// get all notes 
// display notes
