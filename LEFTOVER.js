function DEVILFRUIT(name,type, users, awakened, image, power_level)
{
    this.name = name;
    this.type = type;
    this.users = users;
    this.awakened = awakened;
    this.image = image;
    this.power_level = power_level
}

let GOMU_GOMU_NOMI = new DEVILFRUIT("GOMU_GOMU_NOMI","PAREMECIA", Array.of("MONCKEY_D._LUFFY", "JOY_BOY"), true, "GOMU.png", 1000);
let HITO_HITO_NOMI = new DEVILFRUIT("HITO_HITO_NOMI","LOGIA", Array.of("TONY_TONY_CHOPPER"), false ,"hito.png", 160 );
let HANMA_HANMA_NOMI = new DEVILFRUIT("HANA_HANA_NOMI","PAREMACIA", Array.of("NICO_ROBIN"), false, "hana (1).png", 420);

let devilFruits = [GOMU_GOMU_NOMI, HITO_HITO_NOMI, HANMA_HANMA_NOMI];

let outputDiv = document.getElementsByClassName("output")[0];

for (let i = 0; i < devilFruits.length; i++) {
    let fruit = devilFruits[i];
  
    // <div> for devilfruit
    let fruitDiv = document.createElement("div");
    fruitDiv.className = "fruit-container"; 
  
    // <h2> for name
    let nameHeader = document.createElement("h2");
    nameHeader.textContent = fruit.name;
  
    // Append the name header to the fruit div
    fruitDiv.appendChild(nameHeader);
  
    // <p> for tyoe
    let typeParagraph = document.createElement("p");
    typeParagraph.textContent = "Type: " + fruit.type;
  
    // Append the type paragraph to the fruit div
    fruitDiv.appendChild(typeParagraph);
  
    // Create a <p> element for the fruit's users
    let usersParagraph = document.createElement("p");
    let usersString = fruit.users.join(", ");
    let Users_with_spaces = usersString.replace(/_/g, ' ');
    usersParagraph.textContent = "Users: " + Users_with_spaces; 
  
    // Append the users paragraph to the fruit div
    fruitDiv.appendChild(usersParagraph);
  
    // <img> for fruit img
    let imageElement = document.createElement("img");
    imageElement.src = fruit.image;
    imageElement.className = "fruit-image"; 
  
    // apend the image div
    fruitDiv.appendChild(imageElement);
  
    // append the fruit div to the outputDiv
    outputDiv.appendChild(fruitDiv);
  }

  

  // Get an array of power_level values
let powerLevels = devilFruits.map(function (fruit) {
    return fruit.power_level;
  });
  
 
  let maxPowerLevel = Math.max(...powerLevels);
  
  let strongestFruit = devilFruits.find(function (fruit) {
    return fruit.power_level === maxPowerLevel;
  });
  
  // <p>  for the strongest fruit message
  let strongestFruitParagraph = document.createElement("p");
  strongestFruitParagraph.textContent =
    "The strongest fruit in the compendium is: " + strongestFruit.name;
  
  // append the message to the outputDiv
  outputDiv.appendChild(strongestFruitParagraph);


  ////-------------stopPropagation-------------////

  window.onload = () => {
    const styledDiv = document.getElementById('styledDiv');
    addNestedListeners(styledDiv, true);
  }
  
  function addNestedListeners(element, stopPropagation = false) {
    const handler = stopPropagation ? alertElementStopPropagation : alertElement;
    element.addEventListener("click", handler);
    element.querySelectorAll("*").forEach(child => {
      child.addEventListener("click", handler);
    });
  }
  
  function alertElement(event) {
    alert(event.currentTarget.className);
  }
  
  function alertElementStopPropagation(event) {
    event.stopPropagation();
    alertElement(event);
  }

