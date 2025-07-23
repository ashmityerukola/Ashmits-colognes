let colognes = {
    "rasasi hawas": {
        name: "Rasasi Hawas",
        brand: "Rasasi",
        scents: ["Fresh", "Citrus", "Aquatic"],
        description: "Fresh summer fragrance"
    },

    "cdnim": {
        name: "Club De Nuit Intense Man",
        brand: "Club De Nuit",
        scents: ["Citrus", "Pineapple", "Clean"],
        description: "Strong citrusy cologne for fall"
    },

    "afnan 9pm": {
        name: "Afnan 9PM",
        brand: "Afnan",
        scents: ["Spicy", "Vanilla", "warm"],
        description: "sweet strong fragrance for winter"
    }
}

function searchCologne(){
    let userInput = document.getElementById('nameInput').value;
    let searchname = userInput.toLowerCase();
    let colognefound = colognes[searchname];
    if(colognefound){
        showCologne(colognefound);
    }
    else{
        showNotFound(searchname);
    }
}

function showCologne(cologne){
    let resultDiv = document.getElementById('result');
    let htmlContent = `
        <h2>${cologne.name}</h2>
        <p>Brand: ${cologne.brand}</p>
        <p>Description: ${cologne.description}</p>
        <p>Scents: ${cologne.scents.join(', ')}</p>
    `;
    resultDiv.innerHTML = htmlContent;
}

function showNotFound(searchname){
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div style="color: red;">
            <p>Sorry, I don't have "${searchname}" yet</p>
            <p>Try: Rasasi Hawas, Afnan 9pm</p>
        </div>
    `;
}

document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchCologne();
    }
});