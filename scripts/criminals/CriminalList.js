import { CriminalHTML } from './Criminal.js'
import { getCriminals, useCriminals } from './CriminalDataProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?
    if (event.detail.crimeThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const matchingCriminals = useCriminals().filter(currentCriminal => {
            return currentCriminal.conviction === event.detail.crimeThatWasChosen


        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        Put addCriminalsToDom function here instead of render function */
        addToDom(matchingCriminals)
    }
})

eventHub.addEventListener('officerChosen', event => {
    // You remembered to add the id of the crime to the event detail, right?

    if (event.detail.officerThatWasChosen !== "0") {
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const matchingCriminals = useCriminals().filter(currentCriminal => {
            return currentCriminal.arrestingOfficer === event.detail.officerThatWasChosen


        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        Put addCriminalsToDom function here instead of render function */
        addToDom(matchingCriminals)
    }
})


const addToDom = (criminalCollection) => {

    let HTMLArray = criminalCollection.map(singleCriminal => {
        return CriminalHTML(singleCriminal);
    })
    contentTarget.innerHTML = HTMLArray.join("")
}



// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            addToDom(appStateCriminals)
        })
}






