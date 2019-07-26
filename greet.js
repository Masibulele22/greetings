function greetBack(nameList) {
    var names = nameList || {};
    
    function greet(name, language) {
        var capsNames = name.toUpperCase().charAt(0) + name.slice(1);
        
        if(name === ""){
            return "Please enter your name"
        }

        if(names[capsNames] === undefined){
            names[capsNames] = 0;
        }

        if (language === "isiXhosa") {
            return "Molo " + capsNames;
        }

        else if (language === "English") {
            return "Hello " + capsNames;
        }

        else if (language === "Afrikaans") {
            return "Goeie Dag " + capsNames;
        }

    }

    function getName() {
        return names
    }
    
    function counter() {
        var countNames = Object.keys(names)
        return countNames.length;

    }


    return {
        getName,
        greet,
        counter
    }
};

