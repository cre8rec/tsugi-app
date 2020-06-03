var nameInput = document.querySelector('.name')
var numberInput = document.querySelector('.number')
var errorMessage = document.querySelector('.errorMessage')
var placeInLine = document.querySelector('.placeInLine')
var waitMessage = document.querySelector('.waitMessage')


var lineUp = {
    listOfNames: [],
    listOfNumbers: [],
    position: null,



    displayPlaceInLine: () => {
        this.position = this.lineUp.listOfNames.length;
        return 'you are # ' + (position);
    },

    displayWaitMessage: () => {
        this.position = this.lineUp.listOfNames.length;
        if (position === 1) {
            return 'come on in';
        } else if (position === 2) {
            return 'you are up next';
        } else if (position < 5) {
            return 'stay close by';
        } else {
            return 'go for a walk! we will text you when your turn is coming up'
        }
    },


    
}

nameInput.addEventListener('keydown', enter => {
    if(event.key === 'Enter') {
    lineUp.listOfNames.push(nameInput.value);
    return numberInput.focus();
    } 
});

numberInput.addEventListener('keydown', enter => {
    if(event.key === 'Enter') {
        if (numberInput.value.length === 10) {
        lineUp.listOfNumbers.push('+1' + numberInput.value)
        errorMessage.innerHTML = ''
        placeInLine.innerHTML = lineUp.displayPlaceInLine();
        waitMessage.innerHTML = lineUp.displayWaitMessage();
       
        
        } else {
            errorMessage.innerHTML = 'please enter 10 digit number'
        }
    } 
});

//display place in line 
//if array number = 1 
//var placeInLine = () =>





var sendMessage = () =>{
//run node send-sms.js
}




