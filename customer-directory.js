let customerContainer = document.querySelector("#customer-container");

function buildPersonHTML(listName) {
    let newDivElement = document.createElement("div");
    newDivElement.classList.add("person-block");
    let nameHeader = document.createElement("h2");
    nameHeader.classList.add("name");
    let textName = document.createTextNode(`${listName.name.first} ${listName.name.last}`);
    nameHeader.appendChild(textName);
    newDivElement.appendChild(nameHeader);
    // console.log(newDivElement)
    customerContainer.appendChild(newDivElement);
}

for (let person of customers) {
    buildPersonHTML(person);
    // console.log(customers)
    // console.log(person);
}



