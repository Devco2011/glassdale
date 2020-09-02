console.log("Hello there")
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const crimeChosenEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        console.log(event)
        // Dispatch to event hub
        debugger
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
        convictionsCollection.map(convictionObj => {
            const crime = convictionObj.name
            return `<option value=${crime}>${crime}</option>`
        })
        }
    </select>
`
}


export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })

}

/* Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {

    const convictions = useConvictions();
    render(convictions)
}

/*const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
/*contentTarget.innerHTML = `
    <select class="dropdown" id="crimeSelect">
        <option value="0">Please select a crime...</option>
        ${
    convictionsCollection.map(convictionObj => {
        const crime = convictionObj.name
        return `<option>${crime}</option>`
    })
    }
    </select>
`
}*/