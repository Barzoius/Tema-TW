 // Array of image URLs for the flex boxes
const flexBoxImages = [
  ["FIRST3ADM.jpeg"],
  ["AkainuSQR.webp"],
  ["AokijiSQR.png"],
  ["KizaruSQR.jpg"]
];

// Initial index for the flex boxes
let flexBoxIndex = 0;

// Function to create the flex box with images
function createFlexBox() {
  const flexContainer = document.getElementById("flexContainer");
  flexContainer.innerHTML = "";

  const currentImages = flexBoxImages[flexBoxIndex];

  const flexBox = document.createElement("div");
  flexBox.classList.add("flexBox");

  currentImages.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    flexBox.appendChild(img);
  });

  flexContainer.appendChild(flexBox);
}

// Event listener for clicking on "ADMIRALS"
const admiralsLink = document.querySelector(".admirals-link");
admiralsLink.addEventListener("click", () => {
  flexBoxIndex = (flexBoxIndex + 1) % flexBoxImages.length;
  createFlexBox();
});

// Initial creation of flex box
createFlexBox();

// Function to delete the flex box
function deleteFlexBox() {
  const flexContainer = document.getElementById("flexContainer");
  flexContainer.innerHTML = "";
}
// Event listener for clicking on the long line
const deleteFlexLine = document.querySelector(".delete-flex");
deleteFlexLine.addEventListener("click", deleteFlexBox);


//--------------FORM------------//

document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the entered email address
  var email = document.getElementById('email').value;
  var birthdate = document.getElementById('birthdate').value;

  var birthdatePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdatePattern.test(birthdate)) {
    alert('Please enter a valid birth date in the format YYYY-MM-DD');
    return;
  }
  

  // Display the thank you message
  showThankYouMessage();
});

// Function to show the thank you message
function showThankYouMessage() {
  // Hide the email form
  document.getElementById('emailForm').style.display = 'none';

  // Show the thank you message
  document.getElementById('thankYouMessage').style.display = 'block';

  // Stop the timer
  clearInterval(timerInterval);

  // Change the color of the message to red after 100 seconds
  setTimeout(changeMessageColor, 100000);

  // Add the current date under the message
  addCurrentDate();
}

// Timer variables
var timerSeconds = 0;
var timerInterval;

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
  timerSeconds++;
  document.getElementById('timer').textContent = timerSeconds;

  // Check if 100 seconds have passed and change the color of the message to red
  if (timerSeconds >= 100) {
    changeMessageColor();
  }
}

// Function to change the color of the message to red
function changeMessageColor() {
  document.getElementById('timerMessage').style.color = 'red';
}

// Function to add the current date under the message
function addCurrentDate() {
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString();
  var dateElement = document.createElement('p');
  dateElement.textContent = 'Current Date: ' + formattedDate;
  document.getElementById('thankYouMessage').appendChild(dateElement);
}

// Start the timer when the page loads
window.addEventListener('load', startTimer);


//-----------FLEX YONKO---------------//


function createFlexYonko(imageSrc, text) {
  // Create the flex container element
  var flexYonko = document.createElement('div');
  flexYonko.className = 'flex-yonko';

  // Create the image element
  var image = document.createElement('img');
  image.src = imageSrc;
  flexYonko.appendChild(image);

  var textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  // Create the text element
  var textElement = document.createElement('p');
  textElement.textContent = text;
  flexYonko.appendChild(textElement);

  // Add the flex container to the main container
  var mainContainer = document.getElementById('flexYonko');
  mainContainer.appendChild(flexYonko);
}

// Event listener for keydown events
document.addEventListener('keydown', function(event) {
  var keyPressed = event.key;

  if (event.target.closest('#email')) {
    // Do not generate flexboxes if key is pressed inside the email
    return;
  }

  if (event.target.closest('#birthdate')) {
    // Do not generate flexboxes if key is pressed inside the bday
    return;
  }

  var mainContainer = document.getElementById('flexYonko');
  
  // Clear the existing flex containers
  mainContainer.innerHTML = '';

  // (PRESS 1 2 3 4) //
  if (keyPressed === '1') {
    createFlexYonko('KAIDO.jpg', 'Kaidou of the Beasts, renowned as the worlds "Strongest Creature", is the Governor-General of the Beasts Pirates and was formerly one of the Four Emperors that ruled over the New World. He is also the father of Yamato.');
  } else if (keyPressed === '2') {
    createFlexYonko('BIGMOM.jpg', 'Charlotte Linlin, better known as Big Mom, is the captain of the Big Mom Pirates and was formerly one of the Four Emperors ruling over the New World, as the only female member of that group. She is also the matriarch of the very large Charlotte Family');
  } else if (keyPressed === '3') {
    createFlexYonko('SHANKS.jpg', '"Red-Haired" Shanks, commonly known as just "Red Hair", is the chief of the Red Hair Pirates and one of the Four Emperors that rule over the New World.');
  } else if (keyPressed === '4') {
    createFlexYonko('TEACH.jpg', 'Marshall D. Teach, most commonly referred to by his epithet Blackbeard, is the captain-turned-admiral of the Blackbeard Pirates, and one of the Four Emperors. He is also the only known person in history to wield the powers of two Devil Fruits.');
  }

});

window.onload = () => {
  setInterval(changeTextColor, 1000);
}

function changeTextColor() {
  const elements = document.getElementsByTagName('h2');
  const randomIndex = Math.floor(Math.random() * elements.length);
  const randomColor = getRandomColor();
  elements[randomIndex].style.color = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


















