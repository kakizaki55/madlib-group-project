// import functions

// reference needed DOM elements

const inputVerb1 = document.getElementById('input-verb-1'); 
const verb1 = document.getElementById('verb-1');
//input
const inputLocation1 = document.getElementById('input-location-1');
const inputName1 = document.getElementById('input-name-1');
const inputYourName = document.getElementById('input-your-name');
const inputNoun1 = document.getElementById('input-noun-1');
const inputVerb2 = document.getElementById('input-verb-2');
const inputVerb3 = document.getElementById('input-verb-3');
const inputVerb4 = document.getElementById('input-verb-4');
const inputLocation2 = document.getElementById('input-location-2');
const inputNoun2 = document.getElementById('input-noun-2');

//span
const Location1 = document.getElementById('location-1');
const Name1 = document.getElementById('name-1');
const YourName = document.getElementById('your-name');
const Noun1 = document.getElementById('noun-1');
const Verb2 = document.getElementById('verb-2');
const Verb3 = document.getElementById('verb-3');
const Verb4 = document.getElementById('verb-4');
const Location2 = document.getElementById('location-2');
const Noun2 = document.getElementById('noun-2');
const YourName2 = document.getElementById('your-name-2');


const submitButton = document.getElementById('submit-button');

//hidden

const scriptSection = document.getElementById('script-section');

const audio = document.getElementById('audio');




submitButton.addEventListener('click', () => { 
    audio.play ();
    const newVerb1 = inputVerb1.value; 
    verb1.textContent = newVerb1;
    //console.log(newVerb1);
    const newLocation1 = inputLocation1.value; 
    Location1.textContent = newLocation1;
    //console.log(Location1);
    const newName1 = inputName1.value;
    Name1.textContent = newName1;
    const newYourName = inputYourName.value;
    YourName.textContent = newYourName;
    YourName2.textContent = newYourName;
    const newNoun1 = inputNoun1.value;
    Noun1.textContent = newNoun1;
    const newVerb2 = inputVerb2.value;
    Verb2.textContent = newVerb2;
    const newVerb3 = inputVerb3.value;
    Verb3.textContent = newVerb3;
    const newVerb4 = inputVerb4.value;
    Verb4.textContent = newVerb4;
    const newLocation2 = inputLocation2.value;
    Location2.textContent = newLocation2;
    const newNoun2 = inputNoun2.value;
    Noun2.textContent = newNoun2;
    
    scriptSection.classList.remove('hidden');
});



// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
