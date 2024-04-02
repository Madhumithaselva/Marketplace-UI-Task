"use strict";

document.addEventListener("DOMContentLoaded",function(){

//Get the parent element 
const advertisementsContainer = document.getElementById("advertisements");

//Create the filter component
const filterComponent = document.createElement("div");
filterComponent.classList.add("mb-3");

const label = document.createElement("label");
label.setAttribute("for","filterTitle");
label.textContent="Filter by title:";

const filterInput = document.createElement("input");
filterInput.type= "text";
filterInput.classList.add("form-control");
filterInput.id= "filterTitle";
filterInput.placeholder="Enter title";

//Append label and input elemnts to the filter component
filterComponent.appendChild(label);
filterComponent.appendChild(filterInput);

//Append the filter component to the container
advertisementsContainer.parentNode.insertBefore(filterComponent,advertisementsContainer);

//Append the filter component toi the container
//advertisementsContainer.prepend(filterComponent);

//Advertisement data
const advertisementsData=[
  {
    title: 'Ad 1',
    description: 'This is the first advertisement',
    image: 'https://via.placeholder.com/150',
    contact: 'contact1@example.com'
  },
  {
    title: 'Ad 2',
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

function renderAdvertisements(){
  advertisementsContainer.innerHTML='';
  /*while(advertisementsContainer.firstChild){
    advertisementsContainer.removeChild(advertisementsContainer.firstChild);
  }*/

  //Create cards for each advertisement
  advertisementsData.forEach(function(advertisement,index ){

  //Create card element
  const card = document.createElement("div");
  card.classList.add("card","mb-4" ,"col-md-4");
  
  //Create card image
  const img=document.createElement("img");
  img.classList.add("card-img-top");
  img.src=advertisement.image;
  img.alt=advertisement.title;

  //Create the card body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  //Create the card title element
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

  //Create the contact information toggle button
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("btn","btn-info","btn-sm","mt-2");
  toggleButton.textContent="Toggle Contact Information";
  toggleButton.addEventListener("click",function(){
    if(contactText.textContent === "Contact: ***"){
      contactText.textContent = "Contact:"+advertisement.contact;
    }else{
      contactText.textContent="Contact: ***";
    }
  });


  //Append the title,text and contact information
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(contactText);
  cardBody.appendChild(toggleButton);

  //Create the card  footer element
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer","text-center");

  //Create button in footer
  const button = document.createElement("button");
  button.classList.add("btn","btn-info","btn-block");
  button.textContent="Details";
  button.addEventListener("click",function(){
    alert("Contact: "+advertisement.contact);
  });

  //Append the button to the card footer
  cardFooter.appendChild(button);

  //Append the created card image, card body and card footer to the card
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);

    //Append the card to the parent element
    advertisementsContainer.appendChild(card);

    //Add a clearfix div after every 3rd element
    if((index+1)%3 ===0){
      const clearfix = document.createElement("div");
      clearfix.classList.add("clearfix");
      advertisementsContainer.appendChild(clearfix);
    }
  });
}

//Render ads initially
renderAdvertisements();

//Function for filtering
function filterAdvertisements(){
  const filterText = filterInput.value.toLowerCase();

  advertisementsContainer.querySelectorAll(".card").forEach(function(card) {
    const title = card.querySelector(".card-title").textContent.toLowerCase();

    if(title.includes(filterText)) {
      card.style.display="block";
    } else{
      card.style.display="none";
    }
  });
}

filterInput.addEventListener("input",filterAdvertisements);
});