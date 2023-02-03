let customerContainer = document.querySelector("#customer-container");

function buildPersonHTML(listName) {
    //create div
    let newDivElement = document.createElement("div");
    newDivElement.classList.add("person-block");

    //create header with name
    let nameHeader = document.createElement("h2");
    nameHeader.classList.add("name");
    let textName = document.createTextNode(`${listName.name.first} ${listName.name.last}`);
    nameHeader.appendChild(textName);
    newDivElement.appendChild(nameHeader);

    //create phone number
    let phoneNumber = document.createElement("p");
    phoneNumber.classList.add("phone-number");
    let phoneText = document.createTextNode(`Phone: ${listName.phone} Cell: ${listName.cell}`);
    phoneNumber.appendChild(phoneText);
    newDivElement.appendChild(phoneNumber);

    //create address
    let address = document.createElement('h3');
    address.classList.add("address");
    addressText = document.createTextNode(`${listName.location.street.number} ${listName.location.street.name} ${listName.location.city} ${listName.location.state} ${listName.location.postcode}`);
    address.appendChild(addressText);
    newDivElement.appendChild(address);

    //insert into div
    customerContainer.appendChild(newDivElement);
}

for (let person of customers) {
    buildPersonHTML(person);
}



