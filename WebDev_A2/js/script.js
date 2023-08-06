/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
var allpages = document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
hideall();
show(1);
function hideall() 
{ //function to hide all pages
    for (let onepage of allpages) 
    { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }

}

function show(pgno) { //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage = document.querySelector("#page" + pgno);
  //show the page
  onepage.style.display = "block";
}

page1btn.addEventListener("click", function () {
  show(1);
});
page2btn.addEventListener("click", function () {
  show(2);
});
page3btn.addEventListener("click", function () {
  show(3);
});


//sets the info for each type of hammy
const hamsterInfo = 
{
  'Winter White Hamster': {
    summary: 'Winter White Hamster',
    imageSrc: 'images/hamsters/winter_white_hamster.jpg',
    description: 'Winter White Hamster: As their name suggests, winter white dwarf hamsters originated from snowy regions. They also go by the names Siberian hamster and Djungarian hamster. Interestingly, their coats turn white in winter to help protect them from predators! They share a similar appearance to Campbell’s dwarf hamsters, with the exception of having furry feet, smaller ears and a wider dorsal stripe. ',
  },
  'Campbell’s Dwarf Hamster': {
    summary: 'Campbell’s Dwarf Hamster',
    imageSrc: 'images/hamsters/dwarf_hamster.jpg',
    description: 'Campbell’s Dwarf: The Campbell’s dwarf Russian hamster (Phodopus campbelli) grows to a maximum of 4 inches and has an average life expectancy of two years. This is another social breed that can be kept in same-sex groups as long as the hamsters are properly introduced. The Campbell’s dwarf Russian hamster is a quick little animal and may be prone to nip if they feel threatened or frightened. They are friendly hamsters and do not mind being held if it is done properly. Though nocturnal, these hamsters may wake for short periods throughout the day.'
  },
  'Syrian Hamster': {
    summary: 'Syrian Hamster',
    imageSrc: 'images/hamsters/syrian_hamster.jpg',
    description: 'Syrian Hamster: This is a large and popular hamster breed, they’re known to be the friendliest hamster breed for humans. As they’re solitary creatures, Syrians are best housed alone. They’re known to fight and inflict harm on each other when housed together. .',
  },
  'Roborovski Hamster': {
    summary: 'Roborovski Hamster',
    imageSrc: 'images/hamsters/roborovski_hamster.jpg',
    description: 'Roborovski Hamster: Roborovskis are social creatures that love interacting with their own kind. However, they don’t enjoy being touched and may try to escape when being handled. These hamsters can be handled but are happiest left alone. Their tiny size and agile nature mean that they can easily wriggle out of your grasp and get lost. They can be social and do well in same-sex groups as long as they are properly introduced. If you would like to own multiple hamsters, the dwarf Roborovski is a great choice. ',
  },
  'Chinese Hamster': {
    summary: 'Chinese Hamster',
    imageSrc: 'images/hamsters/chinese_hamster.png',
    description: 'Chinese Hamster: The Chinese hamster (Cricetus griseus) can get up to five inches long. They can live up to three years. This species is known for being friendly and comfortable with handling if they are consistently tamed and handled from a young age. If they are not accustomed to being handled, they can be timid and nervous, which can lead to nipping. They are tiny and quick and can easily squirm out of your hands. Always be cautious when handling a hamster and be aware of how high you are holding them. Stay close to the ground to avoid high falls. The Chinese hamster is another friendly species that can be kept in same-sex groups or pairs.',
  },
};

function changeContent(hamsterType) 
{
  //retrive info based on which hamster
  let info = hamsterInfo[hamsterType];

  //find <summary> within <details>
  let summaryElement = document.querySelector('details summary');
  //replace the text with the one defined when using the function
  summaryElement.textContent = info.summary;

   //find <img> with id "hamsterImage" 
  let hamsterImage = document.getElementById('hamsterImage');
  hamsterImage.src = info.imageSrc;
   // Find <p> with id "hamsterDescription" and update its content
   let description = document.getElementById('hamsterDescription');
   description.textContent = info.description;
  
}


// array of images
//                               0                                    1                                 2                               3
const images = ['images/bedding/aspen_shavings.jpg', 'images/bedding/paper_litter.jpg', 'images/bedding/paper_pellets.jpg', 'images/bedding/thimothy_hay.jpg'];


//image index ()
let currentIndex = 0;

// changes image depedning on value (1 for next, -1 for previous)
function changeImage(direction) {
  // Update the current index based on the direction
  currentIndex += direction;

  // go back to the last image
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  // go back the first image
  else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  // Get the image element with the ID "galleryImage"
  const galleryImage = document.getElementById('galleryImage');

  // Change the source of the image element to the image file at the current index
  galleryImage.src = images[currentIndex];
}

changeContent();
changeImage();

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

//https://www.w3schools.com/js/js_functions.asp

//https://blog.petloverscentre.com/types-of-hamster-breeds/

//https://youtu.be/sHG3Sf6XN9g
