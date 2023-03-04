/*const url = 'https://davidredick.com/wdd230/latter-day-prophets.json'; */
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
  }

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      p.innerHTML = `Date of Birth: ${prophet.birthdate}<br>`;
      p.innerHTML += `Place of Birth: ${prophet.birthplace}<br>`;
      p.innerHTML += `Date of Death: ${prophet.death}<br>`;
      p.innerHTML += `Years Served as President: ${prophet.length}<br>`;
      p.innerHTML += `Number of Children: ${prophet.numofchildren}<br>`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression
  
  getProphetData();