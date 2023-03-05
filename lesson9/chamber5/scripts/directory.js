const urlll = 'https://brotherblazzard.github.io/canvas-content/latter-day-business.json';
const urll = 'https://davidredick.com/wdd230/aberdeen.json';

const url = 'https://davidredick.github.io/wdd230/lesson9/chamber5/jsons/aberdeen2.json';


async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);
    displaybusinesses(data.businesses);  // note that we reference the business array of the data object given the structure of the json file


  }

  const displaybusinesses = (businesses) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    businesses.forEach((business) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the business's full name - finish the template string
      h2.textContent = `${business.businessname}`;

      p.innerHTML = `Bi-Line: ${business.bi-line}<br>`;
      p.innerHTML += `Contact Name: ${business.contactname}<br>`;
      p.innerHTML += `Address 1: ${business.address1}<br>`;
      p.innerHTML += `Address 2: ${business.address2}<br>`;
      p.innerHTML += `City State, Zip: ${business.city}, ${business.state} ${business.zipcode}<br>`;
      p.innerHTML += `Website: ${business.website}<br>`;
      p.innerHTML += `Membership Level: ${business.membershiplevel}<br>`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', business.logourl);
      portrait.setAttribute('alt', `Business Logo of: ${business.businessname}`);
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
  
getBusinessDataa();