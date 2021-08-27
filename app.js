// import functions

// reference needed DOM elements
const inputVerb1 = document.getElementById('input-verb-1'); 
console.log(inputVerb1);

const submitButton = document.getElementById('submit-button');
console.log(submitButton);

const verb1 = document.getElementById('verb-1');
console.log(verb1);

submitButton.addEventListener('click', () => {
    const newVerb1 = inputVerb1.value; 
    verb1.textContent = newVerb1;
    console.log(newVerb1);
});



// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
