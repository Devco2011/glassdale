/*
Take notes made and prepare them to be displayed in html
*/

//const eventHub = document.querySelector("#main")


export const NoteHTMLConverter = (noteObj) => {
    return `
    <p><section class="note">
            <div class="note--title">Criminal: ${noteObj.suspectId}</div>
            <div class="note--content">${noteObj.noteText}</div>
            <div class="note--timestamp">Timestamp: ${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
        </section></p>
    `
}