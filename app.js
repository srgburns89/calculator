$('.digits button').click( function () {
    let newDigit = $(this).text();
    
    if ( nextValue === null) {
        nextValue = 0;
    } 
        nextValue = nextValue + newDigit;
        updateDisplay();
}


);

$('.square-root').click( function(){
    // setHeldOperation(squareRoot);
 if (heldValue !== null){
        heldValue = Math.sqrt(heldValue)
    } else if (nextValue !== null){
        heldValue = Math.sqrt(nextValue)
    }
    nextValue = null;

    updateDisplay();
    
});

$('.add').click( function(){
    setHeldOperation(add) 
    $('.next-operation').text('+');
    updateDisplay();
    
    
});

$('.subtract').click( function(){
    setHeldOperation(subtract) 
    $('.next-operation').text('-');
    updateDisplay();
    
});

$('.multiply').click( function(){
    setHeldOperation(multiply) 
    $('.next-operation').text('x');
    updateDisplay();
});

$('.divide').click( function(){
    setHeldOperation(divide) 
    $('.next-operation').text('/');
    updateDisplay();
    
});

$('.equals').click( function(){
    setHeldOperation(null);
    $('.next-operation').text('');
    updateDisplay();
    
});


$('.clear-all').click( function(){
    let newClear = $(this).text()

    if(newClear){
        heldValue = null;
     heldOperation = null;
     nextValue = null; 
     $('.next-operation').text('');
    }

   updateDisplay();
    
}
);

$('.clear-entry').click( function(){
    let newClear = $(this).text()

    if(newClear){
     nextValue = null; 
    }

   updateDisplay();
    
});

let heldValue = null;
let heldOperation = null;
let nextValue = null; 

function showValue(location, value) {
    if (value === null){
        $(location).text("");
    } else {
        $(location).text(Number(value));
    }

}

function updateDisplay(){
    showValue('.next-value', nextValue);
    showValue('.held-value', heldValue);
}

function squareRoot(x) {
    return Math.sqrt(x); ;
  }

function add(x, y) {
    return Number(x) + Number(y);
  }
  
function subtract(x, y) {
    return Number(x) - Number(y);
  }
  
function multiply(x, y) {
    return Number(x) * Number(y);
  }

  
function divide(x, y) {
    return Number(x) / Number(y);
  }
  
function setHeldOperation(operation) {

    if(heldOperation !== null){
        heldValue = heldOperation(heldValue, nextValue);
    } else if (nextValue !== null){ 
        heldValue = nextValue;
    }
    nextValue = null;
    heldOperation = operation;

}

// function squareRootOperation(operation){
//     if(heldValue !== null){
//         heldValue = operation; 
//     } else if (nextValue !== null){
//         nextValue = operation;
//     }
//     nextValue = null;

// }