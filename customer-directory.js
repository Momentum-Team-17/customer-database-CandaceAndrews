let customerContainer = document.querySelector(".customer-container");

function buildPersonHTML(listName) {
    //create div
    let newDivElement = document.createElement("div");
    newDivElement.classList.add("person-block");

    //create thumbnail picture
    let picture = document.createElement("img");
    picture.classList.add("thumbnail-picture");
    picture.setAttribute("src", listName.picture.large);
    newDivElement.appendChild(picture);

    //create header with name
    let nameHeader = document.createElement("h2");
    nameHeader.classList.add("name");
    let firstName = listName.name.first;
    let lastName = listName.name.last;
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let newFirstName = capitalizeFirstLetter(firstName);
    let newLastName = capitalizeFirstLetter(lastName);
    let textName = document.createTextNode(`${newFirstName} ${newLastName}`)
    nameHeader.appendChild(textName);
    newDivElement.appendChild(nameHeader);

    //create email
    let email = document.createElement("p");
    email.classList.add("email");
    let emailText = document.createTextNode(listName.email);
    email.appendChild(emailText);
    newDivElement.appendChild(email);

    //create address
    let address = document.createElement('p');
    address.classList.add("address");
    let fullStateName = listName.location.state;
    let stateAbbreviation = nameToAbbr(fullStateName);
    addressText = document.createTextNode(`${listName.location.street.number} ${listName.location.street.name} ${listName.location.city}, ${stateAbbreviation} ${listName.location.postcode}`);
    address.appendChild(addressText);
    newDivElement.appendChild(address);

    //create date of birth
    let dateOfBirth = document.createElement("p");
    dateOfBirth.classList.add("date-of-birth");
    let birthdayFormat = moment(listName.dob.date).format("MMM Do YYYY");
    let dateOfBirthText = document.createTextNode(`DOB: ${birthdayFormat}`);
    dateOfBirth.appendChild(dateOfBirthText);
    newDivElement.appendChild(dateOfBirth);

    //create registered date
    let registeredDate = document.createElement("p");
    registeredDate.classList.add("registered");
    let registerFormat = moment(listName.registered.date).format("MMM Do YYYY");
    let registeredText = document.createTextNode(`Customer since: ${registerFormat}`);
    registeredDate.appendChild(registeredText);
    newDivElement.appendChild(registeredDate);

    //insert into div
    customerContainer.appendChild(newDivElement);
}

for (let person of customers) {
    buildPersonHTML(person);
}
