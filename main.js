const messWithMeWord = document.querySelector('span.mess-with-me');
const messWithMeParagraph = document.querySelector('p.mess-with-me');
const triceratops = document.querySelector('#triceratops');
const tRex = document.querySelector('#hide-me');
const feathered = document.querySelector('#feathers');
const plushTRex = document.querySelector('#rattle');
const toggle = document.querySelector('#toggle');
const row = document.querySelector('#row');
const ankylosaur = document.querySelector('#biggify');

messWithMeWord.style.fontSize = '3em';
messWithMeParagraph.style.backgroundColor = 'lightgreen';
triceratops.style.width = '324px';
tRex.style.display = 'none';

triceratops.addEventListener('click', giveRedBorder);
feathered.addEventListener('click', makeTransparent);
plushTRex.addEventListener('click', addPadding);
toggle.addEventListener('click', toggleRowBackground);
ankylosaur.addEventListener('mouseenter', toggleSize);
ankylosaur.addEventListener('mouseleave', toggleSize);


function giveRedBorder(event) {
  event.target.style.border = '3px solid red';
}

function makeTransparent(event) {
  event.target.style.opacity = 0.5;
}

function addPadding(event) {
  event.target.style.paddingRight = '100px';
}


// let rowBackgroundIsWhite = true;

function toggleRowBackground() {
  if (row.style.backgroundColor === 'black') {
    row.style.backgroundColor = 'white';
  } else {
    row.style.backgroundColor = 'black';
  }

  // Alternately, using global variable:
  // if (rowBackgroundIsWhite) {
  //   row.style.backgroundColor = 'black';
  //   rowBackgroundIsWhite = false;
  // } else {
  //   row.style.backgroundColor = 'white';
  //   rowBackgroundIsWhite = true;
  // }

  // Or, instead of all that setting of false/true
  // in the actual ifs, you can do it on one line:
  // rowBackgroundIsWhite = !rowBackgroundIsWhite
}

function toggleSize(event) {
  if (event.target.style.width === '200px') {
    event.target.style.width = '162px';
  } else {
    event.target.style.width = '200px';
  }
}