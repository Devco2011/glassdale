import { getWitness, useWitness } from "./WitnessProvider.js"
import { Witness } from "./Witness.js";

const eventHub = document.querySelector(".container")

export const WitnessList = () => {
    getWitness()
        .then(() => {
            const witnessArray = useWitness();
            addWitnessToDom(witnessArray);
        })
}
eventHub.addEventListener("click", statementClickEvent => {
    if (statementClickEvent.target.id === "statements") {

        const addWitnessToDom = (witnessCollection) => {
            //get a reference to the DOM location where this list will be put
            const domElement = document.querySelector("#witnessContainer");
            //loop through witness collection and make some html for each witness
            let HTMLArray = witnessCollection.map(singleWitness => {
                return Witness(singleWitness)
            }).join("")
            //add to innerHTML
            domElement.innerHTML += HTMLArray;
        }
    }
})
