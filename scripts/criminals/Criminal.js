import { AlibiDialog } from "./AlibiDialog.js";
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const [prefix, criminalId] = event.target.id.split("--")

        const alibiEvent = new CustomEvent("associatesClicked", {
            detail: {
                chosenCriminal: criminalId
            }
        })
        eventHub.dispatchEvent(alibiEvent);
    }
})

export const CriminalHTML = (criminalObj) => {
    return `
    <section class="criminal-card">
        
        <ul>
            <li><h3>${criminalObj.name}</h3></li>
            <li>Age: ${criminalObj.age}</>
            <li>Crime: ${criminalObj.conviction}</li>
            <li>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</li>
            <li>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</li>
            <button id="associates--${criminalObj.id}">Associate Alibis</button>
            ${AlibiDialog(criminalObj.id)}
    </section>
    `
}