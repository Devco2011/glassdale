import { OfficerHTML } from './Officer.js';
import { getOfficers, useOfficers } from './OfficerProvider.js';

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers();
            //console.log("officerArray", officerArray)
            addOfficersToDom(officerArray);

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
