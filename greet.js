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
            return "Molo " + name;
        }

        else if (language === "English") {
            return "Hello " + name;
        }

        else if (language === "Afrikaans") {
            return "Goeie Dag " + name;
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
