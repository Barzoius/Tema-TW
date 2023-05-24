const hoverText = document.querySelector("#hover-text");

// Get all the <article> elements
const articles = document.querySelectorAll(".card");

const TEXT1 = "Monkey D. Luffy also known as Straw Hat Luffy and commonly as Straw Hat is the captain of the crew and the protagonist of the story.\nHe is the embodiment of freedom and his sole purpose seems to become the next Pirete King. "
const TEXT2 = "Roronoa Zoro, also known as Pirate Hunter Zoro, is the right-hand man of his crew's captain Monkey D. Luffy.\n Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it"
const TEXT3 = "Black Leg Sanji, born as Vinsmoke Sanji, is the cook of the Straw Hat Pirates. He is the fifth member of the crew and the fourth to join. Together with Zoro they form the so called WINGS OF THE FUTURE PIRATE KING."
const TEXT4 = "God Usopp is the sniper of the Straw Hat Pirates. He is the fourth member of the crew and the third to join."
const TEXT5 = "Cat Burglar Nami is the navigator of the Straw Hat Pirates. She is the third member of the crew and the second to join."
const TEXT6 = "Tony Tony Chopper, also known as Cotton Candy Lover Chopper, is the doctor of the Straw Hat Pirates. He is the sixth member of the crew and the fifth to join. Chopper is a reindeer that ate the Hito Hito no Mi, a Devil Fruit that allows its user to transform into a human hybrid or a human at will. "
const TEXT7 = "Iron Man Franky is the shipwright of the Straw Hat Pirates. He is the crew's eighth member and the seventh to join."
const TEXT8 = "Nico Robin, also known by her epithet Devil Child and the Light of the Revolution, is the archaeologist of the Straw Hat Pirates. She is the seventh member of the crew and the sixth to join. Robin ate the Hana Hana no Mi at a young age, giving her the power to reproduce her body parts (or her entire body) on any surface at will. "
const TEXT9 = "Soul King Brook is the musician of the Straw Hat Pirates, one of their two swordsmen. He is the ninth member of the crew and the eighth to join. Brook ate the Yomi Yomi no Mi, which allowed him to return to life after death once. Brook eventually learned to tap deeper into the powers of his Devil Fruit, giving him significant control over his own soul and the souls of others. "
const TEXT10 = "Knight of the Sea Jinbe is the helmsman of the Straw Hat Pirates. He is the tenth member of the crew and the ninth to join. Jinbe is a whale shark fish-man and a powerful master of Fish-Man Karate. His dream is to fulfill his former captain Fisher Tiger's dying wish of coexistence and equality between humans and fish-men. "


// Define an array of texts for each article
const texts = [TEXT1, TEXT2, TEXT3, TEXT4, TEXT5, TEXT6, TEXT7, TEXT8, TEXT9, TEXT10];

// Loop through each <article> element
articles.forEach((article, index) => {
  // Add event listener for "mouseover" event
  article.addEventListener("mouseover", () => {
    // Change the text in the <p> element based on the article index
    hoverText.textContent = texts[index];
  });

  // Add event listener for "mouseout" event
  article.addEventListener("mouseout", () => {
    // Reset the text in the <p> element to "LOOK HERE"
    hoverText.textContent = "LOOK HERE";
  });
});


const themeButton = document.getElementById('theme');
const body = document.body;
const savedtheme = localStorage.getItem('theme');

if(savedtheme)
{
  body.classList.add(savedtheme);
}

themeButton.onclick = () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
  
  const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', currentTheme);
};


