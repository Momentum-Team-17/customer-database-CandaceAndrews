console.log("main.js is connected");
// grab element where we will put the divs for each person
let container = document.querySelector("#container");

// loop through the array people
for (let person of people) {
  buildPersonHtml(person);
}

function buildPersonHtml(individual) {
  //   console.log(person.name);
  let newElement = document.createElement("div");
  // create a div
  newElement.classList.add("person-block");
  // add a class to the div to apply style from css
  let nameEl = document.createElement("h2");
  // create an h2
  let text = document.createTextNode(individual.name);
  // create a texNode for the name
  nameEl.classList.add("name");
  // add a class to the name for style
  nameEl.appendChild(text);
  // put the name text inside the h2
  newElement.appendChild(nameEl);
  // put the h2 in the div
  let skillsList = document.createElement("ul");
  // create a ul element for skills
  for (let skill of individual.skills) {
    // for each skill, make an li and add it to the list
    let skillEl = document.createElement("li");
    let text = document.createTextNode(skill);
    skillEl.appendChild(text);
    skillsList.appendChild(skillEl);
    // put each li in the ul
  }
  // add the list to the div
  newElement.appendChild(skillsList);
  // put the div in the container
  container.appendChild(newElement);
}
