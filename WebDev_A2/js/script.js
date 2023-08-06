/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



// function toggleHamsterInfo() {
//   var hamsterInfo = document.getElementById("hamsterInfo");
//   hamsterInfo.classList.toggle("show");
// }

// function changeImage(imageSrc) {
//   var hamsterImage = document.getElementById("hamsterImage");
//   hamsterImage.src = imageSrc;
// }

// function changeSummary(summaryText) {
//   var summaryElement = document.querySelector('details summary');
//   summaryElement.textContent = summaryText;
// }

function changeContent(summaryText, imageSrc , hamsterDescription) {
  //find <summary> within <details>
  let summaryElement = document.querySelector('details summary');
  //replace the text with the one defined when using the function
  summaryElement.textContent = summaryText;

   //find <img> with id "hamsterImage" 
  let hamsterImage = document.getElementById('hamsterImage');
  hamsterImage.src = imageSrc;

   // Find <p> with id "hamsterDescription" and update its content
   let description = document.getElementById('hamsterDescription');
   description.textContent = hamsterDescription;
}



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
}
