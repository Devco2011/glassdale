let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedResponse => {
                console.table(parsedResponse)
                criminals = parsedResponse
            }
        )
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
}