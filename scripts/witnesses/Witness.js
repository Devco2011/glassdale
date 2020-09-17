export const Witness = (witnessObj) => {

    return `
    <section id="witness--${witnessObj.id}" class="criminal-card">
        
        <p><strong>Name:</strong> ${witnessObj.name}</p>
        <p><strong>Statement:</strong> ${witnessObj.statements}</p>
    
    </section>
    `



}