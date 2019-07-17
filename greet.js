// var nameInputElement = document.querySelector(".nameInput");
// var greetMeButton = document.querySelector(".n4");
// var nameOutputElement = document.querySelector(".n5");

// function greetBtnClicked(){
// var newName = "Hello " + nameInputElement.value;
// nameOutputElement.innerHTML = newName;
// }

// greetMeButton.addEventListener('click', greetBtnClicked);

function greetBack(){
    var names = '';
    var nameCounter = 0;

    function setName(name){
        names = name;
    }

    function getName(){
        return names
    }

    function nameCounter(){
        return name++
    }

    return {
        setName,
        getName,
        nameCounter,
    }
};
