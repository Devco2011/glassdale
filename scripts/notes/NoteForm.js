/*
A bunch of input boxes related to the not information
*/

import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"
import { saveNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

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

const render = (criminalArray) => {
    contentTarget.innerHTML = `
       <h3>Add a Note</h3>
       <div>
		    
		        <select class="dropdown" id="noteForm--criminal">
			            <option value="0">Please select a criminal...</option>
			            ${criminalArray.map(criminalObj => {
        return `<option value="${criminalObj.id}">${criminalObj.name}</option>`
    }).join("")
        }
                </select>
                <textarea id="noteForm--text" placeholder="Put a note here"></textarea>
                <button type="button" id="saveNote">Save Note</button>
            </div>
    `
}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(useCriminals());
        })

}