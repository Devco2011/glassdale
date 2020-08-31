export const OfficerHTML = (officerObj) => {
    return `
    <section id="officer-${officerObj.id}" class="card-officer">
        <h2>NAME: ${officerObj.name}</h2>
    </section>
    `
}