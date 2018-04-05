// Variables
let bitcoinCode;
let stellarCode;

// Find the div/s which we will insert our data into
const divs = document.querySelectorAll('[data-bistow-widget-type="1"]')

// Iterate through each div.
for (const div of divs) {
    // Get the qr codes
    bitcoinCode = div.dataset.bitcoin;
    stellarCode = div.dataset.stellar;

    // Generate our template
    const template = generateTemplate();

    // Write to our div
    div.innerHTML = template;
}

// Create our template.
function generateTemplate() {
    const template = `
        <h3>Great this works marvelous...</h3>
        ${getCodes(bitcoinCode)}
        ${getCodes(stellarCode)}
    `;
    return template;
}

// Helper function for the template, if the code exists display it otherwise return nothing and skip it.
function getCodes(qrCode) {
    if (!qrCode) {
        return '';
    }
    return `<img src="${qrCode}" />`;
};