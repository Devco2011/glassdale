import { OfficerHTML } from './Officer.js';
import { getOfficers, useOfficers } from './OfficerProvider.js';

const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers();
            //console.log("officerArray", officerArray)
            //addOfficersToDom(officerArray);

        })
}

const addOfficersToDom = (anArrayOfOfficers) => {
    const domElement = document.querySelector(".officersContainer");

    let HTMLArray = anArrayOfOfficers.map(singleOfficer => {
        return OfficerHTML(singleOfficer);
    })
    //console.log("HTMLArray", HTMLArray);

    domElement.innerHTML = HTMLArray.join("")
}
