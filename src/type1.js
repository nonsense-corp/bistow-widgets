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
    const randomNumber = `${new Date().getTime()}${Math.floor(Math.random() * Math.floor(10000))}`;
    const template = `
        <style>
            .bistow-type-1 {
                display: inline-block;
                max-width: 300px;
            }
            .bistow-type-1-bitcoin${randomNumber}, .bistow-type-1-stellar${randomNumber} {
                display: none;
            }
            .bistow-type-1-radio${randomNumber} {
                display: none;
            }
            .bistow-type-1-radio${randomNumber} + label{
                background-color: #fff;
                box-shadow: inset 0 0 0 2px #202e37;
                box-sizing: border-box;
                cursor: pointer;
                color: #202e37;
                display: inline-block;
                height: 30px;
                line-height: 30px;
                font-size: 20px;
                font-family: sans-serif;
                text-align: center;
                text-shadow: 0 2px 4px rgba(0,0,0,.25);
                width: 48%;
            }
            .bistow-type-1-radio${randomNumber} + label:hover{
                box-shadow: inset 0 0 0 2px #75b9be;
                color: #75B9BE;
                transition: all 0.4s;
            }
            .bistow-type-1-radio${randomNumber}:checked + label{
                background-color: #202e37;
                color: #fff;
            }
            .bistow-type-1-radio-bitcoin${randomNumber}:checked ~ .bistow-type-1-bitcoin${randomNumber} {
                display:block;
            }
            .bitstow-type-1-radio-stellar${randomNumber}:checked ~ .bistow-type-1-stellar${randomNumber} {
                display:block;
            }
        </style>
        <input class="bistow-type-1-radio-bitcoin${randomNumber} bistow-type-1-radio${randomNumber}" 
            name="bistow-type-1-group${randomNumber}" 
            id="bistow-type-1-radio-bitcoin${randomNumber}" type="radio" checked="checked" />
        <label class="label" for="bistow-type-1-radio-bitcoin${randomNumber}">Bitcoin</label>
        <input class="bitstow-type-1-radio-stellar${randomNumber} bistow-type-1-radio${randomNumber}" 
            name="bistow-type-1-group${randomNumber}" 
            id="bitstow-type-1-radio-stellar${randomNumber}" type="radio" />
        <label class="label" for="bitstow-type-1-radio-stellar${randomNumber}">Stellar</label>
        ${getCodes(bitcoinCode, `bistow-type-1-bitcoin${randomNumber}`)}
        ${getCodes(stellarCode, `bistow-type-1-stellar${randomNumber}`)}
    `;
    return template;
}

// Helper function for the template, if the code exists display it otherwise return nothing and skip it.
function getCodes(qrCode, className) {
    if (!qrCode) {
        return '';
    }
    return `<img src="${qrCode}" class="${className}"/>`;
};