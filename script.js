//Create at least one element using createElement.
//!Main Body CSS:
document.getElementById('body').style.color = 'white';



//Cache at least one element using querySelector or querySelectorAll.
//Use appendChild and/or prepend to add new elements to the DOM.
//!Main Header:
const mainEL = document.querySelector('div');
const h1 = document.createElement('h1');
h1.textContent = 'Award Winning Apple Pie Recipe';
mainEL.setAttribute('class', 'flex-ctr');
mainEL.appendChild(h1);
mainEL.classList.add('flex-around');

//!Ingridents items:
const mainContent = document.getElementById('main-content');
const ul = document.createElement('ul');
ul.textContent = "Ingridents: ";
const li = document.createElement('li');
li.textContent = 'Eggs';
const li2 = document.createElement('li');
li2.textContent = "Flour";
const li3 = document.createElement('li');
li3.textContent = 'A bunch of Apples';


//!Appending
ul.appendChild(li); // adds to the end
ul.append(li2); // adds to the beginning
ul.insertBefore(li3, li2) // Inserts before the selected child.
mainContent.prepend(ul);

//!Form Validation:
//!Email Validation:
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}

//!Top Bar Navigation:
// Get the navigation bar element by its ID
const navBar = document.getElementsByClassName('topnav');

// Change the background color of the navigation bar
navBar.style.backgroundColor = '#333';
navBar.style.overflow = 'hidden';
navBar.style.color = '#f2f2f2';

// Log the width and height of the navigation bar
console.log("Navigation bar width:", navBar.offsetWidth, "pixels");
console.log("Navigation bar height:", navBar.offsetHeight, "pixels");


//!Email Validation:
function validateEmailWithDomain(email, allowedDomain) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
      const domain = email.split('@')[1];
      return domain === allowedDomain;
  }
  return false;
}

//!Terms Validation:
function validate(){
  // get the checkbox element from the DOM using the getElementId function
  let checkbox=document.getElementById("terms");
  // get the text element to display the status of checkbox
  let text=document.getElementById("terms");
  // use the checked property to check if the checkbox is checked
  if (checkbox.checked){
      // display result by assigning to innerHTML of the text element.
      text.innerHTML="Thank you for accepting the agreement";
  }
  else{
      text.innerHTML = "Please accept the agreement to proceed";
    }}