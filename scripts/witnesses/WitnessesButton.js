import { getWitnesses, useWitnesses } from "./WitnessProvider.js"


const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".filters__witnesses");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if (noteCriminal.value !== "0") {
            const newNote = {
                noteText: noteContent.value,
                suspectId: parseInt(noteCriminal.value),
                date: Date.now()
            }

            saveNote(newNote);

        } else {
            window.alert("Choose a Suspect");
        }


    }
})

const render = () => {
    contentTarget.innerHTML = `
       <h3>Add a Note</h3>
       <div>
                <button id="statements">Witness Statements</button>
            </div>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(useCriminals());
        })

}