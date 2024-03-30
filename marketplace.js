"use strict";

//Get the parent element 
const advertisementsContainer = document.getElementById("advertisements");

//Create the filter component

document.addEventListener("DOMContentLoaded",function(){
  //Get teh filter input element
  const filterInput = document.getElementById("filterTitle");

  //Add event listener to filetr input
  filterInput.addEventListener("input",filterAdvertisements);

  //Create Advertisemnets
  createAdvertisements();
});


//Function to create a card for ad.
function createCard(advertisement){
  //Create a container
  const container = document.createElement("div");
  container.setAttribute("class","container mt-5")

  //Create the title element
  const title = document.createElement('h2');
  title.setAttribute('class', 'mb-4');

  container.appendChild(title);

  document.body.appendChild(container);

//Get the paretn element Id
const filterElementId =  document.getElementById("filterTitle");

//Create tbe filter component
const filterComponent = document.createElement("div");
filterComponent.classList.add("md-3");
filterComponent.id ="filterComponet";

const label = document.createElement("label");
label.setAttribute("for","filterTitle");
label.textContent="Filter by title:";

const input1 = document.createElement("input");
input1.type= "text";
input1.classList.add("form-control");
input1.id= "filterTitle";
input1.placeholder="Enter title";

//Append label and input elemnts to the filter component
filterComponent.appendChild(label);
filterComponent.appendChild(input1);

//Append the filter component to the parent element
filterElementId.appendChild(filterComponent);

//Advertisement data
const advertisementsData=[
  {
    title: 'Ad1',
    description: 'This is the first advertisement',
    image: 'https://via.placeholder.com/150',
    contact: 'contact1@example.com'
  },
  {
    title: 'Ad2',
    description: 'This is the second advertisement',
    image: 'https://via.placeholder.com/150',
    contact: 'contact2@example.com'
  }
];


function createCard(){
    console.log("createCard executed");

    //Create card element
    const card = document.createElement("div");
    card.id="advertisements";
    card.classList.add("card","mb-4" ,"col-md-4");
    
    //Create card image
    const img=document.createElement("img");
    img.classList.add("card-img-top");
    img.src="https://via.placeholder.com/150";
    img.alt="Ad 1";

    //Create the card body element
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //Create the card body element
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent="Ad 1";

    //Create the card text
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent="This is the first Advertisement";

    //Create the card text element for contact information
    const contactText = document.createElement("p");
    contactText.classList.add("card-text");
    contactText.textContent = ("Contact: ***");
    contactText.addEventListener("click",function(){
      alert("Contact: contact1@example.com");
    });

    //Append the title,text and contact information
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(contactText);

    //Create the card  footer element
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer","text-center");

    //Create button in footer
    const button = document.createElement("button");
    button.classList.add("btn","btn-info","btn-block");
    button.textContent="Details";
    button.addEventListener("click",function(){
      alert("Contact: contact1@example.com");
    });

    //Append the button to the card footer
    cardFooter.appendChild(button);

    //Append the created card image, card body and card footer to the card
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    //Get the element to append card
    const advertisementsContainer = document.getElementById("advertisements");

    //Append the card to the parent element
    advertisementsContainer.appendChild(card);
}