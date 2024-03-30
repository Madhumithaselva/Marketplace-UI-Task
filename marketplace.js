"use strict";

//Get the parent element 
const advertisementsContainer = document.getElementById("advertisements");

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

//Append the filter component toi the container
advertisementsContainer.prepend(filterComponent);

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
  },
  { 
    title: 'Ad 3', 
    description: 'This is the third advertisement.', 
    image: 'https://via.placeholder.com/150', 
    contact: 'contact3@example.com' 
  }, 
  { 
    title: 'Ad 4', 
    description: 'This is the fourth advertisement.', 
    image: 'https://via.placeholder.com/150', 
    contact: 'contact4@example.com' 
  }, 
  { 
    title: 'Ad 5', 
    description: 'This is the fifth advertisement.', 
    image: 'https://via.placeholder.com/150', 
    contact: 'contact5@example.com' 
  }, 
  { 
    title: 'Ad 6', 
    description: 'This is the sixth advertisement.', 
    image: 'https://via.placeholder.com/150', 
    contact: 'contact6@example.com' 
  }
];

function createCard(advertisement){
  console.log("createCard executed");

  //Create card element
  const card = document.createElement("div");
  card.id="advertisements";
  card.classList.add("card","mb-4" ,"col-md-4");
  
  //Create card image
  const img=document.createElement("img");
  img.classList.add("card-img-top");
  img.src=advertisement.image;
  img.alt=advertisement.title;

  //Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  //Create the card body element
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent=advertisement.title;

  //Create the card text
  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent=advertisement.description;

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

    //Append the card to the parent element
    advertisementsContainer.appendChild(card);
}
//Create cards for each advertisement
advertisementsData.forEach(createCard);
