var nameInputElement = document.querySelector(".nameInput");
var radioBtnElement = document.querySelector(".column2a");
var radioBtnElement = document.querySelector(".column2b");
var radioBtnElement = document.querySelector(".column2c");
var dataDisplayElement = document.querySelector(".column3");
var greetingElement = document.querySelector(".column4");
var resetElement = document.querySelector(".column5");
var counterElem = document.querySelector(".column6");

if(localStorage['name'] !== undefined){
   var storeNames = JSON.parse(localStorage['name'])
}

else {
    storeNames = {};
}

var factoryInstance = greetBack(storeNames);

function greeting() {
    var checkedRadioBtn = document.querySelector("input[name='radioBtn']:checked");
    var name = nameInputElement.value;
    var greeting = factoryInstance.greet(name, checkedRadioBtn.value);
    dataDisplayElement.innerHTML = greeting;
    counterElem.innerHTML = factoryInstance.counter()

    localStorage['name'] = JSON.stringify(factoryInstance.getName())

}

greetingElement.addEventListener('click', greeting);

resetElement.addEventListener('click', function() { 
    localStorage.clear();
    window.location.reload();
});

window.onload = function(){
    var localCounter = JSON.stringify(factoryInstance.counter())
    counterElem.innerHTML = localCounter;
   
}; 
