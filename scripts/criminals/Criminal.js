export const CriminalHTML = (criminalObj) => {
    return `
    <section class="criminals" class="card-criminal">
        <div class="criminal">
        
        <ul>
            <li><h2>${criminalObj.name}</h2></li>
            <li>Age: ${criminalObj.age}</>
            <li>Crime: ${criminalObj.conviction}</li>
            <li>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</li>
            <li>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</li>
        </div>
    </section>
    `
}