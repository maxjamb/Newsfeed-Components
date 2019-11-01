/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//Step 1: Write a function that will create a menu component as seen below:

function createMenuComponent(){
  const div = document.createElement('div');
  div.classList.add('menu');

  const ul = document.createElement('ul');


//Step 2: Inside this function, iterate over the array creating a list item <li> element 
//for each item in the array. Add those items to the <ul>

  let li=
  menuItems.forEach(menu => {
    li = document.createElement('li');
    li.textContent = menu;
    ul.appendChild(li)
  });

//Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button')
//currently on the DOM.

const menuButton = document.querySelector('.menu-button')

//Step 4: add a click event listener to the menu button. When clicked it should toggle the class 
//'menu--open' on the menu (your div with a 'menu' class).

menuButton.addEventListener('click', e => {
  div.classList.toggle('menu--open');
});

div.appendChild(ul);

return div;

}


const menu = createMenuComponent();

document.querySelector('.articles')
.insertAdjacentElement("afterend", Menu);

console.log(document.querySelector('body'));
