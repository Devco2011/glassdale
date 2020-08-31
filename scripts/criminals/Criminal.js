export const CriminalHTML = (criminalObj) => {
    return `
    <section class="criminal-card">
        
        <ul>
            <li><h3>${criminalObj.name}</h3></li>
            <li>Age: ${criminalObj.age}</>
            <li>Crime: ${criminalObj.conviction}</li>
            <li>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</li>
            <li>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</li>
        
    </section>
    `
}