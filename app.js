'use strict';

//global variables for pictures
var itemOne = document.getElementById('item1');
var itemTwo = document.getElementById('item2');
var itemThree = document.getElementById('item3');
var productContainer = document.getElementById('product-container');
var itemArray = [];

//constructor
function Item(src, name) {
    this.src = `./images/${src}.jpg`;
    this.title = name;
    this.alt = name;
    this.clicked = 0;
    this.viewed = 0;

    itemArray.push(this);
}

//helper function
function randomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateImages() {

    var indexOne = randomIndex(itemArray.length);

    itemOne.src = itemArray[indexOne].src;
    itemOne.title = itemArray[indexOne].title;
    itemOne.alt = itemArray[indexOne].alt;
    itemArray[indexOne].viewed++;

    var indexTwo = randomIndex(itemArray.length);
    while (indexOne === indexTwo) {
        indexTwo = randomIndex(itemArray.length);
    }

    itemTwo.src = itemArray[indexTwo].src;
    itemTwo.title = itemArray[indexTwo].title;
    itemTwo.alt = itemArray[indexTwo].alt;
    itemArray[indexTwo].viewed++;

    var indexThree = randomIndex(itemArray.length);
    while (indexThree === indexTwo || indexThree === indexOne) {
        indexThree = randomIndex(itemArray.length);
    }

    itemThree.src = itemArray[indexThree].src;
    itemThree.title = itemArray[indexThree].title;
    itemThree.alt = itemArray[indexThree].alt;
    itemArray[indexThree].viewed++;
    
    console.table(itemArray);
};

function handleClick(event) {
    var vote = event.target.title;
    console.log(vote, 'was clicked');
    for (var i = 0; i < itemArray.length; i++) {
        if (vote === itemArray[i].title) {
            itemArray[i].clicked++;
        }
    }
    generateImages();
};

function createOnPageLoad() {
new Item ('bag', 'R2-D2 Bag');
new Item ('banana', 'Banana Slicer');
new Item ('bathroom', 'iPad and Toilet Paper Holder');
new Item ('boots', 'Toeless Rain Boots');
new Item ('breakfast', 'Breakfast Station');
new Item ('bubblegum', 'Meatball Bubblegum');
new Item ('chair', 'Rounded Chair');
new Item ('cthulhu', 'Cthulhu Figurine');
new Item ('dog-duck', 'Duck Muzzle For Dogs');
new Item ('dragon', 'Canned Dragon Meat');
new Item ('pen', 'Silverware Pen Tops');
new Item ('pet-sweep', 'Pet Sweeper');
new Item ('scissors', 'Pizza Scissors');
new Item ('shark', 'Shark Sleeping Bag');
new Item ('sweep', 'Baby Sweeper');
new Item ('tauntaun', 'Tauntaun Sleeping Bag');
new Item ('unicorn', 'Canned Unicorn Meat');
new Item ('usb', 'Tentacle USB');
new Item ('water-can', 'Self-Watering Watering Can');
new Item ('wine-glass', 'Impossible Wine Glass');
};

createOnPageLoad();
productContainer.addEventListener('click', handleClick);
generateImages();