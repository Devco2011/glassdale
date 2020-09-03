import { getOfficers, useOfficers } from "./OfficerProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {

    // Only do this if the `officerSelect` element was changed

    if (changeEvent.target.id === "officerSelect") {
        // Create custom event. Provide an appropriate name.
        const officerChosenEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: changeEvent.target.value
            }
        })
        console.log(changeEvent)
        // Dispatch to event hub

        eventHub.dispatchEvent(officerChosenEvent)
    }
})


const render = officersCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="officerSelect">
        <option value="0">Please select an officer...</option>
        ${
        officersCollection.map(officerObj => {
            const officer = officerObj.name
            return `<option value="${officer}">${officer}</option>`
        })
        }
    </select>
`
}


export const OfficersSelect = () => {
    getOfficers()
        .then(() => {
            const officers = useOfficers()
            render(officers)
        })

}