import { CriminalHTML } from './Criminal.js'
import { getCriminals, useCriminals } from './CriminalDataProvider.js'

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals();
        console.log("criminalArray", criminalArray)
        addCriminalsToDom(criminalArray);
    }
        /*
            Now that you have the data, what
            component should be rendered?
        */
    )
}
const addCriminalsToDom = (anArrayOfCriminals) => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = anArrayOfCriminals.map(singleCriminal => {
        return CriminalHTML(singleCriminal);
    })
    //console.log("HTMLArray", HTMLArray);

    domElement.innerHTML = HTMLArray.join("")
}